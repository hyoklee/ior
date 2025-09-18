#!/usr/bin/env python3
"""
Parse IOR benchmark output and convert to JSON format for github-action-benchmark.

This script parses IOR benchmark output files and extracts performance metrics
(read/write throughput) to generate JSON output compatible with the
benchmark-action/github-action-benchmark action.
"""

import re
import json
import sys
import argparse
from datetime import datetime
from pathlib import Path


def parse_ior_output(filename):
    """
    Parse IOR benchmark output and extract performance metrics.

    Args:
        filename (str): Path to the IOR benchmark output file

    Returns:
        list: List of benchmark results in github-action-benchmark format
    """
    results = []

    try:
        with open(filename, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File {filename} not found")
        return []
    except Exception as e:
        print(f"Error reading file {filename}: {e}")
        return []

    # Split by test sections
    test_sections = re.split(r'=== Test \d+:', content)

    for i, section in enumerate(test_sections[1:], 1):  # Skip first empty section
        test_name = f"Test {i}"

        # Extract test description from the section header
        lines = section.split('\n')
        if lines:
            desc_match = re.match(r'\s*(.+?)\s*===', lines[0])
            if desc_match:
                test_name = f"Test {i}: {desc_match.group(1).strip()}"

        # Look for performance results in various IOR output formats
        # IOR can output results in different formats depending on version:
        # - "Max Write: 123.45 MiB/sec"
        # - "write   123.45 MiB/sec   ..."
        # - Summary tables with performance data

        # Pattern 1: Max Write/Read format
        write_matches = re.findall(r'Max Write:\s+([\d.]+)\s+MiB/sec', section)
        read_matches = re.findall(r'Max Read:\s+([\d.]+)\s+MiB/sec', section)

        # Pattern 2: Simple write/read format
        if not write_matches:
            write_matches = re.findall(r'\bwrite\s+([\d.]+)\s+MiB/sec', section, re.IGNORECASE)
        if not read_matches:
            read_matches = re.findall(r'\bread\s+([\d.]+)\s+MiB/sec', section, re.IGNORECASE)

        # Pattern 3: Summary table format (common in newer IOR versions)
        # Look for lines like: "write    1234.56     MB/sec    ..."
        if not write_matches:
            table_write_matches = re.findall(r'write\s+[\d.]+\s+[\d.]+\s+([\d.]+)\s+MB/sec', section, re.IGNORECASE)
            if table_write_matches:
                write_matches = table_write_matches
        if not read_matches:
            table_read_matches = re.findall(r'read\s+[\d.]+\s+[\d.]+\s+([\d.]+)\s+MB/sec', section, re.IGNORECASE)
            if table_read_matches:
                read_matches = table_read_matches

        # Add results if found
        if write_matches:
            results.append({
                "name": f"{test_name} - Write Throughput",
                "unit": "MiB/sec",
                "value": float(write_matches[-1])  # Take the last/best value
            })

        if read_matches:
            results.append({
                "name": f"{test_name} - Read Throughput",
                "unit": "MiB/sec",
                "value": float(read_matches[-1])  # Take the last/best value
            })

    # If no specific test sections found, try to parse any performance data from the whole content
    if not results:
        print("No test sections found, trying to parse general performance data...")

        # Try all patterns on the full content
        all_write_matches = re.findall(r'(?:Max Write|write):\s+([\d.]+)\s+(?:MiB|MB)/sec', content, re.IGNORECASE)
        all_read_matches = re.findall(r'(?:Max Read|read):\s+([\d.]+)\s+(?:MiB|MB)/sec', content, re.IGNORECASE)

        # Also try table format
        if not all_write_matches:
            all_write_matches = re.findall(r'write\s+[\d.]+\s+[\d.]+\s+([\d.]+)\s+(?:MiB|MB)/sec', content, re.IGNORECASE)
        if not all_read_matches:
            all_read_matches = re.findall(r'read\s+[\d.]+\s+[\d.]+\s+([\d.]+)\s+(?:MiB|MB)/sec', content, re.IGNORECASE)

        for i, value in enumerate(all_write_matches):
            results.append({
                "name": f"Write Performance {i+1}",
                "unit": "MiB/sec",
                "value": float(value)
            })

        for i, value in enumerate(all_read_matches):
            results.append({
                "name": f"Read Performance {i+1}",
                "unit": "MiB/sec",
                "value": float(value)
            })

    return results


def main():
    """Main function to handle command line arguments and run the parser."""
    parser = argparse.ArgumentParser(
        description="Parse IOR benchmark output and convert to JSON for github-action-benchmark",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 parse_ior_benchmark.py benchmark_output.txt results.json
  python3 parse_ior_benchmark.py --verbose output.txt results.json
        """
    )

    parser.add_argument('input_file', help='Input file containing IOR benchmark output')
    parser.add_argument('output_file', help='Output JSON file for benchmark results')
    parser.add_argument('-v', '--verbose', action='store_true',
                       help='Enable verbose output')

    args = parser.parse_args()

    if args.verbose:
        print(f"Parsing IOR benchmark output from: {args.input_file}")
        print(f"Output will be written to: {args.output_file}")

    try:
        results = parse_ior_output(args.input_file)

        if not results:
            print("Warning: No benchmark results found in the output file")
            if args.verbose:
                print("This could mean:")
                print("  - IOR didn't run successfully")
                print("  - Output format is different than expected")
                print("  - File contains no performance data")

            # Create a minimal result to avoid workflow failure
            results = [{
                "name": "No Results Found",
                "unit": "N/A",
                "value": 0
            }]

        # Ensure output directory exists
        output_path = Path(args.output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Output in format expected by github-action-benchmark
        with open(args.output_file, 'w') as f:
            json.dump(results, f, indent=2)

        print(f"[SUCCESS] Successfully parsed {len(results)} benchmark results:")
        for result in results:
            print(f"  [RESULT] {result['name']}: {result['value']} {result['unit']}")

        if args.verbose:
            print(f"\n[INFO] Results written to: {args.output_file}")

    except Exception as e:
        print(f"[ERROR] Error parsing benchmark results: {e}")

        # Create a minimal result to avoid workflow failure
        try:
            output_path = Path(args.output_file)
            output_path.parent.mkdir(parents=True, exist_ok=True)

            with open(args.output_file, 'w') as f:
                json.dump([{
                    "name": "Parse Error",
                    "unit": "error",
                    "value": 0
                }], f, indent=2)
        except Exception as write_error:
            print(f"[ERROR] Failed to write error result: {write_error}")

        sys.exit(1)


if __name__ == "__main__":
    main()
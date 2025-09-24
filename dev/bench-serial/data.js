window.BENCHMARK_DATA = {
  "lastUpdate": 1758732161874,
  "repoUrl": "https://github.com/hyoklee/ior",
  "entries": {
    "IOR HDF5 Serial Performance": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "8d8067a21e1559f10c0e5518d361dfb018425349",
          "message": "fix: update IOR benchmark parser regex patterns\n\nUpdate parse_ior_benchmark.py to correctly parse the current IOR output\ntable format where bandwidth values are in the bw(MiB/s) column. The\nscript now successfully extracts performance data from all test sections.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-22T20:24:04-05:00",
          "tree_id": "b126fd9a3ebc02ac0840facc0cd3b6b072177a5f",
          "url": "https://github.com/hyoklee/ior/commit/8d8067a21e1559f10c0e5518d361dfb018425349"
        },
        "date": 1758590913942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 166.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 738.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 809.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6139.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 986.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9986.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 940.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8038.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 959.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7322.46,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T11:36:31-05:00",
          "tree_id": "f2c8fc1170777919149737475aaa3283079dca49",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1758732160925,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1000.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 754.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5854.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1078.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10815.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 960.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8169.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 947.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7510.21,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
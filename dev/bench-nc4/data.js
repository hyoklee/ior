window.BENCHMARK_DATA = {
  "lastUpdate": 1761527653645,
  "repoUrl": "https://github.com/hyoklee/ior",
  "entries": {
    "IOR NetCDF-4 Performance": [
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
          "id": "c58e4427d88932349a9fdabc20bedd229e320680",
          "message": "fix: replace PnetCDF with netCDF-4 in benchmark workflows\n\nThe workflows were configured with --with-ncmpi but only built netCDF-C\n(not PnetCDF), causing configure errors. Updated both parallel and serial\nworkflows to use --with-netcdf and the NetCDF backend instead of NCMPI.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T19:21:11-05:00",
          "tree_id": "69af3b4831f05a46ac88d99dd63ea0895d5e114f",
          "url": "https://github.com/hyoklee/ior/commit/c58e4427d88932349a9fdabc20bedd229e320680"
        },
        "date": 1761524800647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "No Results Found",
            "value": 0,
            "unit": "N/A"
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
          "id": "50d092e39c0cdb99c4788e7bbe8b147a5db9d3a7",
          "message": "fix: use HDF5 backend instead of non-existent NetCDF backend\n\nIOR does not have a --with-netcdf configure option or a NetCDF backend.\nThe available options are --with-hdf5 for HDF5 and --with-ncmpi for\nPnetCDF (parallel-netcdf). Since NetCDF-4 uses HDF5 as its storage\nformat, this workflow now uses the HDF5 backend to create HDF5 files\nwhich are compatible with the NetCDF-4 format.\n\nChanges:\n- Removed invalid --with-netcdf configure option\n- Changed benchmark tests from -a NetCDF to -a HDF5\n- Updated output file extensions from .nc to .h5\n- Simplified configure to use --with-hdf5 without path (uses env vars)\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T20:11:07-05:00",
          "tree_id": "d31841eac0da5511bf4266251b5d7a33a9d5a0c3",
          "url": "https://github.com/hyoklee/ior/commit/50d092e39c0cdb99c4788e7bbe8b147a5db9d3a7"
        },
        "date": 1761527652104,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 303.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1800.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1486.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 6738.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 858.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5513.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1244.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 7855.61,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
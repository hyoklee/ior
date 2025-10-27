window.BENCHMARK_DATA = {
  "lastUpdate": 1761524625016,
  "repoUrl": "https://github.com/hyoklee/ior",
  "entries": {
    "IOR NetCDF-4 Serial Performance": [
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
          "id": "1e7b41052edb1c36971c87d617e6353ecd07c109",
          "message": "ci: use my repo",
          "timestamp": "2025-10-26T15:39:00-05:00",
          "tree_id": "e26163265d5ef1b7e3eab6311bb07a49f70aa62d",
          "url": "https://github.com/hyoklee/ior/commit/1e7b41052edb1c36971c87d617e6353ecd07c109"
        },
        "date": 1761519522666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 871.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7223.59,
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
          "id": "c58e4427d88932349a9fdabc20bedd229e320680",
          "message": "fix: replace PnetCDF with netCDF-4 in benchmark workflows\n\nThe workflows were configured with --with-ncmpi but only built netCDF-C\n(not PnetCDF), causing configure errors. Updated both parallel and serial\nworkflows to use --with-netcdf and the NetCDF backend instead of NCMPI.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T19:21:11-05:00",
          "tree_id": "69af3b4831f05a46ac88d99dd63ea0895d5e114f",
          "url": "https://github.com/hyoklee/ior/commit/c58e4427d88932349a9fdabc20bedd229e320680"
        },
        "date": 1761524623434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "No Results Found",
            "value": 0,
            "unit": "N/A"
          }
        ]
      }
    ]
  }
}
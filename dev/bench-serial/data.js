window.BENCHMARK_DATA = {
  "lastUpdate": 1759216992616,
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
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T16:36:31Z",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1758784815367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 159.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1119.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 611.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6265.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1075.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9641.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8159.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 991.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7442.52,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T16:36:31Z",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1758871286713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 146.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1004.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 833.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5817.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1029.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9562.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 945.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7438.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1042.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7217.12,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T16:36:31Z",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1758957495453,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 221,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1011.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 785.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6041.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1071.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10138.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 970.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8308.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 950.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7215.14,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T16:36:31Z",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1759043851123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 154.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 664.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 791.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6887.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 977.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10548.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 949.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8489.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 955.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7994.63,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "7399f858e89c16f9fe0574c01ce12a2dbf2f7e24",
          "message": "ci: activate cron",
          "timestamp": "2025-09-24T16:36:31Z",
          "url": "https://github.com/hyoklee/ior/commit/7399f858e89c16f9fe0574c01ce12a2dbf2f7e24"
        },
        "date": 1759216991830,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 149.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1061.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 757.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6509.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1034.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10129.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 921.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8122.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 828.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7873.97,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
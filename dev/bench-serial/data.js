window.BENCHMARK_DATA = {
  "lastUpdate": 1781344687866,
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
        "date": 1759303309102,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 246.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1160.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 846.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5800.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1054.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9278.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 969.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7322.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 906.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6942.37,
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
        "date": 1759475984593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 218.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1144.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 790.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6146.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1073.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9786.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 977.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8137.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 939.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8069.69,
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
        "date": 1759562216663,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 156.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1141.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 793.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6737.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1068.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9918.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 991.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7356.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 971.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7507.52,
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
        "date": 1759735294392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 156.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 958.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 779.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6617.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1079.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10054.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8188.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 961.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7085.93,
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
        "date": 1759821592636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 238.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 994.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 700.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6715.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1062.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10350.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 983.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8716.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 958.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8148.71,
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
        "date": 1759908074884,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 240.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 898.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 741.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4739.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1066.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9466.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 998.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6858.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 863.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6709.6,
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
        "date": 1759994466320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 207,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1216.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 783.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6289.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1046.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10502.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 941.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8366.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 961.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7459.99,
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
        "date": 1760080857123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 142.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 980.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 813.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5821.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1043.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10135.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 935.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8234.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1015.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7943.76,
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
        "date": 1760167152965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 234.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 934.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 718.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4725.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 922.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8682.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 874.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6631.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 871.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6250.08,
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
        "date": 1760340085498,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 964.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 826.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6086.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1078.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10290.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 975.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8460.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1013.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7624.34,
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
        "date": 1760513020735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 136.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 791.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 680.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5125.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 971.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9430.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 905.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6364.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 902.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8093.36,
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
        "date": 1760599302107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 193.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1034.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 807.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6034.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1058.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9342.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 959.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6847.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1002.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7116.23,
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
        "date": 1760685672523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 232.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 856.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 775.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6249.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1013.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9556.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 988.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7661.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1011.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8899.81,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "dca8e45ad5a946f16a7d67af77cfd9bb6b5c3647",
          "message": "ci: change deprecated options",
          "timestamp": "2025-10-17T10:28:34-05:00",
          "tree_id": "e532f2ee787ba00b256efe3adb0bb53b20147c13",
          "url": "https://github.com/hyoklee/ior/commit/dca8e45ad5a946f16a7d67af77cfd9bb6b5c3647"
        },
        "date": 1760715092919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 168.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 925.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 733.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5740.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 954.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9796.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1005.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8693.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1063.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7288.36,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "94e040cb75ac6880b8f50ae934a34ec467564af5",
          "message": "ci(nc4): rm unused options",
          "timestamp": "2025-10-17T10:46:40-05:00",
          "tree_id": "49d02da202643da6785a7f856961741f11f68a23",
          "url": "https://github.com/hyoklee/ior/commit/94e040cb75ac6880b8f50ae934a34ec467564af5"
        },
        "date": 1760716130446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 192.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1131.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 748.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4840.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1049.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9436,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 913.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8747.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 958.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7732.86,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "94e040cb75ac6880b8f50ae934a34ec467564af5",
          "message": "ci(nc4): rm unused options",
          "timestamp": "2025-10-17T15:46:40Z",
          "url": "https://github.com/hyoklee/ior/commit/94e040cb75ac6880b8f50ae934a34ec467564af5"
        },
        "date": 1761031262616,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 197.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1145.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 812.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5980.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1042.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10191.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 958.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7504.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 973.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7543.71,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "94e040cb75ac6880b8f50ae934a34ec467564af5",
          "message": "ci(nc4): rm unused options",
          "timestamp": "2025-10-17T15:46:40Z",
          "url": "https://github.com/hyoklee/ior/commit/94e040cb75ac6880b8f50ae934a34ec467564af5"
        },
        "date": 1761204059568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 155.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 994.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 816.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5726.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1070.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10636.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 968.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8041.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 963.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8114.03,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "94e040cb75ac6880b8f50ae934a34ec467564af5",
          "message": "ci(nc4): rm unused options",
          "timestamp": "2025-10-17T15:46:40Z",
          "url": "https://github.com/hyoklee/ior/commit/94e040cb75ac6880b8f50ae934a34ec467564af5"
        },
        "date": 1761290467605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 209.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1092.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 773.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6097.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 857.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9519.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 925,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8389.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 932.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7350.69,
            "unit": "MiB/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "94e040cb75ac6880b8f50ae934a34ec467564af5",
          "message": "ci(nc4): rm unused options",
          "timestamp": "2025-10-17T15:46:40Z",
          "url": "https://github.com/hyoklee/ior/commit/94e040cb75ac6880b8f50ae934a34ec467564af5"
        },
        "date": 1761376785931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 156.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 914.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 647.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6078.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 997.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10591.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 953.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7989.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 910.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7335.78,
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
          "id": "193c1de828855c8e35fa30306479a4180b4bd26e",
          "message": "ci: fix yml",
          "timestamp": "2025-10-26T13:11:27-05:00",
          "tree_id": "812f9299ef76d38fa44ae7e754a8710db6399a90",
          "url": "https://github.com/hyoklee/ior/commit/193c1de828855c8e35fa30306479a4180b4bd26e"
        },
        "date": 1761502470072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 161.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1004.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 755.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5916.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1063.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10100.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 990.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8579.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1001.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7609.96,
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
          "id": "1e7b41052edb1c36971c87d617e6353ecd07c109",
          "message": "ci: use my repo",
          "timestamp": "2025-10-26T15:39:00-05:00",
          "tree_id": "e26163265d5ef1b7e3eab6311bb07a49f70aa62d",
          "url": "https://github.com/hyoklee/ior/commit/1e7b41052edb1c36971c87d617e6353ecd07c109"
        },
        "date": 1761511239373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 208.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 994.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 787.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5916.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1028.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9462.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 929.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6997.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1006.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7090.24,
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
        "date": 1761524577231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 156.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 648.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 815.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5844.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1077.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10566.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 958.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8950.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 946.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7954,
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
          "id": "50d092e39c0cdb99c4788e7bbe8b147a5db9d3a7",
          "message": "fix: use HDF5 backend instead of non-existent NetCDF backend\n\nIOR does not have a --with-netcdf configure option or a NetCDF backend.\nThe available options are --with-hdf5 for HDF5 and --with-ncmpi for\nPnetCDF (parallel-netcdf). Since NetCDF-4 uses HDF5 as its storage\nformat, this workflow now uses the HDF5 backend to create HDF5 files\nwhich are compatible with the NetCDF-4 format.\n\nChanges:\n- Removed invalid --with-netcdf configure option\n- Changed benchmark tests from -a NetCDF to -a HDF5\n- Updated output file extensions from .nc to .h5\n- Simplified configure to use --with-hdf5 without path (uses env vars)\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T20:11:07-05:00",
          "tree_id": "d31841eac0da5511bf4266251b5d7a33a9d5a0c3",
          "url": "https://github.com/hyoklee/ior/commit/50d092e39c0cdb99c4788e7bbe8b147a5db9d3a7"
        },
        "date": 1761527643100,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 164.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1033.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 751.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5146.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1041.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10009.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 912.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8054.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 927.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7032.23,
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
          "id": "aa20fa3bbd58d8ee26e06b1e8ed1a9d60f5e69e2",
          "message": "refactor: replace NetCDF-4 with HDF5 Parallel benchmark\n\n- Remove benchmark-netcdf4-serial.yml workflow\n- Rename benchmark-netcdf4.yml to benchmark-hdf5-parallel.yml\n- Remove all netCDF build steps from workflow\n- Replace \"NetCDF-4\" with \"HDF5 Parallel\" throughout\n- Update benchmark directory path from dev/bench-nc4 to dev/bench-parallel\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-27T08:37:11-05:00",
          "tree_id": "eb1ae5e31b1be4d4883e65da7582e550bd95a71e",
          "url": "https://github.com/hyoklee/ior/commit/aa20fa3bbd58d8ee26e06b1e8ed1a9d60f5e69e2"
        },
        "date": 1761572341662,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 329.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1310.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 728.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6518.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 977.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10121.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 750.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8594.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 858.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7084.02,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T08:45:25-05:00",
          "tree_id": "2004339e92a96e04cd088f509158ab9dd542f308",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1761572816120,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 267.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1034.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1025.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5555.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1514.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6595.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1434.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6620.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1319.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6022.49,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1761636134891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 144.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 919.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 761.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4420.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1005.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9727.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 909.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7785.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 925.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5908.47,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1761808767098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 137.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1161.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 795.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6571.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 964.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9556.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 860.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8082.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 912.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8322.69,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1761895258735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 219.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1193.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1019.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4697.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1406.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 5964.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1330.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5477.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1243.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5582.88,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1761981619192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 197.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1075.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 687.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5117.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 985.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9648.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 925.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7485.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 881.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6486.71,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762154467794,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 158.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 888.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 800.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6002.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1039.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8787.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 963.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7383.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 987.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7425.12,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762240944706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 165.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 726.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 756.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5405.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1048.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9115.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 938.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7177.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 918.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6458.34,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762327253787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 158.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1040.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 817.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6544.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 946.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9591.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8313.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 877.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7292.92,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762413586857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 131.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1071.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 811.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6009.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 980.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9349.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 928.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7541.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 986.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7851.56,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762499987714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 153.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 894.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 636.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5740.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 739,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10631.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 735.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7894.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 824.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7537.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762586418507,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 232.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 823.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 798.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6393.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1057.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10773.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 929.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8463.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1003.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7496.25,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762672778533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 140.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1331.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 845.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6393.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1026.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9606.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1011.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7844.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 942.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8025.84,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762759295587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 165.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1144.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 854.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7136.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1050.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9994.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 974.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8695.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 951.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7884.03,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762845655817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 914.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 785.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6063.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1007.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9233.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 887.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6965.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 994.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6366.2,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1762932012024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 221.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1094.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1174.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4828.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1502.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6383.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1395.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5599.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1320.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5523.76,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1763191089518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 125.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1019.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 780.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6373.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 992.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10401.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 977.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8428.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 934.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7941.35,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1763450449793,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 130.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 850.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 702.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4902.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 985.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8423.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 944.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7253.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 892.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7030.35,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1763709646032,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 165.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1200.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1001.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4629.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1466.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6470.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1348.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5494.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1307.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5248.92,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1763795898619,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1071.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 782.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5885.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 954.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9613.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 903.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7768.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 925.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7552.95,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1764141632933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 125.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 849.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 597.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4837.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1001.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8519.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 872.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6035.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 840.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5879.32,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1764660181867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 164.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1161.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1115.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4918.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1535.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6354.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1386.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5684.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1388.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5639.63,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1764746547412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 215.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 959.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 832.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5973.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1107.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10890.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 968.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8408.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1022.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8124.72,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1764832946224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 207.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1103.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1082.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4837.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1558.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 5923.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1441.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5783.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1396.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5832.88,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1764919322034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 161.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1209.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 801.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6605.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1067.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10386.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 954.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8333.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 959.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9477.37,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765005519863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 274.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1280.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 837.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6063.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1013.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10429.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 917.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8028.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 981.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8474.71,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765091958010,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 135.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1049.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 648.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6696.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1010.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10179.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 928.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8806.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 940.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8297.01,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765265006413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 160.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1135.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 773.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6041.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1067.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9682.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 984.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7680.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 971.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7493.58,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765351449963,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 130.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1088.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 764.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5917.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1025.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9727.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 931.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8188.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 940.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7534.5,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765610430060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 152.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 931.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 782.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5914.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1075.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9502.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 926.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7376.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 957.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7313.78,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1765869872211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 126.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 955.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 634.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5055.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 988.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9641.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 786.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7074.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 891.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7329.11,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1766042609041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 140.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1002.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 821.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6357.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1063.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8707.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 977.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7901.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 974.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7961.85,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1766128980631,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 121.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1021.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 753.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5586.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 952.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9218.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 904,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7390.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 971.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7898.88,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1766215159952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 255.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1244.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 801.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5740.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1031.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8848,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 938.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7231.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 944.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7106.1,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1766474698265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 148.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1009.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 794.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5159.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 964.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9701.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 952.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7325.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 973.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7742.57,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1766647393275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 160.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1168,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 793.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6675.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1013.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9895.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 943.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7250.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 951.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7512.37,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1767079453964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 159.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1076.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 845.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5969.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1033.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10491.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 871.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7507.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 975.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7138.51,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1767165890235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 156.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1009.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 798.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5909.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1051.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9682.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 968.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7418.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 938.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7793.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1767252244333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 147.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 948.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 788.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6200.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1020.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9199.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 933.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7498.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 524.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6862.41,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1767424822811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 208.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 974.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 684.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5562,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1043.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10038.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 939.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8085.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 962.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7307.66,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1767770774480,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 229.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1061.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1097.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4033.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1516.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 5609.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1378.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5187.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1364.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5074.16,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1768031524501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 160.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1105.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 834.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6706.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1077.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10423.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 924.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8202.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 985.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7568.76,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1768289148235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 105.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1109.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 529.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4403.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1481,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 5874.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1282.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5600.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1326.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5103.06,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1768375585570,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 220.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1062.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1189.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4992.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1555.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6414.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1417.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6059.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1385.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5459.63,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769066879052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 191.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1008.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 394.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5871.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1016.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9860.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 803.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7694.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 967.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7116.71,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769153172066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 274.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1278.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 612.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6013.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1064.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10334.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8626.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1006.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7749.43,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769239277150,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 150.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1054.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 840.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6269.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1064.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10268.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1014.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8145.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1012.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8033.22,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769325795283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 136.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1225.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 808.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5995.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1077.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9756.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 955.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7359.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1032.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7944.36,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769498911952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 146.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1136.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 813.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5810.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 851.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9873.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 957.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7807.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1007.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7282.28,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769585202339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 155.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1240.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 744.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6101.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1054.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10386.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 988.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8067.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 979.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7843.93,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1769758870285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 246.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1184.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 812.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5379.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1039.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9620.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 902.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7390.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1005.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6973.77,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770104603492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 238.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1168.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1151.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5173.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1490.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6395.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1399.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5945.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1371.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5939.59,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770191114182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 145.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1128.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 754.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5885.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1043.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10306.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 916.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7878.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 943.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7836.89,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770277894684,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 132.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 726.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 796.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6280.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1083.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10843.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1005.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8383.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 933.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8199.69,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770364037449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 251.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1037.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 780.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5020.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1069.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10097.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 860.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6463.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 983.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8871.95,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770449552300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 147.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1089.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 766.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5549.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1023.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9069.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 904.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6415.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 974.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7511.83,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770796622669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 159.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 966.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 751.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6881.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1031.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10900.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 976.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8090.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1013.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8114.03,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1770969115407,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 823.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 823.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5356.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1083.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10062.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1012.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8299.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 981.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7692.02,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1771054531215,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 190.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 965.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 790.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5885.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1071.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9135.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 889.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8199.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1014.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8048.63,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1771314748484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 215.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 854.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 751.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4817.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 968.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9169.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7514.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 926.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6967.75,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1771487486898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 142.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 877.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 831.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5678.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1002.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10231.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 934.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8491.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1004.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7318.37,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1771659217500,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 151.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1083.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 856.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6518.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1032.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10752.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 979.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8653.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 975.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7969.11,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1771919577033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 230.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1184.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 805.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6761.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1048.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10014.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 943.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8197.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 998.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6838.24,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772006030957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 158.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1048.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 814.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7101.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1058.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10477.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 978.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8747.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 959.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7425.12,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772178417919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 151.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 977.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 833.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6626.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1015.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10434.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 970.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7594.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 887.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7793.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772263637628,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 239.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 908.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 832.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4957.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 972.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9930.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 927.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6372.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 965.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 6393.76,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772437836589,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 310.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 946.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1142.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 4454.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1469.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6017.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1385.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 5354.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1642.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5264.2,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772609961930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 145.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1050.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 773.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6378.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1060.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10427.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 999.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7994.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 981.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8017.86,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772696583001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 148.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 910.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 821.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6046.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 971,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9809.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 993.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7802.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 973.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8680.26,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772782776622,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 241.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 900.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 849.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6020.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1097.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10697.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 938.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7931.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 869.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8106.5,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1772868575303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 192.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 909.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 775.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5452.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1066.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9680.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 977.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7853.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 920.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8072.8,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773042728162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 127.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 936.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 825.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5537.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1029.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9424.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 981.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7527.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 957.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8022.77,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773215074470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 145.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 956.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 800.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6249.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1018.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9292.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 845.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7458.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 912.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7723.18,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773301644267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 147.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 651.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 529.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 3098.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 949.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8876.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 906.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6034.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 794.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7084.49,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773473767839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 249.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 996.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 805.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5668.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1048.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 8912.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 985.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7288.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 951.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7913.78,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773734132080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 148.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 964.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 847.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5756.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1015.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9328.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 988.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8457.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1049.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7157.03,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773820405111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 224.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 945.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 764.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5154.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1054.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9780.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 975.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7916.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1046.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7793.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1773906482241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 166.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 865.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 787.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5583.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1079.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10588.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 942.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8629.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 995.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8137.96,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774078479236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 178.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 843.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 749.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5694.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 969.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 9444.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 873.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8689.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 983.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7732.86,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774425252954,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 159.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1026.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 804.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5649.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1053.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10582.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 961.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8305.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 945.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7849.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774598546352,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 158.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 992.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1175.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6481.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1814.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12013.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1698.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8922.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1691.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9310.74,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774683972038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 155.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 892.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1261.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7251.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1673.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12305.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1579.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10711.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1566.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10372.7,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774859048242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 213.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1104.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1637.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5382.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1949.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 6760.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1847.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 6454.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1761.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 5903.15,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1774944618515,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 186.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1072.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1399.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6365.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2021.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 7033.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1811.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 7469.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1783.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 7318.37,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775031470678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 130.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1065.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1300.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7770.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1658.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12652.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1597.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11091.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1677.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10271.09,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775289027305,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 171.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1234.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 828.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7246.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1282.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11676.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1501.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11159.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1447.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10464.83,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775375824621,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 188.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1335.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1507.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7396.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1884.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12321.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1743.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10724.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1901.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10158.65,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775549664318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 98.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1010.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1137.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 5564.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1809.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10484.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1507.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 8774.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1634.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9353.1,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775636110271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 180.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1216.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1345.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7603.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1859.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11566.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1667.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10352.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1658.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9074.65,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775722926730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 164.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 973.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1002.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6215.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1525.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11162.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1390.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10352.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1630.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9272.87,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1775893872284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 174.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1326.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1337.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 8184.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1578.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11473.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1701.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11013.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1706.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9173.89,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1776155287596,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 178.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1109.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1340.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7686.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1708.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12553.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1640.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11062.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1533.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10421.15,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1776761692063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 224.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1246.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1472.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6774.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2081.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11834.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1872.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10056.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1849.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9542.05,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1776846696262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 168.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 957.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1310.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6868.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1663.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12074.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1590.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10964.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1585.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10322.66,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777191460784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 174.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 848.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1229.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7325.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1570.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11376.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1565.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10711.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1668.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9731.56,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777453820391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 10.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1218.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 140.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7314.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 126.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 13954.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 108.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11601.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 133.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10832.4,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777540379660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 153.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 658.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 970.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7569.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1743.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11348.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1509.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9286.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1559.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8465.82,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777626095410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 302.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1240.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1435.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7580.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1939.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11598.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1739.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9505.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1696.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9502.27,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777710184779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 258.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1058.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1290.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7435.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1759.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12739.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1559.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11170.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1560.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9971.24,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1777798094173,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 169.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 943.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1303.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7236.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1728.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12342.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1539.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9516.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1432.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9897.83,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1778146331431,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 148.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 936.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1266.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7806.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1792.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11614.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1383.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9370.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1545.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9218.25,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1778228593378,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 208.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1026.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1512.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6872.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2067.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11467.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1890.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10097.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1831.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9423.71,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1778315311008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 179.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 958.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1381.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6200.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1965.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11238.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1795.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9807.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1839.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9708.14,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1778665539223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 270.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1146.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1339.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7256.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1631.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11890.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1458.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10153.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1496.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10442.94,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1778838499491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 193.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 905.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1482.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6575.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2042.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11773.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1779.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9916.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1822.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9124.4,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1779187130183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 153.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 983.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1265.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6438.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1733.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12153.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1584.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10146.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1516.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9297.54,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1779272784907,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 172.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 972.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1262.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6945.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1732.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11574.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1616.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10036.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1318.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10437.75,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1779527051767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 161.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1030.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1201.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6557.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1732.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11245.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1456.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9854.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1538.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8890,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1779879392093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 168.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1036.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1460.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6451.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2035.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11814.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1831.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9667.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1760.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9367.3,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780051577680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 262.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1120.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1035.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6242.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1683.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11084.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1601.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9704.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1445.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8919.5,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780132560925,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 170.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 878.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1418.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6751.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2040.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11676.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1836.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9716.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1833.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9338.94,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780317363713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 344.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1477.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 223.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7052.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 203.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 13732.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 200.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 10998.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 215.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10031.34,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780487844263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 146.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 908.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1390.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6301.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2011.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 10989.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1849.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9412.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1762.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8689.62,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780569614806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 154.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1213.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1268.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7542.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1934.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11531.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1830.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9416.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1670.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9477.37,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780656423893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 145.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 1069.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1253.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7326.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1723.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 12085.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1378.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9582.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1580.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9808.03,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1780737977667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 153.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 891.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1429.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6492.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2007.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11571.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1799.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9345.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1790.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9307.44,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1781001353943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 141.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 959.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1292.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 8033.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1715.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11961.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1568.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9429.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1555.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9908.12,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1781089017475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 142.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 982.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1356.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6463.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2057.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11859.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1772.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9552.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1933.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 9366.47,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1781262142779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 149.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 981.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1303.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 7046.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 1772.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 13123.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1581.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 11383.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1633.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 10739.21,
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
          "id": "b450a7799374bea68002f416ae55c6c6c86fa0d7",
          "message": "style: change action name",
          "timestamp": "2025-10-27T13:45:25Z",
          "url": "https://github.com/hyoklee/ior/commit/b450a7799374bea68002f416ae55c6c6c86fa0d7"
        },
        "date": 1781344687129,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB) - Write Throughput",
            "value": 144.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB) - Read Throughput",
            "value": 794.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Write Throughput",
            "value": 1413.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB) - Read Throughput",
            "value": 6434.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Write Throughput",
            "value": 2034.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Large File Test (50MB) - Read Throughput",
            "value": 11243.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Write Throughput",
            "value": 1860,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: HDF5 Backend Test (for comparison) - Read Throughput",
            "value": 9037.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Write Throughput",
            "value": 1660.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 5: Multiple Segments Test (5x5MB) - Read Throughput",
            "value": 8806.38,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1766470799864,
  "repoUrl": "https://github.com/hyoklee/ior",
  "entries": {
    "IOR HDF5 Parallel Performance": [
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
        "date": 1761572329387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 345.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1881.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1255.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10747.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 709.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7230.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 982.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12898.61,
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
        "date": 1761572906414,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 481.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2087.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1568.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 3187.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 908.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5449.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1309.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9019.04,
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
        "date": 1761632407676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 247.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2200.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 889.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10793.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 744.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6803.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 908.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12574.74,
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
        "date": 1761805084254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 366.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1705,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1711.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7688.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 942.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5780.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1332.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 8686.11,
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
        "date": 1761891567114,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 265.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2064.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1339.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10029.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 704.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6648.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 927.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12841.34,
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
        "date": 1761977838303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 261.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1710.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1329.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8565.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 673.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5959.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 887.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10266.95,
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
        "date": 1762150864552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 350.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2197.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1698.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9196.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 941.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6596.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1289.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9669.31,
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
        "date": 1762237125389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 266.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1650.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1210.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7846.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 645.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5205.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 891.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9376.41,
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
        "date": 1762323515964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 423.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1904.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1274.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9086.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 623.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5659.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 920.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10479.21,
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
        "date": 1762409980470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 271.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2105.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1226.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10521.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 671.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6689.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 920.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11987.15,
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
        "date": 1762496759753,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 284.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2157.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1200.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9722.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 566.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6671.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 888.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10749.8,
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
        "date": 1762582612500,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 270.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1669.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1343.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10095.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 679.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6527.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 906.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10118.34,
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
        "date": 1762669001373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 288.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2061.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1257.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9653.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 678.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7168.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 860.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12150.36,
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
        "date": 1762755581776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 325.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2024.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1134.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10140.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 697.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6692.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 963.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12962.39,
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
        "date": 1762841925145,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 306.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2019.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1325.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10070.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 628.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6643.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 921,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10576.32,
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
        "date": 1762928441138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 413.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2083.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1800.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7824.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 932.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6253.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1320.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9263.55,
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
        "date": 1763187369601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 290.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2030.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1128.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10537.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 696.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6891.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 915.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12000.87,
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
        "date": 1763446715550,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 380.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2195.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1968.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9718.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 978.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6774.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1305.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9148.88,
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
        "date": 1763705917627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 142.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1895.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1193.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10346.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 669.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6930.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 921.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12710.01,
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
        "date": 1763792189577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 326.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2074.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1310.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9718.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 684.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6476.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 863.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12092.56,
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
        "date": 1764137938603,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 326.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2557.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1281.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10374.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 724.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7467.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 966.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13179.27,
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
        "date": 1764656379991,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 362.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1960.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1801.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9153.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 919.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6277.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1265.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9553.68,
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
        "date": 1764742747176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 295.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1479.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1482.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10292.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 663.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6716.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 931.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13417.48,
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
        "date": 1764829143886,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 405.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1818.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1257.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9611.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 652.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6046.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 954.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10840.1,
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
        "date": 1764915552606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 248.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2224.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1336.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10304.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 682.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6273.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 964.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11925.8,
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
        "date": 1765001822590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 294.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2049,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1350.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10504.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 666.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6161.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 928.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10048.04,
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
        "date": 1765088216706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 271.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1844.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1248.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10084.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 667.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6557.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 935.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10562.34,
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
        "date": 1765261157000,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 251.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1823.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1369.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9698.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 659.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6844.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 944.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12303.62,
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
        "date": 1765347588266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 426.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1949.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1259.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9421.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 627.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6344.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 919.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11761.1,
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
        "date": 1765606668164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 285.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1366.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1272.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9433.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 658.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6532.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 962.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12217.61,
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
        "date": 1765866029194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 426.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1591.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1263.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8579.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 660.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5636.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 926.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11034.01,
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
        "date": 1766038760484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 355.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1947.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1335.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10046.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 661.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6570.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 904.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12800.2,
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
        "date": 1766125154065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 350.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1984.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1303.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9519.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 624.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5881.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 926.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11695.51,
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
        "date": 1766211477259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 316.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2045,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1324.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10587.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 662.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6450.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 927.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12515.64,
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
        "date": 1766470798565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 266.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2157.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1319.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9891.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 667.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6393.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 903.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11487.31,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
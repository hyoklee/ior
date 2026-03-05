window.BENCHMARK_DATA = {
  "lastUpdate": 1772692718013,
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
        "date": 1766643570688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 266.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1877.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1271.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10147.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 607.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6939.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 878.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12718.68,
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
        "date": 1767075588948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 252.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1843.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1111.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9550.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 720.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6249.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 960.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10160,
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
        "date": 1767161973789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 303.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2193.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1247.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10509.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 673.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6742.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 951.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12645.82,
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
        "date": 1767248443541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 467.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2181.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1372.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10810.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 680.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6761.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 962.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11019.52,
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
        "date": 1767421092043,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 452.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1840.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1326.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11819.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 717.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7241.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 979.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11816.61,
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
        "date": 1767766816673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 302.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1809.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1307.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10320.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 575.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5189.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 897.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11303.12,
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
        "date": 1768026160724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 298.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2159.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1193.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10892.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 681.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6751.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 917.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12411.02,
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
        "date": 1768285216615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 294.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1565.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1253.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9818.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 672.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6806.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 948.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13338.54,
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
        "date": 1768371633185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 261.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1885.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1355.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9573.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 644.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5806.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 932.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10422.57,
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
        "date": 1769062880130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 296.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1959.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1262.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10416.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 668.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6410.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 942.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12605.92,
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
        "date": 1769149264180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 450.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2134.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1359.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9679.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 706.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6978.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 932.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13421.77,
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
        "date": 1769235522618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 379.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1865.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1390.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10021.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 693.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6997.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 932.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12333.47,
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
        "date": 1769321968332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 242.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2091.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1065.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8841.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 649.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6397.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 938.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11487.31,
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
        "date": 1769494877249,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 251.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2244.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1370.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10356.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 670.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6737.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 954.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12113.51,
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
        "date": 1769581334092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 223.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2028.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1359.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9510.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 682.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6405.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 934.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11264.41,
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
        "date": 1769754961562,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 271.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1635.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1370.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10362.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 662.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5720.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 895.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10243.13,
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
        "date": 1770100693810,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 393.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1989.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1521.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 3158.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 927.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5668.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1435.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 8932.6,
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
        "date": 1770187108253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 259.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1771.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1084.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9049.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 663.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6389.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 865.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12154.76,
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
        "date": 1770273891521,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 305.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1619.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1141.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8431.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 643.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 4723.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 938.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9893.39,
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
        "date": 1770360057308,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 243.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1709.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1265.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9424.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 681.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6199.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 930.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9250.78,
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
        "date": 1770445799107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 497.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2109.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1843.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8719.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 952.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5920.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1374.75,
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
        "date": 1770792650363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 275.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1716.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1376.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10769.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 671.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6447.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 925.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13012.65,
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
        "date": 1770965197983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 409.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1636.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1890.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9144.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1009.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6365.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1391.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9799.2,
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
        "date": 1771050789410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 471.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1814.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1211.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7712.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 581.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 4856.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 861.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9744,
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
        "date": 1771310741093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 264.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1593.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1376.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8351.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 669.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5503.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 965.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10103.71,
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
        "date": 1771483645191,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 278.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1644.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1046.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9065.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 500.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6427.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 854.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11859.2,
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
        "date": 1771655416212,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 274.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1966.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1307.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10735.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 656.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6184.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 935.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11737.24,
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
        "date": 1771916170402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 317.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1564.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1362.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10347.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 687.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6531.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 942.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12210.49,
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
        "date": 1772002250703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 451.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1773.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1356.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9619.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 640.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5998.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 917.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10619.16,
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
        "date": 1772174405870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 472.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1729.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1311.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9909.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 699.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6535.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 928.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11617.77,
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
        "date": 1772259887493,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 274.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1425.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1222.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9090.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 625.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6369.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 907.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12441.39,
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
        "date": 1772433856481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 264.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1638.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1233.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9905.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 690.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6349.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 931.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11537.08,
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
        "date": 1772606107541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 466.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1651.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1250.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8022,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 567.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5282.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 948.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11363.6,
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
        "date": 1772692717273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 463.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1574.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1345.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9217.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 666.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5704.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 890.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10501.51,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
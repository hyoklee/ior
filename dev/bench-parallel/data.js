window.BENCHMARK_DATA = {
  "lastUpdate": 1785226350684,
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
        "date": 1772778927838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 416.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1631.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1293.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10356.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 667.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6574.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 919.35,
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
        "date": 1772864787084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 284.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1872.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1321.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10215.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 720.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6262.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 947.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13254.24,
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
        "date": 1773038904023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 310.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1578.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1510.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9053.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 635.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5534.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 946.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10988.48,
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
        "date": 1773211170732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 382.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1962.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1945.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10000.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 986.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6734.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1426.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10256.28,
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
        "date": 1773297696530,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 271.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1697.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1342.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9446.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 675.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6662.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 921.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11484.95,
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
        "date": 1773470058070,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 334.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1793.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1301.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7692.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 617.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5720.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 943.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10729.18,
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
        "date": 1773730263190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 462.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1904.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1243.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8152.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 676.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6097.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 930.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11071.15,
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
        "date": 1773816583220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 449.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1684.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1209.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9196.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 615.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5871.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 918.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11286.39,
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
        "date": 1773902702073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 534.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1620.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1848.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8657.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 946.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6296.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1324.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 8960.75,
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
        "date": 1774074673665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 281.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1232.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1289.15,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9648.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 618.46,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6345.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 947.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11376.7,
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
        "date": 1774421407937,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 521.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2087.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1948.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9628.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 846.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6698.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1385.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10269.46,
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
        "date": 1774594628724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 286.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1953.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1239.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9689.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 600.28,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6565.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 935.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 11803.3,
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
        "date": 1774680362098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 302.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1785.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1473.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9765.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 827.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5570.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1654.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12666.83,
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
        "date": 1774854944847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 274.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2296.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2124.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11216.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1120.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7215.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1679.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13275.21,
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
        "date": 1774940563319,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 351.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1754.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2269.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11912.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1027.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7057.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1831.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14809.09,
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
        "date": 1775027355814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 366.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1962.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1722.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10989.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1107.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6783.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1680.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12334.37,
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
        "date": 1775285249168,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 324.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1930.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2218.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11337.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1089.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6835.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1710.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13661.12,
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
        "date": 1775372125514,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 330.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1976.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1847.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11785.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1069.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7178.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1260.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13637.8,
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
        "date": 1775545460121,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 336.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2059.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1885.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10753.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1033.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7152.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1598.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13408.9,
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
        "date": 1775632017023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 297.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1603.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1632.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9115.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 939.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5820.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1522.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12330.75,
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
        "date": 1775719523014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 352.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1476.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2097.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10846.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1210.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7189.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1795.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14705.25,
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
        "date": 1775890090731,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 330.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1651.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1847.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11357.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1058.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6930.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1547.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13046.05,
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
        "date": 1776151670795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 320.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1947.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2087.65,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11737.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1065.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7027.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1662.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14424.57,
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
        "date": 1776756093872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 320,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1904.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1826.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11018.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1110.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6253.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1508.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12041.35,
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
        "date": 1776842875960,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 510.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1876.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1919.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11654.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1109.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7456.54,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1656.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13535.47,
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
        "date": 1777187819506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 576.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2032.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2199.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12529.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1159.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7674.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1786.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14964.96,
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
        "date": 1777277007044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 342.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1742.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2371.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11897.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1163.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7027.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1733.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13921.85,
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
        "date": 1777449455314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 334.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1848.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2059.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12625.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1201.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7435.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1809.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14398.57,
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
        "date": 1777535999856,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 304.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1917.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1822.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10593.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1029.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6480.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1512.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12706.16,
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
        "date": 1777622384301,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 343.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1844.87,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1864.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10106.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1066.44,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7117.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1553.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13003.58,
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
        "date": 1777706380254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 299.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1399.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1876.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9666.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1075.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6442.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1554.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13846.01,
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
        "date": 1777794373093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 312.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1855.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1856.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10351.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1024.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6009.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1393.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12787.51,
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
        "date": 1778141566680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 341.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1780.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1408.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9569.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1068.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5736.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1411.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12594.56,
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
        "date": 1778224534526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 502.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1953.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1841.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10152.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1083.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7209.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1556.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12562.5,
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
        "date": 1778311997488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 586.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1682.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2266.27,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11819.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1152.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7067.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1761.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13586.99,
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
        "date": 1778661103481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 437.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1990.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1845.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10455.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1080.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6439.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1593.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12135.42,
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
        "date": 1778834249957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 547.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1980.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1859.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9496.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1018.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6497.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1186.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12722.54,
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
        "date": 1779181003792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 332.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1789,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1456.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9573.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1121.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6906.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1670.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12638.2,
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
        "date": 1779267141276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 239.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 713.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1997.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 7946.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 751.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 4046.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1726.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 9398.47,
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
        "date": 1779523487108,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 385.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1928.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2284.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10241.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1275.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6523.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1844.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10288.35,
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
        "date": 1779872310274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 327.71,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1766.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2282.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12603.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1178.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7423.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1756.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 15285.36,
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
        "date": 1780045384265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 259.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1702.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2254.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11649.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1100.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6215.63,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1771.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12630.59,
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
        "date": 1780128933953,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 271.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2066.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1594.64,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10235,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1064.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6868.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1485.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12504.45,
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
        "date": 1780311951114,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 273.34,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1764.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2267.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12217.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1163.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7284.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1850.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14592.69,
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
        "date": 1780394355452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 258.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1834.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1901.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10261.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 956.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6857.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1554.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12911.51,
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
        "date": 1780482617888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 295.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1452.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2234.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12011.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1230.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7430.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1789.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 15285.36,
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
        "date": 1780566088675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 263.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1719.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1889.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11068.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1022.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7473.81,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1498.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12307.23,
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
        "date": 1780650154955,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 280.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1949.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2293.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11990.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1130.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7501.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1832.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14040.69,
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
        "date": 1780734196756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 279.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1708.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1926.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11898.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1090.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6983.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1551.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13595.8,
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
        "date": 1780995431105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 343.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1826.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2244.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12414.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1189.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7199.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1673.15,
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
        "date": 1781084288574,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 306.6,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1745.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2258.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11724.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1209.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7435.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1859.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14414.65,
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
        "date": 1781258032578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 281.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1691.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2297.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12953.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1084.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7111.4,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1756.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13918.38,
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
        "date": 1781340348763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 304.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1706.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2364.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12292.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1131.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6840.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1823.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14919.71,
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
        "date": 1781427687899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 524.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2096.1,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1892.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10075.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1018.33,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7262.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1474.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14074.85,
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
        "date": 1781607083643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 280.51,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1937.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2029.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9170.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1137.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6056.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1757.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12991.49,
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
        "date": 1781691825810,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 295.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1737.85,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2248.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11416.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1154.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7087.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1701.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12457.1,
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
        "date": 1781777026382,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 304.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2040.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2181.24,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11655.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1141.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6579.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1629,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13503.88,
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
        "date": 1781944796526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 281.18,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1784.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2123.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12040.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1160.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6821.12,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1811.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13841.45,
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
        "date": 1782204935463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 328.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1803.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2415.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12477.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1142.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7831.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1889.37,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 15249.24,
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
        "date": 1782291113851,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 374.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1848.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1595.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10775.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1054.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7368.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1580.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13652.22,
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
        "date": 1782463670822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 447.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2083.09,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2184.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11216.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1195.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7445.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1718.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14059.51,
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
        "date": 1782548712601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 303.96,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1356.06,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2139.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11711.03,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1144.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6892.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1768.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12924.44,
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
        "date": 1782809614435,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 276.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1734.62,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1845.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9799.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1084.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6468.7,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1596.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12029.27,
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
        "date": 1782898015441,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 447.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1822.82,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 339.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11159.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1159.13,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7570.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1816.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 15396.18,
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
        "date": 1782981637561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 219.3,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1543.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1885.21,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10695.66,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 943.83,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6341.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1457.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12654.41,
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
        "date": 1783068365317,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 345.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2003.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1704.45,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9062.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 977.42,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5733.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1457.67,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12845.28,
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
        "date": 1783240733293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 631.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2094.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1786.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9901.57,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 855.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6983.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1476.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12987.47,
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
        "date": 1783415030431,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 290.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1712.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1794.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9822.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 978.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 5096.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1350.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 7510.28,
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
        "date": 1783588058250,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 459.35,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1752.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1199.74,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11216.22,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1017.39,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6831.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1581.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12877.81,
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
        "date": 1783673855210,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 288.89,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1748.36,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2232.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12063,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1154.47,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7067.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1812.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14149.63,
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
        "date": 1784015083829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 72.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2125.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 215.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 8881.53,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 177.05,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6123.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 189.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10109.19,
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
        "date": 1784101708864,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 315.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1756.04,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2005.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10488.38,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1047.55,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6561.8,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1505.97,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12172.4,
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
        "date": 1784188435151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 619.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2143.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1951.2,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10287.72,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1094.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6806.73,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1531.68,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13118.47,
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
        "date": 1784274677028,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 250.95,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1428.58,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1912.76,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10459.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 996.11,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6751.94,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1560.25,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12694.62,
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
        "date": 1784359532870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 275.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1486.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2244.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11883.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1100.84,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7184.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1838.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14109.17,
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
        "date": 1784536505897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 295.99,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1891.88,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2283.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11580.08,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1151.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6480.69,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1830.31,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14737.54,
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
        "date": 1784621132734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 256.14,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 2034.59,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2052.16,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 10649.5,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1139.23,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6565.91,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1580.77,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 12523.11,
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
        "date": 1784707561287,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 245.07,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1836.79,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1938.17,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9799.78,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1057.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6959.19,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1563.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13021.74,
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
        "date": 1784880318097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 291.29,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1709.52,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2207.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 12115.26,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1175.93,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7468.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1795.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 14786.9,
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
        "date": 1784965756086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 372.43,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1928.86,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 2208.98,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 9638.75,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1214.9,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 7017.41,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1752.92,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 10367.83,
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
        "date": 1785226349054,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Write Throughput",
            "value": 260.02,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 1: Small File Test (1MB per process, 2 processes) - Read Throughput",
            "value": 1939.56,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Write Throughput",
            "value": 1824.32,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 2: Medium File Test (10MB per process, 2 processes) - Read Throughput",
            "value": 11337.49,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Write Throughput",
            "value": 1037.01,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 3: Collective I/O Test - Read Throughput",
            "value": 6906.48,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Write Throughput",
            "value": 1456.61,
            "unit": "MiB/sec"
          },
          {
            "name": "Test 4: Larger Collective Test - Read Throughput",
            "value": 13656.67,
            "unit": "MiB/sec"
          }
        ]
      }
    ]
  }
}
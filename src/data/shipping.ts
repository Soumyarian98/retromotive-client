const shippingCharges = {
  handling_time: {
    value: 10,
    unit: "day",
  },
  profiles: [
    {
      variant_ids: [
        11814, 11813, 11812, 11815, 11816, 11817, 12120, 12119, 12118, 12121,
        12122, 12123, 24037, 24169, 12126, 12125, 12124, 12127, 12128, 12129,
        24039, 24171, 12132, 12131, 12130, 12133, 12134, 12135, 24041, 24173,
        12138, 12137, 12136, 12139, 12140, 12141, 12144, 12143, 12142, 12145,
        12146, 12147, 24045, 24178, 12150, 12149, 12148, 12151, 12152, 12153,
        24046, 24180, 12156, 12155, 12154, 12157, 12158, 12159, 24048, 24182,
        12162, 12161, 12160, 12163, 12164, 12165, 24050, 24184, 12174, 12173,
        12172, 12175, 12176, 12177, 24055, 24188, 11964, 11963, 11962, 11965,
        11966, 11967, 23985, 24118, 12180, 12179, 12178, 12181, 12182, 12183,
        24056, 24190, 12192, 12191, 12190, 12193, 12194, 12195, 24060, 24194,
        12216, 12215, 12214, 12217, 12218, 12219, 12090, 12089, 12088, 12091,
        12092, 12093, 24026, 24160, 11838, 11837, 11836, 11839, 11840, 11841,
        11844, 11843, 11842, 11845, 11846, 11847, 42716, 42717, 42718, 42719,
        42720, 42721, 42722, 42723, 11868, 11867, 11866, 11869, 11870, 11871,
        23953, 24086, 11880, 11879, 11878, 11881, 11882, 11883, 23957, 24090,
        11886, 11885, 11884, 11887, 11888, 11889, 11892, 11891, 11890, 11893,
        11894, 11895, 23961, 24095, 11898, 11897, 11896, 11899, 11900, 11901,
        23963, 24097, 11904, 11903, 11902, 11905, 11906, 11907, 23965, 24099,
        11946, 11945, 11944, 11947, 11948, 11949, 23979, 24112, 11952, 11951,
        11950, 11953, 11954, 11955, 23981, 11958, 11957, 11956, 11959, 11960,
        11961, 23983, 24116, 11976, 11975, 11974, 11977, 11978, 11979, 23989,
        24122, 11982, 11981, 11980, 11983, 11984, 11985, 23991, 24124, 11988,
        11987, 11986, 11989, 11990, 11991, 23993, 24126, 12012, 12011, 12010,
        12013, 12014, 12015, 24001, 24134, 12018, 12017, 12016, 12019, 12020,
        12021, 24003, 24136, 12024, 12023, 12022, 12025, 12026, 12027, 24005,
        24138, 12030, 12029, 12028, 12031, 12032, 12033, 24007, 24140, 12054,
        12053, 12052, 12055, 12056, 12057, 24015, 24147, 12060, 12059, 12058,
        12061, 12062, 12063, 24017, 24150, 12102, 12101, 12100, 12103, 12104,
        12105, 24031, 24164, 12072, 12071, 12070, 12073, 12074, 12075, 24021,
        24153,
      ],
      first_item: {
        cost: 475,
        currency: "USD",
      },
      additional_items: {
        cost: 240,
        currency: "USD",
      },
      countries: ["US"],
    },
    {
      variant_ids: [
        11814, 11813, 11812, 11815, 11816, 11817, 12120, 12119, 12118, 12121,
        12122, 12123, 24037, 24169, 12126, 12125, 12124, 12127, 12128, 12129,
        24039, 24171, 12132, 12131, 12130, 12133, 12134, 12135, 24041, 24173,
        12138, 12137, 12136, 12139, 12140, 12141, 12144, 12143, 12142, 12145,
        12146, 12147, 24045, 24178, 12150, 12149, 12148, 12151, 12152, 12153,
        24046, 24180, 12156, 12155, 12154, 12157, 12158, 12159, 24048, 24182,
        12162, 12161, 12160, 12163, 12164, 12165, 24050, 24184, 12174, 12173,
        12172, 12175, 12176, 12177, 24055, 24188, 11964, 11963, 11962, 11965,
        11966, 11967, 23985, 24118, 12180, 12179, 12178, 12181, 12182, 12183,
        24056, 24190, 12192, 12191, 12190, 12193, 12194, 12195, 24060, 24194,
        12216, 12215, 12214, 12217, 12218, 12219, 12090, 12089, 12088, 12091,
        12092, 12093, 24026, 24160, 11838, 11837, 11836, 11839, 11840, 11841,
        11844, 11843, 11842, 11845, 11846, 11847, 42716, 42717, 42718, 42719,
        42720, 42721, 42722, 42723, 11868, 11867, 11866, 11869, 11870, 11871,
        23953, 24086, 11880, 11879, 11878, 11881, 11882, 11883, 23957, 24090,
        11886, 11885, 11884, 11887, 11888, 11889, 11892, 11891, 11890, 11893,
        11894, 11895, 23961, 24095, 11898, 11897, 11896, 11899, 11900, 11901,
        23963, 24097, 11904, 11903, 11902, 11905, 11906, 11907, 23965, 24099,
        11946, 11945, 11944, 11947, 11948, 11949, 23979, 24112, 11952, 11951,
        11950, 11953, 11954, 11955, 23981, 11958, 11957, 11956, 11959, 11960,
        11961, 23983, 24116, 11976, 11975, 11974, 11977, 11978, 11979, 23989,
        24122, 11982, 11981, 11980, 11983, 11984, 11985, 23991, 24124, 11988,
        11987, 11986, 11989, 11990, 11991, 23993, 24126, 12012, 12011, 12010,
        12013, 12014, 12015, 24001, 24134, 12018, 12017, 12016, 12019, 12020,
        12021, 24003, 24136, 12024, 12023, 12022, 12025, 12026, 12027, 24005,
        24138, 12030, 12029, 12028, 12031, 12032, 12033, 24007, 24140, 12054,
        12053, 12052, 12055, 12056, 12057, 24015, 24147, 12060, 12059, 12058,
        12061, 12062, 12063, 24017, 24150, 12102, 12101, 12100, 12103, 12104,
        12105, 24031, 24164, 12072, 12071, 12070, 12073, 12074, 12075, 24021,
        24153,
      ],
      first_item: {
        cost: 939,
        currency: "USD",
      },
      additional_items: {
        cost: 439,
        currency: "USD",
      },
      countries: ["CA"],
    },
    {
      variant_ids: [
        11814, 11813, 11812, 11815, 11816, 11817, 12120, 12119, 12118, 12121,
        12122, 12123, 24037, 24169, 12126, 12125, 12124, 12127, 12128, 12129,
        24039, 24171, 12132, 12131, 12130, 12133, 12134, 12135, 24041, 24173,
        12138, 12137, 12136, 12139, 12140, 12141, 12144, 12143, 12142, 12145,
        12146, 12147, 24045, 24178, 12150, 12149, 12148, 12151, 12152, 12153,
        24046, 24180, 12156, 12155, 12154, 12157, 12158, 12159, 24048, 24182,
        12162, 12161, 12160, 12163, 12164, 12165, 24050, 24184, 12174, 12173,
        12172, 12175, 12176, 12177, 24055, 24188, 11964, 11963, 11962, 11965,
        11966, 11967, 23985, 24118, 12180, 12179, 12178, 12181, 12182, 12183,
        24056, 24190, 12192, 12191, 12190, 12193, 12194, 12195, 24060, 24194,
        12216, 12215, 12214, 12217, 12218, 12219, 12090, 12089, 12088, 12091,
        12092, 12093, 24026, 24160, 11838, 11837, 11836, 11839, 11840, 11841,
        11844, 11843, 11842, 11845, 11846, 11847, 42716, 42717, 42718, 42719,
        42720, 42721, 42722, 42723, 11868, 11867, 11866, 11869, 11870, 11871,
        23953, 24086, 11880, 11879, 11878, 11881, 11882, 11883, 23957, 24090,
        11886, 11885, 11884, 11887, 11888, 11889, 11892, 11891, 11890, 11893,
        11894, 11895, 23961, 24095, 11898, 11897, 11896, 11899, 11900, 11901,
        23963, 24097, 11904, 11903, 11902, 11905, 11906, 11907, 23965, 24099,
        11946, 11945, 11944, 11947, 11948, 11949, 23979, 24112, 11952, 11951,
        11950, 11953, 11954, 11955, 23981, 11958, 11957, 11956, 11959, 11960,
        11961, 23983, 24116, 11976, 11975, 11974, 11977, 11978, 11979, 23989,
        24122, 11982, 11981, 11980, 11983, 11984, 11985, 23991, 24124, 11988,
        11987, 11986, 11989, 11990, 11991, 23993, 24126, 12012, 12011, 12010,
        12013, 12014, 12015, 24001, 24134, 12018, 12017, 12016, 12019, 12020,
        12021, 24003, 24136, 12024, 12023, 12022, 12025, 12026, 12027, 24005,
        24138, 12030, 12029, 12028, 12031, 12032, 12033, 24007, 24140, 12054,
        12053, 12052, 12055, 12056, 12057, 24015, 24147, 12060, 12059, 12058,
        12061, 12062, 12063, 24017, 24150, 12102, 12101, 12100, 12103, 12104,
        12105, 24031, 24164, 12072, 12071, 12070, 12073, 12074, 12075, 24021,
        24153,
      ],
      first_item: {
        cost: 1000,
        currency: "USD",
      },
      additional_items: {
        cost: 400,
        currency: "USD",
      },
      countries: ["REST_OF_THE_WORLD"],
    },
    {
      variant_ids: [
        11814, 11813, 11812, 11815, 11816, 11817, 12120, 12119, 12118, 12121,
        12122, 12123, 24037, 24169, 12126, 12125, 12124, 12127, 12128, 12129,
        24039, 24171, 12132, 12131, 12130, 12133, 12134, 12135, 24041, 24173,
        12138, 12137, 12136, 12139, 12140, 12141, 12144, 12143, 12142, 12145,
        12146, 12147, 24045, 24178, 12150, 12149, 12148, 12151, 12152, 12153,
        24046, 24180, 12156, 12155, 12154, 12157, 12158, 12159, 24048, 24182,
        12162, 12161, 12160, 12163, 12164, 12165, 24050, 24184, 12174, 12173,
        12172, 12175, 12176, 12177, 24055, 24188, 11964, 11963, 11962, 11965,
        11966, 11967, 23985, 24118, 12180, 12179, 12178, 12181, 12182, 12183,
        24056, 24190, 12192, 12191, 12190, 12193, 12194, 12195, 24060, 24194,
        12216, 12215, 12214, 12217, 12218, 12219, 12090, 12089, 12088, 12091,
        12092, 12093, 24026, 24160, 11838, 11837, 11836, 11839, 11840, 11841,
        11844, 11843, 11842, 11845, 11846, 11847, 42716, 42717, 42718, 42719,
        42720, 42721, 42722, 42723, 11868, 11867, 11866, 11869, 11870, 11871,
        23953, 24086, 11880, 11879, 11878, 11881, 11882, 11883, 23957, 24090,
        11886, 11885, 11884, 11887, 11888, 11889, 11892, 11891, 11890, 11893,
        11894, 11895, 23961, 24095, 11898, 11897, 11896, 11899, 11900, 11901,
        23963, 24097, 11904, 11903, 11902, 11905, 11906, 11907, 23965, 24099,
        11946, 11945, 11944, 11947, 11948, 11949, 23979, 24112, 11952, 11951,
        11950, 11953, 11954, 11955, 23981, 11958, 11957, 11956, 11959, 11960,
        11961, 23983, 24116, 11976, 11975, 11974, 11977, 11978, 11979, 23989,
        24122, 11982, 11981, 11980, 11983, 11984, 11985, 23991, 24124, 11988,
        11987, 11986, 11989, 11990, 11991, 23993, 24126, 12012, 12011, 12010,
        12013, 12014, 12015, 24001, 24134, 12018, 12017, 12016, 12019, 12020,
        12021, 24003, 24136, 12024, 12023, 12022, 12025, 12026, 12027, 24005,
        24138, 12030, 12029, 12028, 12031, 12032, 12033, 24007, 24140, 12054,
        12053, 12052, 12055, 12056, 12057, 24015, 24147, 12060, 12059, 12058,
        12061, 12062, 12063, 24017, 24150, 12102, 12101, 12100, 12103, 12104,
        12105, 24031, 24164, 12072, 12071, 12070, 12073, 12074, 12075, 24021,
        24153,
      ],
      first_item: {
        cost: 1249,
        currency: "USD",
      },
      additional_items: {
        cost: 499,
        currency: "USD",
      },
      countries: ["AU"],
    },
  ],
};
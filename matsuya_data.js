const menuData = [
  // 松屋（matsuya20240213.pdf）

  // 牛めし
  { chain: '松屋', name: '牛めし小盛', protein: 13.5, fat: 22.8, carbs: 63.8, calories: 527 },
  { chain: '松屋', name: '牛めし並盛', protein: 17.7, fat: 29.0, carbs: 91.5, calories: 715 },
  { chain: '松屋', name: '牛めし大盛', protein: 22.8, fat: 36.0, carbs: 130.3, calories: 961 },
  { chain: '松屋', name: '牛めし特盛', protein: 32.6, fat: 56.5, carbs: 164.6, calories: 1327 },
  { chain: '松屋', name: '牛めしあたま大盛', protein: 20.3, fat: 35.7, carbs: 93.2, calories: 793 },

  // ネギたっぷり旨辛ネギたま牛めし
  { chain: '松屋', name: 'ネギたっぷり旨辛ネギたま牛めし小盛', protein: 20.5, fat: 29.0, carbs: 69.3, calories: 634 },
  { chain: '松屋', name: 'ネギたっぷり旨辛ネギたま牛めし並盛', protein: 25.2, fat: 36.3, carbs: 100.0, calories: 846 },
  { chain: '松屋', name: 'ネギたっぷり旨辛ネギたま牛めし大盛', protein: 30.4, fat: 43.3, carbs: 138.8, calories: 1092 },
  { chain: '松屋', name: 'ネギたっぷり旨辛ネギたま牛めし特盛', protein: 40.1, fat: 63.8, carbs: 173.1, calories: 1458 },
  { chain: '松屋', name: 'ネギたっぷり旨辛ネギたま牛めしあたま大盛', protein: 27.9, fat: 43.0, carbs: 101.7, calories: 924 },

  // 鬼おろしポン酢牛めし
  { chain: '松屋', name: '鬼おろしポン酢牛めし小盛', protein: 14.8, fat: 23.0, carbs: 68.6, calories: 551 },
  { chain: '松屋', name: '鬼おろしポン酢牛めし並盛', protein: 18.9, fat: 29.1, carbs: 96.3, calories: 739 },
  { chain: '松屋', name: '鬼おろしポン酢牛めし大盛', protein: 24.1, fat: 36.2, carbs: 135.1, calories: 985 },
  { chain: '松屋', name: '鬼おろしポン酢牛めし特盛', protein: 33.9, fat: 56.7, carbs: 169.4, calories: 1351 },
  { chain: '松屋', name: '鬼おろしポン酢牛めしあたま大盛', protein: 21.6, fat: 35.9, carbs: 98.0, calories: 817 },

  // キムチ牛めし
  { chain: '松屋', name: 'キムチ牛めし小盛', protein: 15.2, fat: 23.7, carbs: 72.7, calories: 576 },
  { chain: '松屋', name: 'キムチ牛めし並盛', protein: 19.4, fat: 29.8, carbs: 100.5, calories: 764 },
  { chain: '松屋', name: 'キムチ牛めし大盛', protein: 24.6, fat: 36.8, carbs: 139.2, calories: 1010 },
  { chain: '松屋', name: 'キムチ牛めし特盛', protein: 34.3, fat: 57.3, carbs: 173.5, calories: 1376 },
  { chain: '松屋', name: 'キムチ牛めしあたま大盛', protein: 22.1, fat: 36.5, carbs: 102.1, calories: 842 },

  // チーズ牛めし
  { chain: '松屋', name: 'チーズ牛めし小盛', protein: 27.5, fat: 39.9, carbs: 65.5, calories: 744 },
  { chain: '松屋', name: 'チーズ牛めし並盛', protein: 31.6, fat: 46.1, carbs: 93.3, calories: 932 },
  { chain: '松屋', name: 'チーズ牛めし大盛', protein: 36.8, fat: 53.1, carbs: 132.0, calories: 1178 },
  { chain: '松屋', name: 'チーズ牛めし特盛', protein: 46.5, fat: 73.6, carbs: 166.3, calories: 1544 },
  { chain: '松屋', name: 'チーズ牛めしあたま大盛', protein: 34.3, fat: 52.8, carbs: 94.9, calories: 1010 },

  // 松屋ビーフカレー
  { chain: '松屋', name: '松屋ビーフカレー並盛', protein: 17.0, fat: 27.8, carbs: 109.3, calories: 783 },
  { chain: '松屋', name: '松屋ビーフカレー大盛', protein: 19.5, fat: 28.1, carbs: 146.4, calories: 951 },

  // チーズかけビーフカレー
  { chain: '松屋', name: 'チーズかけビーフカレー並盛', protein: 30.9, fat: 44.9, carbs: 111.0, calories: 999 },
  { chain: '松屋', name: 'チーズかけビーフカレー大盛', protein: 33.4, fat: 45.2, carbs: 148.1, calories: 1167 },

  // ビーフカレギュウ
  { chain: '松屋', name: 'ビーフカレギュウ並盛', protein: 26.4, fat: 54.7, carbs: 112.7, calories: 1076 },
  { chain: '松屋', name: 'ビーフカレギュウ大盛', protein: 28.9, fat: 55.0, carbs: 149.8, calories: 1244 },

  // チーズかけビーフカレギュウ
  { chain: '松屋', name: 'チーズかけビーフカレギュウ並盛', protein: 40.3, fat: 71.8, carbs: 114.4, calories: 1293 },
  { chain: '松屋', name: 'チーズかけビーフカレギュウ大盛', protein: 42.8, fat: 72.1, carbs: 151.5, calories: 1461 },

  // ハンバーグビーフカレー
  { chain: '松屋', name: 'ハンバーグビーフカレー並盛', protein: 32.8, fat: 45.0, carbs: 122.3, calories: 1053 },
  { chain: '松屋', name: 'ハンバーグビーフカレー大盛', protein: 35.3, fat: 45.3, carbs: 159.4, calories: 1221 },

  // キムカル丼
  { chain: '松屋', name: 'キムカル丼小盛', protein: 21.5, fat: 27.9, carbs: 74.6, calories: 647 },
  { chain: '松屋', name: 'キムカル丼並盛', protein: 23.5, fat: 28.1, carbs: 104.3, calories: 781 },
  { chain: '松屋', name: 'キムカル丼大盛', protein: 34.0, fat: 41.6, carbs: 147.3, calories: 1123 },
  { chain: '松屋', name: 'キムカル丼特盛', protein: 43.6, fat: 54.7, carbs: 184.2, calories: 1434 },

  // 牛焼ビビン丼
  { chain: '松屋', name: '牛焼ビビン丼小盛', protein: 21.3, fat: 23.3, carbs: 70.7, calories: 591 },
  { chain: '松屋', name: '牛焼ビビン丼並盛', protein: 27.4, fat: 31.6, carbs: 99.8, calories: 811 },
  { chain: '松屋', name: '牛焼ビビン丼大盛', protein: 34.5, fat: 39.1, carbs: 141.3, calories: 1080 },

  // 富士山豆腐の本格麻婆めし
  { chain: '松屋', name: '富士山豆腐の本格麻婆めし並盛', protein: 25.9, fat: 27.5, carbs: 103.8, calories: 793 },
  { chain: '松屋', name: '富士山豆腐の本格麻婆めしライス大盛', protein: 28.4, fat: 27.8, carbs: 140.9, calories: 961 },

  // サイド・ごはん単体
  { chain: '松屋', name: 'ライス小盛', protein: 3.8, fat: 0.5, carbs: 55.7, calories: 252 },
  { chain: '松屋', name: 'ライス並盛', protein: 5.5, fat: 0.7, carbs: 81.6, calories: 370 },
  { chain: '松屋', name: 'ライス大盛', protein: 8.0, fat: 1.0, carbs: 118.7, calories: 538 },
  { chain: '松屋', name: 'ライス特盛', protein: 10.0, fat: 1.2, carbs: 148.4, calories: 672 },
  { chain: '松屋', name: 'みそ汁', protein: 1.8, fat: 1.3, carbs: 3.7, calories: 35 },

  // サイド・トッピング例
  { chain: '松屋', name: 'お新香', protein: 1.0, fat: 0.1, carbs: 7.3, calories: 34 },
  { chain: '松屋', name: '納豆（ネギ付）', protein: 6.5, fat: 3.9, carbs: 6.7, calories: 81 },
  { chain: '松屋', name: '冷やっこ', protein: 7.3, fat: 4.7, carbs: 4.8, calories: 90 },
  { chain: '松屋', name: '半熟玉子', protein: 5.8, fat: 4.8, carbs: 0.1, calories: 71 },
  { chain: '松屋', name: '生玉子', protein: 5.8, fat: 4.8, carbs: 0.1, calories: 71 },
  { chain: '松屋', name: '国産とろろ', protein: 1.1, fat: 0.1, carbs: 9.4, calories: 43 },
  { chain: '松屋', name: '生野菜', protein: 1.2, fat: 0.2, carbs: 5.2, calories: 24 },
  { chain: '松屋', name: 'ポテサラ生野菜', protein: 2.3, fat: 5.9, carbs: 14.4, calories: 116 },
  { chain: '松屋', name: 'キムチ', protein: 1.4, fat: 0.5, carbs: 8.6, calories: 45 },
  { chain: '松屋', name: '焼きのり', protein: 0.4, fat: 0.0, carbs: 0.4, calories: 2 },

  // お子様メニュー
  { chain: '松屋', name: 'おこさま牛めしわくわくセット', protein: 12.7, fat: 22.9, carbs: 85.3, calories: 608 },
  { chain: '松屋', name: 'おこさまカレーわくわくセット', protein: 10.1, fat: 14.5, carbs: 91.1, calories: 546 },
];

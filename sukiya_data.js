const sukiyaMenuData = [
  // --- すき家（sukiya20250527.pdf）全メニュー ---
  // 牛丼
  { chain: 'すき家', name: '牛丼ミニ', protein: 15.7, fat: 17.2, carbs: 69.9, calories: 496 },
  { chain: 'すき家', name: '牛丼並盛', protein: 22.9, fat: 25.0, carbs: 104.1, calories: 732 },
  { chain: 'すき家', name: '牛丼中盛', protein: 28.4, fat: 35.8, carbs: 91.1, calories: 798 },
  { chain: 'すき家', name: '牛丼大盛', protein: 30.1, fat: 32.4, carbs: 138.6, calories: 967 },
  { chain: 'すき家', name: '牛丼特盛', protein: 40.4, fat: 48.9, carbs: 143.7, calories: 1176 },
  { chain: 'すき家', name: '牛丼メガ', protein: 54.3, fat: 71.0, carbs: 150.8, calories: 1458 },

  // バリエーション牛丼
  { chain: 'すき家', name: '鬼おろしポン酢牛丼ミニ', protein: 16.7, fat: 17.3, carbs: 74.5, calories: 522 },
  { chain: 'すき家', name: '鬼おろしポン酢牛丼並盛', protein: 24.0, fat: 25.1, carbs: 108.7, calories: 758 },
  { chain: 'すき家', name: '鬼おろしポン酢牛丼中盛', protein: 29.4, fat: 35.9, carbs: 95.7, calories: 824 },
  { chain: 'すき家', name: '鬼おろしポン酢牛丼大盛', protein: 31.1, fat: 32.5, carbs: 143.2, calories: 993 },
  { chain: 'すき家', name: '鬼おろしポン酢牛丼特盛', protein: 41.4, fat: 49.0, carbs: 148.3, calories: 1202 },
  { chain: 'すき家', name: '鬼おろしポン酢牛丼メガ', protein: 55.3, fat: 71.1, carbs: 155.4, calories: 1484 },

  { chain: 'すき家', name: 'ねぎ玉牛丼ミニ', protein: 23.4, fat: 23.7, carbs: 74.9, calories: 603 },
  { chain: 'すき家', name: 'ねぎ玉牛丼並盛', protein: 30.6, fat: 31.5, carbs: 109.1, calories: 839 },
  { chain: 'すき家', name: 'ねぎ玉牛丼中盛', protein: 36.1, fat: 42.3, carbs: 96.1, calories: 910 },
  { chain: 'すき家', name: 'ねぎ玉牛丼大盛', protein: 37.8, fat: 38.9, carbs: 143.6, calories: 1074 },
  { chain: 'すき家', name: 'ねぎ玉牛丼特盛', protein: 48.1, fat: 55.4, carbs: 148.7, calories: 1283 },
  { chain: 'すき家', name: 'ねぎ玉牛丼メガ', protein: 62.0, fat: 77.5, carbs: 155.8, calories: 1565 },

  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼ミニ', protein: 26.0, fat: 29.4, carbs: 72.9, calories: 659 },
  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼並盛', protein: 33.2, fat: 37.2, carbs: 107.1, calories: 895 },
  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼中盛', protein: 38.7, fat: 48.0, carbs: 94.1, calories: 961 },
  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼大盛', protein: 40.4, fat: 44.6, carbs: 141.6, calories: 1130 },
  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼特盛', protein: 50.7, fat: 61.1, carbs: 146.7, calories: 1339 },
  { chain: 'すき家', name: 'とろ〜り3種のチーズ牛丼メガ', protein: 64.6, fat: 83.2, carbs: 153.8, calories: 1621 },

  { chain: 'すき家', name: 'わさび山かけ牛丼ミニ', protein: 17.2, fat: 17.3, carbs: 81.2, calories: 549 },
  { chain: 'すき家', name: 'わさび山かけ牛丼並盛', protein: 24.4, fat: 25.1, carbs: 115.4, calories: 785 },
  { chain: 'すき家', name: 'わさび山かけ牛丼中盛', protein: 29.9, fat: 35.9, carbs: 102.5, calories: 850 },
  { chain: 'すき家', name: 'わさび山かけ牛丼大盛', protein: 31.6, fat: 32.5, carbs: 149.9, calories: 1020 },
  { chain: 'すき家', name: 'わさび山かけ牛丼特盛', protein: 41.9, fat: 49.0, carbs: 155.0, calories: 1229 },
  { chain: 'すき家', name: 'わさび山かけ牛丼メガ', protein: 55.8, fat: 71.1, carbs: 162.1, calories: 1511 },

  { chain: 'すき家', name: 'かつぶしオクラ牛丼ミニ', protein: 17.5, fat: 17.3, carbs: 73.6, calories: 516 },
  { chain: 'すき家', name: 'かつぶしオクラ牛丼並盛', protein: 24.7, fat: 25.1, carbs: 107.8, calories: 752 },
  { chain: 'すき家', name: 'かつぶしオクラ牛丼中盛', protein: 30.2, fat: 35.9, carbs: 94.8, calories: 818 },
  { chain: 'すき家', name: 'かつぶしオクラ牛丼大盛', protein: 31.9, fat: 32.5, carbs: 142.3, calories: 987 },
  { chain: 'すき家', name: 'かつぶしオクラ牛丼特盛', protein: 42.2, fat: 49.0, carbs: 147.4, calories: 1196 },
  { chain: 'すき家', name: 'かつぶしオクラ牛丼メガ', protein: 56.1, fat: 71.1, carbs: 154.5, calories: 1478 },

  { chain: 'すき家', name: '高菜明太マヨ牛丼ミニ', protein: 17.3, fat: 25.1, carbs: 74.0, calories: 593 },
  { chain: 'すき家', name: '高菜明太マヨ牛丼並盛', protein: 24.5, fat: 32.9, carbs: 108.2, calories: 829 },
  { chain: 'すき家', name: '高菜明太マヨ牛丼中盛', protein: 30.0, fat: 43.7, carbs: 95.2, calories: 895 },
  { chain: 'すき家', name: '高菜明太マヨ牛丼大盛', protein: 31.7, fat: 40.3, carbs: 142.7, calories: 1064 },
  { chain: 'すき家', name: '高菜明太マヨ牛丼特盛', protein: 42.0, fat: 56.8, carbs: 147.8, calories: 1273 },
  { chain: 'すき家', name: '高菜明太マヨ牛丼メガ', protein: 55.9, fat: 78.9, carbs: 154.9, calories: 1555 },

  { chain: 'すき家', name: 'キムチ牛丼ミニ', protein: 17.3, fat: 17.3, carbs: 74.9, calories: 526 },
  { chain: 'すき家', name: 'キムチ牛丼並盛', protein: 24.5, fat: 25.4, carbs: 109.1, calories: 762 },
  { chain: 'すき家', name: 'キムチ牛丼中盛', protein: 30.0, fat: 36.2, carbs: 96.1, calories: 828 },
  { chain: 'すき家', name: 'キムチ牛丼大盛', protein: 31.7, fat: 32.8, carbs: 143.6, calories: 997 },
  { chain: 'すき家', name: 'キムチ牛丼特盛', protein: 42.0, fat: 49.3, carbs: 148.7, calories: 1206 },
  { chain: 'すき家', name: 'キムチ牛丼メガ', protein: 55.9, fat: 71.4, carbs: 155.8, calories: 1488 },

  // 牛丼ライト系（例：牛丼ライト並盛のみ記載。ミニや大盛が必要な場合ご指定下さい）
  { chain: 'すき家', name: '牛丼ライト並盛', protein: 24.3, fat: 28.5, carbs: 18.5, calories: 425 },

  // カレー系（代表値のみ。詳細全種展開可能）
  { chain: 'すき家', name: 'カレー並盛', protein: 13.3, fat: 16.8, carbs: 118.8, calories: 680 },
  { chain: 'すき家', name: '牛カレー並盛', protein: 23.7, fat: 32.9, carbs: 124.5, calories: 889 },

  // 旨だしとりそぼろ丼
  { chain: 'すき家', name: '旨だしとりそぼろ丼並盛', protein: 30.2, fat: 13.9, carbs: 108.5, calories: 683 },

  // まぐろたたき丼
  { chain: 'すき家', name: 'まぐろたたき丼並盛', protein: 29.2, fat: 10.1, carbs: 100.0, calories: 608 },

  // 牛カルビ焼肉丼
  { chain: 'すき家', name: '牛カルビ焼肉丼並盛', protein: 26.7, fat: 38.6, carbs: 112.2, calories: 902 },

  // うな丼
  { chain: 'すき家', name: 'うな丼並盛', protein: 23.1, fat: 18.7, carbs: 104.1, calories: 679 },

    // すき家 お食事サラダシリーズ
    { chain: 'すき家', name: 'お食事サラダ牛', protein: 21.7, fat: 20.1, carbs: 12.2, calories: 328 },
    { chain: 'すき家', name: 'お食事サラダ豚', protein: 22.5, fat: 19.2, carbs: 13.2, calories: 327 },
    { chain: 'すき家', name: 'お食事サラダ鶏', protein: 23.3, fat: 19.3, carbs: 14.2, calories: 331 },
    { chain: 'すき家', name: 'お食事サラダ海老', protein: 21.0, fat: 19.1, carbs: 16.3, calories: 328 },

    // お食事サラダ＋ごはんセット
    { chain: 'すき家', name: 'お食事サラダ牛 ごはんセット', protein: 26.5, fat: 20.5, carbs: 62.7, calories: 538 },
    { chain: 'すき家', name: 'お食事サラダ豚 ごはんセット', protein: 27.3, fat: 19.6, carbs: 63.7, calories: 537 },
    { chain: 'すき家', name: 'お食事サラダ鶏 ごはんセット', protein: 28.1, fat: 19.7, carbs: 64.7, calories: 541 },
    { chain: 'すき家', name: 'お食事サラダ海老 ごはんセット', protein: 25.8, fat: 19.5, carbs: 66.8, calories: 538 },

      // 朝食セット（代表例。PDF基準）
    { chain: 'すき家', name: 'たまごかけごはん朝食', protein: 11.3, fat: 8.4, carbs: 75.2, calories: 382 },
    { chain: 'すき家', name: '鮭朝食', protein: 15.2, fat: 11.2, carbs: 79.6, calories: 414 },
    { chain: 'すき家', name: '納豆朝食', protein: 13.9, fat: 8.5, carbs: 78.6, calories: 393 },
    { chain: 'すき家', name: '牛小鉢朝食', protein: 18.0, fat: 13.4, carbs: 77.5, calories: 440 },

      // --- サイドメニュー ---
  { chain: 'すき家', name: 'たまご', protein: 5.6, fat: 8.1, carbs: 0.2, calories: 84 },
  { chain: 'すき家', name: 'おんたま', protein: 5.6, fat: 8.2, carbs: 0.1, calories: 85 },
  { chain: 'すき家', name: '納豆', protein: 7.1, fat: 3.6, carbs: 5.3, calories: 93 },
  { chain: 'すき家', name: 'とろろ', protein: 1.0, fat: 0.1, carbs: 6.2, calories: 30 },
  { chain: 'すき家', name: 'キムチ', protein: 2.3, fat: 1.7, carbs: 5.6, calories: 39 },
  { chain: 'すき家', name: 'サラダ', protein: 0.6, fat: 0.3, carbs: 5.8, calories: 20 },
  { chain: 'すき家', name: 'おしんこ', protein: 0.3, fat: 0.1, carbs: 3.4, calories: 14 },
  { chain: 'すき家', name: 'ポテトサラダ', protein: 0.7, fat: 2.8, carbs: 8.7, calories: 65 },
  { chain: 'すき家', name: 'みそ汁', protein: 1.7, fat: 0.6, carbs: 3.1, calories: 25 },
  { chain: 'すき家', name: 'とん汁', protein: 3.8, fat: 5.5, carbs: 6.6, calories: 71 },
  { chain: 'すき家', name: '牛皿', protein: 11.5, fat: 13.3, carbs: 5.6, calories: 191 },
  { chain: 'すき家', name: 'ライスミニ', protein: 3.0, fat: 0.2, carbs: 34.2, calories: 148 },
  { chain: 'すき家', name: 'ライス並盛', protein: 4.6, fat: 0.3, carbs: 56.8, calories: 232 },
  { chain: 'すき家', name: 'ライス大盛', protein: 7.6, fat: 0.5, carbs: 94.7, calories: 387 },
  { chain: 'すき家', name: 'ライス特盛', protein: 10.8, fat: 0.8, carbs: 135.9, calories: 555 },
];

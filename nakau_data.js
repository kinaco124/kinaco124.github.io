const nakauMenuData = [
  // なか卯：丼もの・カレー・合い盛り・うどん・そば・皿・定食・サイド・お子様・ドリンク etc.

  // 和風牛丼
  { chain: 'なか卯', name: '和風牛丼小盛', protein: 13.0, fat: 18.8, carbs: 62.6, calories: 485 },
  { chain: 'なか卯', name: '和風牛丼並盛', protein: 18.7, fat: 26.2, carbs: 95.2, calories: 713 },
  { chain: 'なか卯', name: '和風牛丼大盛', protein: 26.4, fat: 36.3, carbs: 124.1, calories: 955 },

  // 親子丼
  { chain: 'なか卯', name: '親子丼ごはん小盛', protein: 21.8, fat: 8.8, carbs: 62.0, calories: 425 },
  { chain: 'なか卯', name: '親子丼並盛', protein: 28.9, fat: 12.1, carbs: 94.9, calories: 620 },
  { chain: 'なか卯', name: '親子丼大盛', protein: 30.6, fat: 12.4, carbs: 120.9, calories: 738 },
  { chain: 'なか卯', name: '親子丼特盛', protein: 36.4, fat: 14.7, carbs: 121.2, calories: 783 },

  // カツ丼
  { chain: 'なか卯', name: 'カツ丼並盛', protein: 29.9, fat: 28.4, carbs: 107.8, calories: 820 },
  { chain: 'なか卯', name: 'カツ丼大盛', protein: 31.7, fat: 28.6, carbs: 133.7, calories: 938 },

  // 特製かき揚げ丼
  { chain: 'なか卯', name: '特製かき揚げ丼並盛', protein: 10.0, fat: 17.3, carbs: 102.8, calories: 623 },
  { chain: 'なか卯', name: '特製かき揚げ丼大盛', protein: 11.7, fat: 17.5, carbs: 128.7, calories: 741 },

  // チーズ親子丼
  { chain: 'なか卯', name: 'チーズ親子丼ごはん小盛', protein: 30.0, fat: 18.4, carbs: 62.7, calories: 544 },
  { chain: 'なか卯', name: 'チーズ親子丼並盛', protein: 37.0, fat: 21.7, carbs: 95.6, calories: 740 },
  { chain: 'なか卯', name: 'チーズ親子丼大盛', protein: 38.8, fat: 22.0, carbs: 121.6, calories: 857 },

  // チーズ牛丼
  { chain: 'なか卯', name: 'チーズ牛丼並盛', protein: 33.6, fat: 37.1, carbs: 97.8, calories: 875 },
  { chain: 'なか卯', name: 'チーズ牛丼大盛', protein: 35.4, fat: 37.3, carbs: 123.8, calories: 992 },

  // 牛とじ丼
  { chain: 'なか卯', name: '牛とじ丼並盛', protein: 38.9, fat: 29.2, carbs: 117.0, calories: 906 },
  { chain: 'なか卯', name: '牛とじ丼大盛', protein: 40.6, fat: 29.4, carbs: 143.0, calories: 1023 },

  // 親子カレー
  { chain: 'なか卯', name: '親子カレー並盛', protein: 30.5, fat: 18.1, carbs: 99.2, calories: 696 },
  { chain: 'なか卯', name: '親子カレー大盛', protein: 32.2, fat: 18.3, carbs: 125.2, calories: 814 },

  // チキンカレー
  { chain: 'なか卯', name: 'チキンカレー並盛', protein: 15.8, fat: 17.7, carbs: 107.5, calories: 673 },
  { chain: 'なか卯', name: 'チキンカレー大盛', protein: 17.5, fat: 17.9, carbs: 133.4, calories: 790 },

  // うどん・そば（主要代表）
  { chain: 'なか卯', name: 'はいからうどん小', protein: 4.5, fat: 3.6, carbs: 28.7, calories: 166 },
  { chain: 'なか卯', name: 'はいからうどん並', protein: 8.1, fat: 7.2, carbs: 55.6, calories: 319 },
  { chain: 'なか卯', name: '牛肉うどん並', protein: 15.4, fat: 15.7, carbs: 60.9, calories: 453 },
  { chain: 'なか卯', name: '月見うどん並', protein: 16.1, fat: 14.0, carbs: 55.6, calories: 419 },
  { chain: 'なか卯', name: '鶏天うどん並', protein: 14.6, fat: 15.7, carbs: 72.1, calories: 485 },
  { chain: 'なか卯', name: 'カレーうどん並', protein: 14.9, fat: 7.3, carbs: 77.8, calories: 437 },
  { chain: 'なか卯', name: '特製かき揚げうどん並', protein: 16.7, fat: 18.9, carbs: 74.3, calories: 534 },

  // ざるうどん/そば
  { chain: 'なか卯', name: 'ざるうどん並', protein: 6.1, fat: 11.9, carbs: 11.7, calories: 178 },
  { chain: 'なか卯', name: 'ざるそば並', protein: 7.4, fat: 14.7, carbs: 6.1, calories: 190 },

  // 朝定食・皿・サイド・単品
  { chain: 'なか卯', name: '銀鮭', protein: 12.7, fat: 4.4, carbs: 0.1, calories: 91 },
  { chain: 'なか卯', name: 'こだわり卵', protein: 7.9, fat: 6.8, carbs: 0.3, calories: 100 },
  { chain: 'なか卯', name: '竜田あげ（2個）', protein: 6.1, fat: 11.9, carbs: 11.7, calories: 178 },
  { chain: 'なか卯', name: '竜田あげ（5個）', protein: 15.3, fat: 29.7, carbs: 29.3, calories: 445 },
  { chain: 'なか卯', name: '納豆', protein: 7.3, fat: 3.8, carbs: 4.9, calories: 83 },
  { chain: 'なか卯', name: '大根彩りサラダ', protein: 0.8, fat: 0.1, carbs: 2.6, calories: 12 },
  { chain: 'なか卯', name: 'ごはん小盛', protein: 3.8, fat: 0.5, carbs: 55.7, calories: 252 },
  { chain: 'なか卯', name: 'ごはん並盛', protein: 5.8, fat: 0.7, carbs: 85.3, calories: 387 },
  { chain: 'なか卯', name: 'ごはん大盛', protein: 7.5, fat: 0.9, carbs: 111.3, calories: 504 },

  // ドリンク（参考）
  { chain: 'なか卯', name: '缶ビール（350ml）', protein: 1.4, fat: 0.0, carbs: 9.5, calories: 140 },
  { chain: 'なか卯', name: '黒烏龍茶', protein: 0.0, fat: 0.0, carbs: 0.1, calories: 1 },
  { chain: 'なか卯', name: 'アイスコーヒー', protein: 0.2, fat: 0.0, carbs: 0.1, calories: 1 },
  { chain: 'なか卯', name: 'ホットコーヒー', protein: 0.2, fat: 0.0, carbs: 0.1, calories: 1 },

  // お子様メニュー（代表例）
  { chain: 'なか卯', name: 'お子様きつねうどん', protein: 3.0, fat: 1.5, carbs: 7.7, calories: 55 },
  { chain: 'なか卯', name: 'お子様カレー丼ぶり', protein: 7.9, fat: 6.8, carbs: 0.3, calories: 100 },

  // 合い盛り・W系丼（参考・一部抜粋、表記不明瞭なもの省略）
  // { chain: 'なか卯', name: '牛・親子丼', protein: xx, fat: xx, carbs: xx, calories: xxx }, // 数値不明

  // 追加で必要なものは要リクエスト！
];

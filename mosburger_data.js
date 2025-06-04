const menuData = [
  // 新とびきりバーガー
  { chain: 'モスバーガー', name: '新とびきりチーズ～北海道チーズ～', protein: 21.9, fat: 24.7, carbs: 42.2, calories: 479 },
  { chain: 'モスバーガー', name: 'ダブル新とびきりチーズ～北海道チーズ～', protein: 35.6, fat: 40.2, carbs: 50.4, calories: 707 },

  // ハンバーガー類
  { chain: 'モスバーガー', name: 'バジルマヨの海老カツバーガー～国産バジル～', protein: 14.3, fat: 21.5, carbs: 44.7, calories: 426 },
  { chain: 'モスバーガー', name: '海老エビフライバーガー', protein: 16.1, fat: 32.8, carbs: 43.8, calories: 529 },
  { chain: 'モスバーガー', name: 'モスバーガー', protein: 15.2, fat: 17.0, carbs: 40.1, calories: 373 },
  { chain: 'モスバーガー', name: 'テリヤキバーガー', protein: 14.4, fat: 18.2, carbs: 40.6, calories: 384 },
  { chain: 'モスバーガー', name: 'テリヤキチキンバーガー', protein: 20.1, fat: 10.3, carbs: 32.4, calories: 303 },
  { chain: 'モスバーガー', name: 'モスチーズバーガー', protein: 18.2, fat: 21.4, carbs: 40.5, calories: 426 },
  { chain: 'モスバーガー', name: 'モス野菜バーガー', protein: 14.1, fat: 18.6, carbs: 35.4, calories: 364 },
  { chain: 'モスバーガー', name: '海老カツバーガー', protein: 14.5, fat: 19.3, carbs: 42.2, calories: 397 },
  { chain: 'モスバーガー', name: 'ロースカツバーガー', protein: 16.6, fat: 16.4, carbs: 49.7, calories: 410 },
  { chain: 'モスバーガー', name: 'フィッシュバーガー', protein: 16.2, fat: 18.8, carbs: 37.0, calories: 381 },
  { chain: 'モスバーガー', name: 'チキンバーガー', protein: 15.0, fat: 18.5, carbs: 40.0, calories: 386 },
  { chain: 'モスバーガー', name: 'ハンバーガー', protein: 13.7, fat: 13.2, carbs: 35.2, calories: 314 },
  { chain: 'モスバーガー', name: 'チーズバーガー', protein: 16.7, fat: 17.6, carbs: 35.6, calories: 367 },

  // ダブル・スパイシー等バリエーション
  { chain: 'モスバーガー', name: 'ダブルモスバーガー', protein: 23.7, fat: 28.4, carbs: 45.8, calories: 533 },
  { chain: 'モスバーガー', name: 'ダブルモスチーズバーガー', protein: 26.7, fat: 32.8, carbs: 46.2, calories: 586 },
  { chain: 'モスバーガー', name: 'ダブルテリヤキバーガー', protein: 23.0, fat: 29.2, carbs: 50.3, calories: 556 },
  { chain: 'モスバーガー', name: 'ダブルモス野菜バーガー', protein: 22.2, fat: 29.5, carbs: 39.7, calories: 512 },
  { chain: 'モスバーガー', name: 'ダブルハンバーガー', protein: 21.8, fat: 24.1, carbs: 39.5, calories: 462 },
  { chain: 'モスバーガー', name: 'ダブルチーズバーガー', protein: 24.8, fat: 28.5, carbs: 39.9, calories: 515 },

  { chain: 'モスバーガー', name: 'スパイシーモスバーガー', protein: 15.3, fat: 17.0, carbs: 40.5, calories: 375 },
  { chain: 'モスバーガー', name: 'スパイシーモスチーズバーガー', protein: 18.3, fat: 21.4, carbs: 40.9, calories: 428 },
  { chain: 'モスバーガー', name: 'スパイシーダブルモスバーガー', protein: 23.8, fat: 28.4, carbs: 46.2, calories: 535 },
  { chain: 'モスバーガー', name: 'スパイシーダブルモスチーズバーガー', protein: 26.8, fat: 32.8, carbs: 46.6, calories: 588 },

  // グリーンバーガー/菜摘/ソイパティ
  { chain: 'モスバーガー', name: 'グリーンバーガー〈テリヤキ〉', protein: 11.0, fat: 15.7, carbs: 41.8, calories: 351 },
  { chain: 'モスバーガー', name: 'モスの菜摘モス野菜', protein: 9.1, fat: 16.5, carbs: 10.4, calories: 224 },
  { chain: 'モスバーガー', name: 'モスの菜摘テリヤキチキン', protein: 15.1, fat: 10.7, carbs: 7.7, calories: 186 },
  { chain: 'モスバーガー', name: 'モスの菜摘フィッシュ', protein: 11.1, fat: 16.5, carbs: 11.5, calories: 239 },
  { chain: 'モスバーガー', name: 'モスの菜摘海老カツ', protein: 9.4, fat: 17.0, carbs: 16.7, calories: 255 },
  { chain: 'モスバーガー', name: 'モスの菜摘ロースカツ', protein: 11.4, fat: 14.0, carbs: 23.6, calories: 266 },
  { chain: 'モスバーガー', name: 'モスの菜摘チキン', protein: 9.9, fat: 16.3, carbs: 14.6, calories: 244 },
  { chain: 'モスバーガー', name: 'モスの菜摘ソイモス野菜', protein: 6.8, fat: 13.8, carbs: 13.7, calories: 203 },

  { chain: 'モスバーガー', name: 'ソイモスバーガー', protein: 12.9, fat: 14.3, carbs: 43.4, calories: 352 },
  { chain: 'モスバーガー', name: 'ソイスパイシーモスバーガー', protein: 13.0, fat: 14.3, carbs: 43.8, calories: 354 },
  { chain: 'モスバーガー', name: 'ソイモスチーズバーガー', protein: 15.9, fat: 18.7, carbs: 43.8, calories: 405 },
  { chain: 'モスバーガー', name: 'ソイスパイシーモスチーズバーガー', protein: 16.0, fat: 18.7, carbs: 44.2, calories: 407 },
  { chain: 'モスバーガー', name: 'ソイテリヤキバーガー', protein: 12.1, fat: 15.5, carbs: 43.9, calories: 363 },
  { chain: 'モスバーガー', name: 'ソイモス野菜バーガー', protein: 11.8, fat: 15.9, carbs: 38.7, calories: 343 },
  { chain: 'モスバーガー', name: 'ソイハンバーガー', protein: 11.4, fat: 10.5, carbs: 38.5, calories: 293 },
  { chain: 'モスバーガー', name: 'ソイチーズバーガー', protein: 14.4, fat: 14.9, carbs: 38.9, calories: 346 },

  // モスライスバーガー
  { chain: 'モスバーガー', name: 'モスライスバーガー海鮮かきあげ（塩だれ）', protein: 8.5, fat: 10.5, carbs: 61.3, calories: 372 },
  { chain: 'モスバーガー', name: 'モスライスバーガー焼肉', protein: 9.5, fat: 11.6, carbs: 52.8, calories: 353 },

  // ホットドッグ
  { chain: 'モスバーガー', name: 'ホットドッグ', protein: 11.6, fat: 23.4, carbs: 25.5, calories: 359 },
  { chain: 'モスバーガー', name: 'チリドッグ', protein: 13.0, fat: 24.0, carbs: 26.5, calories: 373 },
  { chain: 'モスバーガー', name: 'スパイシーチリドッグ', protein: 13.1, fat: 24.0, carbs: 26.6, calories: 374 },

  // サイドメニュー
  { chain: 'モスバーガー', name: 'フレンチフライポテトS', protein: 2.2, fat: 7.0, carbs: 24.8, calories: 170 },
  { chain: 'モスバーガー', name: 'フレンチフライポテトM', protein: 3.0, fat: 9.8, carbs: 34.7, calories: 238 },
  { chain: 'モスバーガー', name: 'フレンチフライポテトL', protein: 5.2, fat: 16.7, carbs: 59.4, calories: 409 },
  { chain: 'モスバーガー', name: 'オニオンフライ', protein: 3.5, fat: 12.7, carbs: 22.8, calories: 219 },
  { chain: 'モスバーガー', name: 'オニポテ（ポテト＆オニオン）', protein: 2.6, fat: 8.7, carbs: 25.3, calories: 189 },
  { chain: 'モスバーガー', name: 'こだわりサラダ ローストアマニトッピング', protein: 1.3, fat: 0.9, carbs: 4.5, calories: 28 },
  { chain: 'モスバーガー', name: 'チキンナゲット 5コ入り', protein: 14.8, fat: 10.2, carbs: 10.9, calories: 195 },
  { chain: 'モスバーガー', name: 'モスチキン', protein: 15.3, fat: 16.6, carbs: 14.7, calories: 269 },

  // スープ
  { chain: 'モスバーガー', name: 'コーンスープ 北海道産コーン使用', protein: 3.6, fat: 7.2, carbs: 15.3, calories: 140 },
  { chain: 'モスバーガー', name: 'クラムチャウダー', protein: 4.1, fat: 4.3, carbs: 15.8, calories: 119 },

  // 朝モス
  { chain: 'モスバーガー', name: 'モーニング野菜バーガー', protein: 13.9, fat: 15.5, carbs: 35.5, calories: 337 },
  { chain: 'モスバーガー', name: 'モーニング野菜チーズバーガー', protein: 16.9, fat: 19.9, carbs: 35.9, calories: 390 },
  { chain: 'モスバーガー', name: 'ソイモーニング野菜バーガー', protein: 11.6, fat: 12.8, carbs: 38.8, calories: 316 },
  { chain: 'モスバーガー', name: 'ソイモーニング野菜チーズバーガー', protein: 14.6, fat: 17.2, carbs: 39.2, calories: 369 },
  { chain: 'モスバーガー', name: 'モーニングドッグ', protein: 9.5, fat: 15.4, carbs: 22.4, calories: 267 },

  // 夜モス・金曜限定等
  { chain: 'モスバーガー', name: 'トリプルモスバーガー', protein: 31.8, fat: 39.3, carbs: 50.1, calories: 681 },
  { chain: 'モスバーガー', name: 'トリプルモスチーズバーガー', protein: 34.8, fat: 43.7, carbs: 50.5, calories: 734 },
  { chain: 'モスバーガー', name: 'オニオンフライデーパック', protein: 17.5, fat: 63.4, carbs: 113.8, calories: 1096 },

  // ぜいたく系
  { chain: 'モスバーガー', name: 'ぜいたくモスバーガー', protein: 24.9, fat: 31.8, carbs: 52.2, calories: 593 },
  { chain: 'モスバーガー', name: 'ぜいたくモスチーズバーガー', protein: 30.9, fat: 40.6, carbs: 53.0, calories: 699 },
];

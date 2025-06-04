const menuData = [
  // バーガー・サンド類
  { chain: 'マクドナルド', name: 'えびフィレオ®', protein: 11.0, fat: 17.1, carbs: 50.9, calories: 399 },
  { chain: 'マクドナルド', name: 'てりやきチキンフィレオ', protein: 19.9, fat: 23.1, carbs: 53.4, calories: 498 },
  { chain: 'マクドナルド', name: 'てりやきマックバーガー', protein: 14.5, fat: 30.2, carbs: 37.5, calories: 477 },
  { chain: 'マクドナルド', name: 'エグチ(エッグチーズバーガー)', protein: 22.4, fat: 19.0, carbs: 31.2, calories: 390 },
  { chain: 'マクドナルド', name: 'エッグマックマフィン®', protein: 18.6, fat: 13.6, carbs: 27.2, calories: 310 },
  { chain: 'マクドナルド', name: 'スパチキ(スパイシーマックチキン)', protein: 14.3, fat: 21.3, carbs: 39.6, calories: 405 },
  { chain: 'マクドナルド', name: 'ソーセージエッグマフィン', protein: 21.9, fat: 30.6, carbs: 27.3, calories: 477 },
  { chain: 'マクドナルド', name: 'ソーセージマフィン', protein: 15.5, fat: 25.1, carbs: 27.1, calories: 397 },
  { chain: 'マクドナルド', name: 'ダブルチーズバーガー', protein: 26.4, fat: 25.1, carbs: 31.8, calories: 459 },
  { chain: 'マクドナルド', name: 'チーズバーガー', protein: 15.9, fat: 13.5, carbs: 31.1, calories: 310 },
  { chain: 'マクドナルド', name: 'チキチー® (マックチキン® チーズ)', protein: 17.1, fat: 24.1, carbs: 41.3, calories: 448 },
  { chain: 'マクドナルド', name: 'チキンフィレオ®', protein: 19.7, fat: 22.8, carbs: 48.0, calories: 473 },
  { chain: 'マクドナルド', name: 'チキンマックマフィン', protein: 15.8, fat: 19.0, carbs: 38.2, calories: 388 },
  { chain: 'マクドナルド', name: 'ハンバーガー', protein: 13.0, fat: 9.5, carbs: 30.3, calories: 259 },
  { chain: 'マクドナルド', name: 'ビッグマック®', protein: 26.1, fat: 28.0, carbs: 42.0, calories: 525 },
  { chain: 'マクドナルド', name: 'フィレオフィッシュ®', protein: 15.0, fat: 14.2, carbs: 37.4, calories: 338 },
  { chain: 'マクドナルド', name: 'ベーコンエッグマックサンド', protein: 16.3, fat: 12.6, carbs: 27.9, calories: 294 },
  { chain: 'マクドナルド', name: 'ベーコンレタスバーガー', protein: 17.5, fat: 20.3, carbs: 29.5, calories: 368 },

  // グリドル・パンケーキ系
  { chain: 'マクドナルド', name: 'ホットケーキ', protein: 8.3, fat: 9.3, carbs: 53.5, calories: 323 },
  { chain: 'マクドナルド', name: 'マックグリドル® ソーセージ', protein: 10.5, fat: 23.4, carbs: 40.4, calories: 414 },
  { chain: 'マクドナルド', name: 'マックグリドル® ソーセージエッグ', protein: 19.8, fat: 32.9, carbs: 41.3, calories: 545 },
  { chain: 'マクドナルド', name: 'マックグリドル® ベーコンエッグ', protein: 15.6, fat: 16.7, carbs: 41.3, calories: 382 },

  // 倍シリーズ・夜マック等
  { chain: 'マクドナルド', name: '倍えびフィレオ', protein: 16.6, fat: 24.7, carbs: 70.9, calories: 570 },
  { chain: 'マクドナルド', name: '倍てりやきチキンフィレオ', protein: 34.6, fat: 36.6, carbs: 77.4, calories: 773 },
  { chain: 'マクドナルド', name: '倍てりやきマックバーガー', protein: 23.9, fat: 50.7, carbs: 45.6, calories: 731 },
  { chain: 'マクドナルド', name: '倍エグチ(倍エッグチーズバーガー)', protein: 29.9, fat: 26.6, carbs: 31.2, calories: 489 },
  { chain: 'マクドナルド', name: '倍スパチキ(倍スパイシーマックチキン)', protein: 23.4, fat: 31.7, carbs: 50.8, calories: 580 },
  { chain: 'マクドナルド', name: '倍ダブルチーズバーガー', protein: 41.5, fat: 40.3, carbs: 31.8, calories: 657 },
  { chain: 'マクドナルド', name: '倍チーズバーガー', protein: 23.5, fat: 21.1, carbs: 31.1, calories: 408 },
  { chain: 'マクドナルド', name: '倍チキチー(倍マックチキン チーズ)', protein: 26.2, fat: 34.5, carbs: 52.4, calories: 623 },
  { chain: 'マクドナルド', name: '倍チキンフィレオ', protein: 34.2, fat: 36.2, carbs: 65.4, calories: 721 },
  { chain: 'マクドナルド', name: '倍ハンバーガー', protein: 20.6, fat: 17.1, carbs: 30.3, calories: 358 },
  { chain: 'マクドナルド', name: '倍ビッグマック', protein: 41.3, fat: 43.1, carbs: 42.0, calories: 723 },
  { chain: 'マクドナルド', name: '倍フィレオフィッシュ', protein: 23.4, fat: 19.1, carbs: 46.9, calories: 453 },
  { chain: 'マクドナルド', name: '倍ベーコンレタスバーガー', protein: 25.0, fat: 27.9, carbs: 29.5, calories: 467 },
  { chain: 'マクドナルド', name: '倍マックチキン', protein: 23.3, fat: 30.5, carbs: 51.7, calories: 573 },

  // ご当地・スペシャルバーガー
  { chain: 'マクドナルド', name: '博多明太ポテトてりやきチキン', protein: 23.6, fat: 22.0, carbs: 55.8, calories: 512 },
  { chain: 'マクドナルド', name: '北海道4種のチーズてりやき', protein: 18.3, fat: 32.1, carbs: 36.6, calories: 506 },
  { chain: 'マクドナルド', name: '北海道4種のチーズてりやきマフィン', protein: 16.8, fat: 30.2, carbs: 34.3, calories: 476 },
  { chain: 'マクドナルド', name: '炙り醤油風 たまごベーコン肉厚ビーフ', protein: 30.8, fat: 26.2, carbs: 37.5, calories: 511 },
  { chain: 'マクドナルド', name: '炙り醤油風 ダブル肉厚ビーフ', protein: 38.1, fat: 35.6, carbs: 37.6, calories: 620 },
  { chain: 'マクドナルド', name: '炙り醤油風 トリプル肉厚ビーフ', protein: 53.9, fat: 51.7, carbs: 38.5, calories: 832 },

  // チーズチーズシリーズ
  { chain: 'マクドナルド', name: 'チーズチーズてりやきマックバーガー', protein: 20.4, fat: 38.2, carbs: 38.9, calories: 578 },
  { chain: 'マクドナルド', name: 'チーズチーズダブルチーズバーガー', protein: 32.3, fat: 33.2, carbs: 33.1, calories: 561 },

  // サイド（代表的な一部例：ポテト等。全サイドが必要な場合は追加指示ください）
  { chain: 'マクドナルド', name: 'マックフライポテト® Mサイズ', protein: 5.3, fat: 21.0, carbs: 51.0, calories: 410 },
];

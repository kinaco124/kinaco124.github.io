// subway_data.js
// データは subway20250521.pdf より抽出
// サンドイッチの栄養成分値は、サイズがレギュラー、パン・ドレッシング・野菜が各サンドイッチおすすめの場合です。

const subwayMenuData = [
  // 期間限定メニュー(New) サンドイッチ
  { chain: 'サブウェイ', name: 'メキシカンミートタコス', protein: 14.1, fat: 13.9, carbs: 46.1, calories: 358 },
  { chain: 'サブウェイ', name: '濃厚チーズタコス', protein: 14.7, fat: 17.1, carbs: 47.0, calories: 392 },
  { chain: 'サブウェイ', name: 'ざく切りサルサタコス ~爽やかライム~', protein: 9.8, fat: 14.1, carbs: 48.2, calories: 327 },
  { chain: 'サブウェイ', name: 'タンドリーチキン (期間限定)', protein: 17.9, fat: 9.9, carbs: 39.8, calories: 316 },

  // グランドメニュー サンドイッチ
  { chain: 'サブウェイ', name: 'チーズオンチーズ', protein: 12.9, fat: 14.8, carbs: 42.0, calories: 347 },
  { chain: 'サブウェイ', name: 'ツナ', protein: 14.6, fat: 15.7, carbs: 38.9, calories: 350 },
  { chain: 'サブウェイ', name: '生ハム&マスカルポーネ', protein: 15.5, fat: 11.2, carbs: 42.3, calories: 326 },
  { chain: 'サブウェイ', name: 'えびアボカド', protein: 12.2, fat: 11.9, carbs: 41.1, calories: 319 },
  { chain: 'サブウェイ', name: 'BLT', protein: 14.2, fat: 11.3, carbs: 41.9, calories: 335 },
  { chain: 'サブウェイ', name: 'ローストビーフ', protein: 16.2, fat: 9.5, carbs: 40.0, calories: 309 },
  { chain: 'サブウェイ', name: 'てり焼きチキン~焦がし醤油仕立て~', protein: 19.7, fat: 9.9, carbs: 45.5, calories: 346 },
  { chain: 'サブウェイ', name: 'たまご', protein: 11.7, fat: 13.0, carbs: 39.6, calories: 318 },
  { chain: 'サブウェイ', name: 'アボカドベジー', protein: 4.4, fat: 8.4, carbs: 44.8, calories: 215 },
  { chain: 'サブウェイ', name: 'ベジーデライト', protein: 7.2, fat: 4.1, carbs: 38.0, calories: 205 },
  { chain: 'サブウェイ', name: 'チリチキン', protein: 20.5, fat: 4.1, carbs: 39.7, calories: 273 },
  { chain: 'サブウェイ', name: 'えびたま', protein: 13.1, fat: 12.8, carbs: 39.3, calories: 321 },
  { chain: 'サブウェイ', name: 'サラダチキン', protein: 21.0, fat: 3.6, carbs: 41.7, calories: 278 },
  { chain: 'サブウェイ', name: 'チーズサラダチキン', protein: 22.7, fat: 8.8, carbs: 41.8, calories: 331 },
  { chain: 'サブウェイ', name: '贅沢てりたまチキン', protein: 24.1, fat: 19.5, carbs: 45.5, calories: 449 },
  { chain: 'サブウェイ', name: 'スパイシークラブハウス', protein: 25.4, fat: 12.6, carbs: 46.6, calories: 396 },
  { chain: 'サブウェイ', name: 'アボカドチキン', protein: 21.7, fat: 12.6, carbs: 44.3, calories: 373 },
  { chain: 'サブウェイ', name: 'ピザベーコン・イタリアーナ', protein: 19.5, fat: 19.4, carbs: 41.5, calories: 414 },
  { chain: 'サブウェイ', name: 'ピザ えびジェノベーゼ', protein: 20.0, fat: 24.3, carbs: 41.5, calories: 458 },
  { chain: 'サブウェイ', name: 'ハム', protein: 12.4, fat: 6.4, carbs: 40.0, calories: 260 },
  { chain: 'サブウェイ', name: 'ハムクラブハウス', protein: 16.4, fat: 16.2, carbs: 42.1, calories: 373 },
  { chain: 'サブウェイ', name: 'ハムアボカド', protein: 13.0, fat: 14.9, carbs: 42.9, calories: 351 },

  // サイドメニュー (コロコロポテト)
  { chain: 'サブウェイ', name: 'コロコロポテト チリライム(S)', protein: 2.4, fat: 6.0, carbs: 24.7, calories: 162 },
  { chain: 'サブウェイ', name: 'コロコロポテト チリライム(M)', protein: 4.2, fat: 10.6, carbs: 44.1, calories: 289 },
  { chain: 'サブウェイ', name: 'コロコロポテト オリジナル(S)', protein: 2.3, fat: 5.9, carbs: 23.7, calories: 158 },
  { chain: 'サブウェイ', name: 'コロコロポテト オリジナル(M)', protein: 4.2, fat: 10.6, carbs: 42.1, calories: 280 },
  { chain: 'サブウェイ', name: 'コロコロポテト ハーブソルト(S)', protein: 2.4, fat: 6.0, carbs: 24.4, calories: 161 },
  { chain: 'サブウェイ', name: 'コロコロポテト ハーブソルト(M)', protein: 4.4, fat: 10.6, carbs: 43.4, calories: 287 },
  { chain: 'サブウェイ', name: 'コロコロポテト トリプルチーズ(S)', protein: 2.6, fat: 6.3, carbs: 24.2, calories: 164 },
  { chain: 'サブウェイ', name: 'コロコロポテト トリプルチーズ(M)', protein: 4.8, fat: 11.2, carbs: 43.1, calories: 293 },

  // スープ
  { chain: 'サブウェイ', name: 'コーンクリームチャウダー', protein: 2.9, fat: 4.9, carbs: 15.0, calories: 115 },
  { chain: 'サブウェイ', name: '高原トマトと6種野菜のミネストローネ', protein: 2.4, fat: 2.6, carbs: 12.6, calories: 80 },
  { chain: 'サブウェイ', name: 'やさしい野菜スープ', protein: 1.7, fat: 3.8, carbs: 4.1, calories: 56 },
  { chain: 'サブウェイ', name: 'チキンホワイトポタージュ', protein: 3.7, fat: 3.5, carbs: 7.6, calories: 76 },
  { chain: 'サブウェイ', name: 'ゴロゴロ野菜のトマト&クラムスープ', protein: 3.2, fat: 1.1, carbs: 9.8, calories: 62 },
  { chain: 'サブウェイ', name: '濃厚カントリーコーンスープ', protein: 4.6, fat: 4.0, carbs: 17.6, calories: 124 },
  
  // ソーセージサブ
  { chain: 'サブウェイ', name: 'ソーセージサブ サルサ', protein: 13.2, fat: 16.0, carbs: 37.3, calories: 343 },
  { chain: 'サブウェイ', name: 'ソーセージサブ チーズ', protein: 14.7, fat: 22.1, carbs: 36.6, calories: 401 },
  { chain: 'サブウェイ', name: 'ソーセージサブ プレーン', protein: 13.2, fat: 16.0, carbs: 38.2, calories: 346 },

  // 限定店舗 サンドイッチ
  { chain: 'サブウェイ', name: '牛カルビチーズ (限定店舗)', protein: 18.2, fat: 23.9, carbs: 47.6, calories: 471 },
  { chain: 'サブウェイ', name: 'シーフードグラタン (限定店舗)', protein: 18.1, fat: 20.0, carbs: 43.7, calories: 423 },

  // 限定店舗 モーニング
  { chain: 'サブウェイ', name: 'とろ〜りたまご&チーズ (モーニング)', protein: 7.0, fat: 9.0, carbs: 20.2, calories: 189 },
  { chain: 'サブウェイ', name: 'とろ〜りたまご&ハム (モーニング)', protein: 7.2, fat: 8.0, carbs: 20.7, calories: 182 },
  { chain: 'サブウェイ', name: 'チーズトースト (モーニング)', protein: 4.9, fat: 3.1, carbs: 17.2, calories: 114 },
  
  // Uber Eats限定 サンドイッチ
  { chain: 'サブウェイ', name: 'アボカドローストビーフ (Uber Eats限定)', protein: 16.9, fat: 15.6, carbs: 44.0, calories: 382 },
  { chain: 'サブウェイ', name: 'えび・生ハム&マスカルポーネ (Uber Eats限定)', protein: 19.0, fat: 11.3, carbs: 42.3, calories: 342 },
  { chain: 'サブウェイ', name: '【辛】えびたまベーコン (Uber Eats限定)', protein: 14.8, fat: 18.8, carbs: 38.3, calories: 379 },

  // キッズセット (サンドイッチ部分のみ)
  { chain: 'サブウェイ', name: 'キッズセット ツナサンド', protein: 7.4, fat: 6.8, carbs: 21.5, calories: 174 },
  { chain: 'サブウェイ', name: 'キッズセット たまごサンド', protein: 6.3, fat: 6.6, carbs: 22.1, calories: 171 },
  { chain: 'サブウェイ', name: 'キッズセット てり焼きチキンサンド', protein: 10.3, fat: 5.3, carbs: 25.4, calories: 188 }
];

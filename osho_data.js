// ohsho_data.js
// データは fatsecret.jp および類似の栄養情報サイトより抽出 (非公式情報も含む点に注意)
// PFCの記載がない、またはカロリーのみのメニューも存在します。

const ohshoMenuData = [
  // 定番・人気メニュー (fatsecret.jp および類似サイトの情報に基づく推定値を含む)
  { chain: '餃子の王将', name: '焼餃子 (6個)', protein: 10.8, fat: 18.7, carbs: 25.9, calories: 336 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: 'ニラレバ炒め', protein: 19.5, fat: 28.1, carbs: 15.3, calories: 392 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '酢豚', protein: 13.5, fat: 25.0, carbs: 38.2, calories: 432 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '炒飯 (チャーハン)', protein: 16.5, fat: 23.0, carbs: 85.0, calories: 613 }, // 数値はfatsecret.jpの代表的なエントリより (店舗により差が大きい可能性あり)
  { chain: '餃子の王将', name: '天津飯', protein: 18.9, fat: 17.8, carbs: 98.5, calories: 630 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '中華飯', protein: 15.2, fat: 13.5, carbs: 75.8, calories: 482 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '麻婆豆腐', protein: 16.8, fat: 22.5, carbs: 14.5, calories: 328 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '回鍋肉 (ホイコーロー)', protein: 14.8, fat: 33.2, carbs: 18.3, calories: 421 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '鶏の唐揚', protein: 30.2, fat: 25.8, carbs: 15.1, calories: 414 }, // 数値はfatsecret.jpの代表的なエントリより (個数により変動)
  { chain: '餃子の王将', name: 'エビのチリソース', protein: 12.5, fat: 15.3, carbs: 28.5, calories: 302 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '野菜炒め', protein: 7.5, fat: 10.2, carbs: 12.3, calories: 171 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '揚げそば', protein: 10.3, fat: 33.8, carbs: 65.2, calories: 606 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '王将ラーメン', protein: 20.5, fat: 15.2, carbs: 68.3, calories: 492 }, // 数値はfatsecret.jpの代表的なエントリより
  { chain: '餃子の王将', name: '醤油ラーメン', protein: 18.2, fat: 8.5, carbs: 60.1, calories: 390 }, // 数値はfatsecret.jpの代表的なエントリより (店舗により異なる名称・内容の可能性あり)
  { chain: '餃子の王将', name: 'ライス (中)', protein: 5.0, fat: 0.6, carbs: 70.0, calories: 300 }, // 一般的な中ライスの推定値
  
  // カロリーのみ判明している、またはPFCの信頼性が低いメニュー（参考）
  { chain: '餃子の王将', name: 'こってりラーメン', protein: null, fat: null, carbs: null, calories: 699 }, // カロリーはfatsecret.jpより、PFC不明
  { chain: '餃子の王将', name: '味噌ラーメン', protein: null, fat: null, carbs: null, calories: 580 }, // カロリーはfatsecret.jpより、PFC不明
  { chain: '餃子の王将', name: '春巻 (2本)', protein: null, fat: null, carbs: null, calories: 280 } // カロリーはfatsecret.jpより、PFC不明
];

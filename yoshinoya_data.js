const yoshinoyaMenuData = [
  // --- 吉野家（yoshinoya20250601.pdf）全メニュー ---

  // 牛丼
  { chain: '吉野家', name: '牛丼小盛', protein: 15.4, fat: 19.6, carbs: 60.9, calories: 474 },
  { chain: '吉野家', name: '牛丼並盛', protein: 19.6, fat: 23.6, carbs: 88.2, calories: 633 },
  { chain: '吉野家', name: '牛丼アタマの大盛', protein: 23.0, fat: 28.8, carbs: 96.6, calories: 725 },
  { chain: '吉野家', name: '牛丼大盛', protein: 24.8, fat: 29.0, carbs: 119.5, calories: 823 },
  { chain: '吉野家', name: '牛丼特盛', protein: 33.5, fat: 44.2, carbs: 122.3, calories: 1006 },
  { chain: '吉野家', name: '牛丼超特盛', protein: 40.8, fat: 56.9, carbs: 124.6, calories: 1159 },

  // 豚丼
  { chain: '吉野家', name: '豚丼小盛', protein: 10.9, fat: 15.4, carbs: 60.1, calories: 423 },
  { chain: '吉野家', name: '豚丼並盛', protein: 14.4, fat: 18.6, carbs: 88.1, calories: 576 },
  { chain: '吉野家', name: '豚丼アタマの大盛', protein: 16.6, fat: 22.6, carbs: 96.1, calories: 654 },
  { chain: '吉野家', name: '豚丼大盛', protein: 18.6, fat: 22.8, carbs: 120.0, calories: 756 },
  { chain: '吉野家', name: '豚丼特盛', protein: 25.3, fat: 36.7, carbs: 124.4, calories: 933 },
  { chain: '吉野家', name: '豚丼超特盛', protein: 29.7, fat: 44.7, carbs: 128.7, calories: 1044 },

  // ねぎ塩豚丼
  { chain: '吉野家', name: 'ねぎ塩豚丼小盛', protein: 11.0, fat: 17.1, carbs: 62.7, calories: 448 },
  { chain: '吉野家', name: 'ねぎ塩豚丼並盛', protein: 14.2, fat: 20.6, carbs: 90.0, calories: 599 },
  { chain: '吉野家', name: 'ねぎ塩豚丼アタマの大盛', protein: 16.5, fat: 24.9, carbs: 99.0, calories: 684 },
  { chain: '吉野家', name: 'ねぎ塩豚丼大盛', protein: 17.9, fat: 24.3, carbs: 121.0, calories: 769 },
  { chain: '吉野家', name: 'ねぎ塩豚丼特盛', protein: 24.6, fat: 40.2, carbs: 127.1, calories: 971 },
  { chain: '吉野家', name: 'ねぎ塩豚丼超特盛', protein: 28.3, fat: 48.7, carbs: 130.1, calories: 1079 },

  // 牛カルビ丼（成型肉）
  { chain: '吉野家', name: '牛カルビ丼(成型肉)小盛', protein: 17.9, fat: 26.2, carbs: 60.7, calories: 548 },
  { chain: '吉野家', name: '牛カルビ丼(成型肉)並盛', protein: 22.6, fat: 31.8, carbs: 87.6, calories: 722 },
  { chain: '吉野家', name: '牛カルビ丼(成型肉)アタマの大盛', protein: 28.5, fat: 41.7, carbs: 96.1, calories: 871 },
  { chain: '吉野家', name: '牛カルビ丼(成型肉)大盛', protein: 30.0, fat: 41.9, carbs: 118.3, calories: 964 },
  { chain: '吉野家', name: '牛カルビ丼(成型肉)特盛', protein: 41.3, fat: 62.6, carbs: 122.3, calories: 1216 },
  { chain: '吉野家', name: '牛カルビ丼(成型肉)超特盛', protein: 49.5, fat: 77.6, carbs: 124.3, calories: 1396 },

  // 牛ねぎ玉丼
  { chain: '吉野家', name: '牛ねぎ玉丼小盛', protein: 21.6, fat: 20.7, carbs: 63.7, calories: 518 },
  { chain: '吉野家', name: '牛ねぎ玉丼並盛', protein: 25.4, fat: 25.3, carbs: 90.3, calories: 670 },
  { chain: '吉野家', name: '牛ねぎ玉丼アタマの大盛', protein: 28.5, fat: 29.5, carbs: 97.7, calories: 752 },
  { chain: '吉野家', name: '牛ねぎ玉丼大盛', protein: 29.8, fat: 29.7, carbs: 119.8, calories: 820 },
  { chain: '吉野家', name: '牛ねぎ玉丼特盛', protein: 38.9, fat: 44.9, carbs: 122.6, calories: 996 },
  { chain: '吉野家', name: '牛ねぎ玉丼超特盛', protein: 46.2, fat: 56.3, carbs: 124.9, calories: 1129 },

  // 牛丼ファミリーサイズ
  { chain: '吉野家', name: '牛丼ファミリーパック（1kg）', protein: 77.3, fat: 95.3, carbs: 335.6, calories: 2540 },

  // 親子丼
  { chain: '吉野家', name: '親子丼並盛', protein: 29.5, fat: 19.3, carbs: 101.7, calories: 695 },
  { chain: '吉野家', name: '親子丼大盛', protein: 40.1, fat: 27.0, carbs: 131.3, calories: 922 },

  // から揚げ丼
  { chain: '吉野家', name: 'から揚げ丼並盛', protein: 31.9, fat: 44.0, carbs: 104.5, calories: 943 },

  // カレー
  { chain: '吉野家', name: '黒カレー並盛', protein: 8.2, fat: 6.4, carbs: 100.5, calories: 480 },
  { chain: '吉野家', name: '牛黒カレー並盛', protein: 15.0, fat: 17.9, carbs: 103.3, calories: 622 },

  // 定食（例。定食系も種類多いので主要代表を抜粋。要望があれば全量分詳細記載可能）
  { chain: '吉野家', name: '牛皿定食', protein: 25.2, fat: 23.0, carbs: 70.0, calories: 593 },
  { chain: '吉野家', name: '牛鮭定食', protein: 30.6, fat: 17.6, carbs: 80.1, calories: 630 },
  { chain: '吉野家', name: '納豆定食', protein: 19.3, fat: 10.0, carbs: 96.3, calories: 537 },
  { chain: '吉野家', name: '朝定食', protein: 18.5, fat: 10.8, carbs: 75.6, calories: 496 },
  { chain: '吉野家', name: 'ハムエッグ納豆定食', protein: 27.7, fat: 21.3, carbs: 85.1, calories: 720 },

  // サイド
  { chain: '吉野家', name: 'みそ汁', protein: 1.5, fat: 0.8, carbs: 3.5, calories: 22 },
  { chain: '吉野家', name: 'ごはん小盛', protein: 2.8, fat: 0.2, carbs: 33.2, calories: 139 },
  { chain: '吉野家', name: 'ごはん並盛', protein: 4.5, fat: 0.4, carbs: 55.7, calories: 235 },
  { chain: '吉野家', name: 'ごはん大盛', protein: 7.7, fat: 0.7, carbs: 96.5, calories: 403 },
  { chain: '吉野家', name: 'ごはん超特盛', protein: 12.9, fat: 1.2, carbs: 161.7, calories: 670 },
  { chain: '吉野家', name: 'お新香', protein: 0.7, fat: 0.1, carbs: 3.2, calories: 13 },
  { chain: '吉野家', name: 'サラダ', protein: 0.8, fat: 0.1, carbs: 5.0, calories: 20 },
  { chain: '吉野家', name: '半熟玉子', protein: 5.8, fat: 5.3, carbs: 0.2, calories: 73 },
  { chain: '吉野家', name: '生たまご', protein: 5.8, fat: 4.6, carbs: 0.2, calories: 68 },
  { chain: '吉野家', name: '納豆', protein: 6.7, fat: 3.6, carbs: 5.4, calories: 93 },

  // お子様
  { chain: '吉野家', name: 'お子様牛丼セット', protein: 11.8, fat: 16.1, carbs: 63.3, calories: 430 },
  { chain: '吉野家', name: 'お子様カレーセット', protein: 8.1, fat: 11.4, carbs: 70.2, calories: 393 },

  // 地域限定・期間限定（例）
  // 必要なら追記、またはmsearchで地域限定名を全て抽出可能

  // --- さらに抜けがあればご指摘ください！ ---
];

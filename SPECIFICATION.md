# Kids Activity Finder 仕様書

## 1. システム概要

### 1.1 目的
Kids Activity Finderは、子供の習い事診断を行うウェブアプリケーションです。性格分析と適性診断を通じて、0歳から18歳までの子供に最適な習い事を提案します。100種類以上の習い事から、お子様の性格や興味に合わせた最適な選択肢をご提案します。

### 1.2 対象ユーザー
- 0歳から18歳までの子供を持つ保護者
- 子供の習い事を探している保護者
- 子供の適性や興味に基づいた習い事を探したい方
- 習い事の選択に悩んでいる保護者

## 2. 機能要件

### 2.1 診断機能
#### 2.1.1 基本診断
- 性格分析（6段階の質問）
- 適性診断
- 進捗状況の表示（プログレスバー）
- 診断結果の保存

#### 2.1.2 結果表示
- 性格分析結果の表示
- カテゴリ別適性チャートの表示
- 100種類以上の習い事から最適な選択肢を提案
- カテゴリ別TOP3の表示
- 詳細な理由説明

### 2.2 ユーザーインターフェース
#### 2.2.1 画面構成
- ウェルカム画面
  - アプリケーションの説明
  - 所要時間の表示（約3分）
  - 診断開始ボタン
  - 特徴説明（100種類から適性マッチング、カテゴリ別詳細レポート）
- 質問画面
  - 質問文の表示
  - 選択肢の表示
  - 進捗状況の表示
  - 前へ/次へボタン
- ローディング画面
  - ローディングスピナー
  - 処理状況の表示
  - アニメーション効果
- 結果画面
  - 性格分析結果
  - 適性チャート
  - カテゴリ別TOP3
  - 詳細な説明

#### 2.2.2 UI要素
- プログレスバー
- アニメーション効果
- レスポンシブデザイン
- アイコン表示（Font Awesome）
- カード型レイアウト
- グラデーション背景

## 3. 非機能要件

### 3.1 パフォーマンス
- ページロード時間：2秒以内
- 診断結果表示：3秒以内
- スムーズな画面遷移
- アニメーションの滑らかな動作

### 3.2 セキュリティ
- SSL/TLS暗号化通信
- 診断結果の安全な保存
- プライバシーポリシーの遵守
- Google Tag Managerによる適切なトラッキング

### 3.3 可用性
- モバイル対応（レスポンシブデザイン）
- オフライン対応（PWA）
- クロスブラウザ対応
- アクセシビリティ対応

## 4. 技術要件

### 4.1 フロントエンド
- HTML5
- CSS3（Tailwind CSS）
- JavaScript
- Chart.js（グラフ表示）
- Font Awesome（アイコン）
- Progressive Web App（PWA）対応

### 4.2 外部サービス
- Google Tag Manager
- Google Analytics
- CDN（jsdelivr）によるライブラリ配信

## 5. デザイン仕様

### 5.1 カラースキーム
- メインカラー：グラデーション（#667eea から #764ba2）
- アクセントカラー：青（#6366f1）
- 背景色：薄いグレー（#f8fafc）
- テキストカラー：濃いグレー（#1f2937）
- カード背景：白（#ffffff）

### 5.2 タイポグラフィ
- フォントファミリー：システムフォント
- 見出し：太字
- 本文：通常
- アイコン：Font Awesome

### 5.3 アニメーション
- フェードイン効果
- ホバーエフェクト
- ローディングアニメーション
- カードホバーエフェクト

## 6. 運用・保守

### 6.1 監視
- Google Analyticsによるアクセス解析
- エラーログの監視
- パフォーマンスモニタリング

### 6.2 バックアップ
- 診断結果のバックアップ
- 設定ファイルのバックアップ
- 静的ファイルのバックアップ

### 6.3 セキュリティ
- 定期的なセキュリティチェック
- 脆弱性スキャン
- プライバシーポリシーの更新
- ライブラリのバージョン管理

## 7. 実装済みおすすめ教室リスト
以下はアプリに実装されている代表的なおすすめ教室の一覧です。
1. コナミスポーツクラブ ベビースイミング: <https://www.konami.com/sportsclub/child/>
2. ベビーマッサージ教室 momo: <https://babymassage-momo.com/>
3. ヒューマンアカデミー ロボット教室: <https://kids.athuman.com/robot/>
4. 日本ベビーヨガ協会: <https://babyyoga.jp/>
5. デジタルハリウッド スクール: <https://school.dhw.co.jp/>
6. JACPA 幼児体操教室: <https://www.jacpa.co.jp/>
7. ベビーパーク: <https://babypark.jp/>
8. Cookpad Do! 親子料理教室: <https://cookpad.do/>
9. SecHack365: <https://sechack365.nict.go.jp/>
10. SIGNATE Quest: <https://quest.signate.jp/>
11. 日本シュタイナー学校協会: <https://www.waldorf.or.jp/>
12. 森のようちえん全国ネットワーク: <https://morinoyouchien.org/>
13. QUREO（キュレオ）プログラミング教室: <https://qureo.jp/>
14. eスポーツアカデミー: <https://esports-academy.jp/>
15. ドローンスクールジャパン: <https://drone-school-japan.com/>
16. 動画クリエイターズアカデミー: <https://vca.tokyo/>
17. Unityゲームクリエイター講座: <https://unity.com/>
18. VCAスクール: <https://vca.tokyo/>
19. Tinkercad: <https://www.tinkercad.com/>
20. デジハリONLINE: <https://online.dhw.co.jp/>
21. セキュリティ・キャンプ: <https://www.security-camp.or.jp/>
22. Makeblock STEM Center: <https://www.makeblock.com/>
23. DMM.make 3Dプリント教室: <https://make.dmm.com/>
24. Blockchain Academy: <https://blockchainacademy.jp/>
25. Googleデジタルワークショップ: <https://learndigital.withgoogle.com/digitalworkshop-jp>
26. TechAcademy: <https://techacademy.jp/>
27. StartupWeekend: <https://nposw.org/>
28. リベルタサッカースクール: <https://liberta-sports.com/>
29. コナミスポーツクラブ: <https://www.konami.com/sportsclub/>
30. ボーイズリーグ: <https://www.boysleague-jp.org/>
31. 日本テニス協会公認スクール: <https://www.jta-tennis.or.jp/>
32. バスケットボール協会クラブ: <https://www.japanbasketball.jp/>
33. Tokyo Parkour Academy: <https://parkour.tokyo/>
34. B-PUMP クライミングジム: <https://www.b-pump.com/>
35. ムラサキスポーツ スケートスクール: <https://www.murasaki.co.jp/>
36. NSA日本サーフィン連盟: <https://www.nsa-surf.org/>
37. JBMXF公認スクール: <https://www.jbmxa.com/>
38. 講道館柔道 認定道場: <https://kodokanjudoinstitute.org/>
39. 全日本剣道連盟 公認道場: <https://www.kendo.or.jp/>
40. 全日本空手道連盟: <https://www.jkf.ne.jp/>
41. ヤマハ音楽教室: <https://school.jp.yamaha.com/music-school/>
42. スズキ・メソード バイオリン教室: <https://www.suzukimethod.or.jp/>
43. ヤマハ音楽教室 ギターコース: <https://school.jp.yamaha.com/music-school/guitar/>
44. Tech Kids School: <https://techkidsschool.jp/>
45. ECCジュニア: <https://www.eccjr.co.jp/>
46. 日本珠算連盟: <https://www.soroban.or.jp/>
47. アトリエ・エトワール: <https://www.atelier-etoile.com/>
48. 陶芸工房 陶芸教室: <https://www.tougei-kobo.com/>
49. 東京写真学園: <https://www.tpa-japan.com/>
50. チャコット・カルチャースタジオ: <https://www.chacott-jp.com/>
51. EXPG STUDIO: <https://expg.jp/>
52. 劇団ひまわり: <https://himawari.net/>
53. マジック教室 MagicLand: <https://www.magicland.jp/>
54. 表千家茶道教室: <https://www.omotesenke.jp/>
55. 日本棋院 囲碁教室: <https://www.nihonkiin.or.jp/>
56. 日本将棋連盟 子供教室: <https://www.shogi.or.jp/>
57. ABC Cooking Studio キッズ: <https://www.abc-cooking.co.jp/kids/>
58. 日本習字: <https://www.nihon-shuji.jp/>
59. 日本チェス連盟: <https://www.japanchess.org/>
60. スタジオ・ヨギー キッズヨガ: <https://www.studio-yoggy.com/>
61. 日本キャンプ協会: <https://www.camping.or.jp/>

## 8. おすすめ習い事リスト
1. ベビースイミング
2. ベビーマッサージ
3. ベビー英語
4. ベビーヨガ
5. ベビーリトミック
6. 幼児体操
7. 感覚遊び教室
8. 親子クッキング
9. 幼児STEM教育
10. モンテッソーリ教育
11. シュタイナー教育
12. 森のようちえん
13. キッズプログラミング
14. ロボット製作・AI
15. eスポーツ
16. ドローン操縦
17. YouTuber・動画制作
18. ゲーム開発
19. VR・AR制作
20. 3Dモデリング
21. デジタルアート・NFT
22. サイバーセキュリティ
23. キッズデータサイエンス
24. IoT・電子工作
25. 3Dプリンティング
26. ブロックチェーン入門
27. SNS・メディアリテラシー
28. デジタルマーケティング
29. 起業・ビジネス創造
30. サッカー
31. 水泳
32. 野球
33. テニス
34. バスケットボール
35. パルクール
36. ボルダリング・クライミング
37. スケートボード
38. サーフィン
39. BMX
40. 柔道
41. 剣道
42. 空手
43. ピアノ
44. バイオリン
45. ギター
46. プログラミング
47. 英会話
48. そろばん
49. 絵画教室
50. 陶芸
51. 写真教室
52. バレエ
53. ヒップホップダンス
54. 演劇
55. マジック
56. 茶道
57. 囲碁
58. 将棋
59. 料理教室
60. 書道
61. チェス
62. キッズヨガ
63. アウトドアキャンプ

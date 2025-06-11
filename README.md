# Kids Activity Finder

## プロジェクト概要
Kids Activity Finderは、子供の習い事診断を行うウェブアプリケーションです。性格分析と適性診断を通じて、0歳から18歳までの子供に最適な習い事を提案します。100種類以上の習い事から、お子様の性格や興味に合わせた最適な選択肢をご提案します。

## 主な機能
- 性格分析と適性診断（6段階の質問）
- 100種類以上の習い事から最適な選択肢を提案
- カテゴリ別の詳細レポート
- 適性チャートによる視覚的な分析
- 診断結果の保存機能

## 技術スタック
- HTML5
- CSS3（Tailwind CSS）
- JavaScript
- Chart.js（グラフ表示）
- Font Awesome（アイコン）
- Progressive Web App（PWA）対応
- Google Analytics（アクセス解析）

## プロジェクト構造
```
kids-activity-finder/
├── index.html          # メインページ（診断アプリケーション）
├── contact.html        # お問い合わせページ
├── disclaimer.html     # 免責事項
├── privacy-policy.html # プライバシーポリシー
├── manifest.json       # PWA設定ファイル
├── sw.js              # Service Worker
├── robots.txt         # クローラー設定
├── sitemap.xml        # サイトマップ
└── assets/            # 静的ファイル（画像、CSS、JS等）
```

## セットアップ方法
1. リポジトリをクローン
```bash
git clone https://github.com/appadaycreator/kids-activity-finder.git
```

2. プロジェクトディレクトリに移動
```bash
cd kids-activity-finder
```

3. ローカルサーバーで実行
```bash
# 任意のローカルサーバーを使用
python -m http.server 8000
```

## 開発ガイドライン
- コードの品質を保つため、ESLintを使用
- コミットメッセージは明確に記述
- プルリクエストは必ずレビューを受ける

## ライセンス
このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 貢献方法
1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## お問い合わせ
ご質問やご提案がある場合は、[お問い合わせフォーム](contact.html)からお気軽にご連絡ください。

## 更新履歴
- 2024/03/xx: プロジェクト初期化
- 2024/03/xx: 100種類以上の習い事に対応
- 2024/03/xx: 0歳から18歳までの年齢対応
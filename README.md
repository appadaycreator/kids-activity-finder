# Kids Activity Finder

## プロジェクト概要
Kids Activity Finderは、子供向けのアクティビティを見つけるためのウェブアプリケーションです。親御さんが子供の年齢や興味に合わせて適切なアクティビティを探すことができるプラットフォームを提供します。

## 機能
- 年齢別アクティビティ検索
- カテゴリー別アクティビティ検索
- 地域別アクティビティ検索
- お気に入りアクティビティの保存
- アクティビティの詳細情報表示

## 技術スタック
- HTML5
- CSS3
- JavaScript
- Progressive Web App (PWA)対応
- Service Workerによるオフライン対応

## プロジェクト構造
```
kids-activity-finder/
├── index.html          # メインページ
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
git clone https://github.com/yourusername/kids-activity-finder.git
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
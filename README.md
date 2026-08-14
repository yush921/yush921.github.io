# yush921 Portfolio

GitHub Pages で公開する個人ポートフォリオサイトです。素のHTML/CSS/JSのみで構築されており、ビルド不要です。

## 構成

- `index.html` — ページ本体（About / Skills / Projects / Contact のセクション構成）
- `style.css` — スタイル（ライト/ダークテーマ対応）
- `script.js` — テーマ切り替え・モバイルメニューの制御
- `.github/workflows/deploy.yml` — `main` ブランチへの push で自動的に GitHub Pages に公開するワークフロー

## 公開設定（初回のみ）

1. GitHubのリポジトリ画面で **Settings → Pages** を開く
2. **Build and deployment → Source** を `GitHub Actions` に設定する
3. `main` ブランチに push すると `deploy.yml` が実行され、`https://yush921.github.io/pages.github.io/` で公開されます

## カスタマイズ

`index.html` 内のテキスト（自己紹介・スキル・プロジェクト・連絡先）を書き換えるだけで内容を更新できます。プロジェクトを追加する場合は `#projects` セクション内の `.project-card` をコピーして編集してください。

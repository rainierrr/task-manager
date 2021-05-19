# task-manager
## 概要
勉強のために作成したタスク管理WEBアプケーション
映像
![image](https://user-images.githubusercontent.com/49901874/118800792-4337a180-b8db-11eb-8f51-536abb0b26a9.png)
## 利用技術
- React (Hooks)
- Typescript
- Materal-UI
- Docker

## 開発した機能
- カテゴリー入力
- タスク名入力
- 期限入力
- 優先度入力

## 環境構築方法
1. Dockerとdocker-composeのインストール

2. イメージビルド
```
docker-compose build
```

3.　コンテナ作成
```
docker-compose up -d
```
4. コンテナの起動確認
```
docker-compose ps
```

5. ポートフォリオサイトにアクセス
localhost:3000にアクセスしてください。


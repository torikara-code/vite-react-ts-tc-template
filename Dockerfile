FROM node:20-slim

# ワーキングディレクトリの指定
WORKDIR /usr/src/app

#パッケージをコピー
COPY package.json package-lock.json ./

#nodeモジュールのインストール
RUN npm install

COPY . .

# コンテナがリッスンするポートを明示的に公開
EXPOSE 5173

# コンテナ起動時に開発サーバーを実行
CMD ["npm" , "run" , "dev"]
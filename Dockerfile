# ベースイメージとしてNode.jsのLTS版を使用
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ソースコードをコピー
COPY . .

# Next.jsのデフォルトポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
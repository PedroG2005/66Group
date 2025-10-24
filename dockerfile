# === Base Node Stage ===
# Use um estágio base para instalar pnpm uma vez
FROM node:20-alpine AS base
RUN npm install -g pnpm

# === Build Stage ===
FROM base AS build
WORKDIR /app
# Copie package.json, pnpm-lock.yaml E a pasta patches primeiro
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
# Instale dependências de produção e desenvolvimento
RUN pnpm install --frozen-lockfile
# Copie o restante do código
COPY . .
# Execute o build
RUN pnpm build

# === Production Stage ===
FROM base AS production
WORKDIR /app
# Copie package.json, pnpm-lock.yaml E a pasta patches
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
# Instale SOMENTE dependências de produção (o patch pode ser necessário mesmo para prod deps)
RUN pnpm install --prod --frozen-lockfile
# Copie os artefatos de build da fase anterior
COPY --from=build /app/dist ./dist
# Exponha a porta
EXPOSE 3000
# Comando para iniciar
CMD ["node", "dist/index.js"]

# === Development Stage ===
FROM base AS development
WORKDIR /app
# Copie package.json, pnpm-lock.yaml E a pasta patches primeiro
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
# Instale todas as dependências
RUN pnpm install --frozen-lockfile
# Copie o restante do código (necessário para pegar alterações além das dependências)
COPY . .
# Exponha a porta
EXPOSE 3000
# Comando padrão (será sobrescrito no docker-compose)
CMD ["pnpm", "dev"]
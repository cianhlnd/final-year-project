FROM node:alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json .
RUN npm install

FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3001
CMD ["npm", "start"]

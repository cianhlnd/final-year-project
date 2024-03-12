FROM node:alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json .
RUN npm install

FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM dev AS builder
COPY --from=deps /app/node_modules ./node_modules
ARG PUBLIC_URL
ARG REACT_APP_BACKEND
RUN npm run build

FROM nginx:stable-alpine AS runner
ARG PUBLIC_URL
COPY --from=builder /app/build /usr/share/nginx/html/${PUBLIC_URL}/
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

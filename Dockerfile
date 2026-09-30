FROM node:22-alpine

WORKDIR /app

# Install git and required native build tools if needed
RUN apk add --no-cache git

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4173

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4173

CMD ["node", "server.mjs"]

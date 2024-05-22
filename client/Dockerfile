# Stage 1: Build the Angular application (uses Node.js)
FROM node:18-alpine AS builder

WORKDIR /app/client

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

WORKDIR /app

# Copy static files from Angular build
COPY --from=builder /app/client/dist/client/browser /usr/share/nginx/html

# Configure Nginx to serve Angular app and forward API requests
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
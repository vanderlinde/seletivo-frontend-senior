FROM node:22-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/seplag-frontend-2025/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
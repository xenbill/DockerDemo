FROM node:16.17.0-alpine as build-react
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-react /app/dist /usr/share/nginx/html

EXPOSE 80
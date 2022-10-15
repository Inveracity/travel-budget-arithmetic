FROM node:18-alpine AS build

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./build
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

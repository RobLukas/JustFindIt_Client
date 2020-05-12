# build environment
FROM node:10.13-alpine as build
ENV CI=true
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
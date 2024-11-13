FROM node:lts-alpine as build
WORKDIR /app
COPY *.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build:prod
FROM nginx:latest
COPY --from=build /app/dist/talentsbase.client/* /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

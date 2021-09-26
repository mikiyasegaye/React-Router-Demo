FROM node:alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn --verbose

COPY . ./

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV PATH /app/node_modules/.bin:$PATH   

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN apk --no-cache add curl

HEALTHCHECK CMD curl --fail http://localhost:80 || exit 1  

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
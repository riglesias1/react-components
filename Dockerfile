FROM node:16.13.1-alpine as build

WORKDIR /app
COPY ./ ./

RUN rm -rf node_modules && rm -rf yarn.lock
RUN yarn config set registry https://registry.npmjs.org
RUN yarn install --network-timeout 1000000

CMD ["yarn", "storybook"]
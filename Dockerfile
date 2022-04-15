FROM node:16.14.0

WORKDIR /app/polygon-etherenum-nextjs-marketplace

COPY ./ ./

RUN npm install yarn

RUN yarn

CMD ["yarn", "dev"]
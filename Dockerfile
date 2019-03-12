FROM node:8-alpine as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:8-alpine as release
WORKDIR /usr/app
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
COPY --from=builder /usr/app /usr/app
EXPOSE 3000
CMD ["node", "index.js"]
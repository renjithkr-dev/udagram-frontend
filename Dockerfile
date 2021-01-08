FROM node:10.23.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN ["npm","install"]
COPY . .
RUN npm run build
EXPOSE 8100/tcp
CMD ["npm","start"]
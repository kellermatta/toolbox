FROM node:12
WORKDIR /usr/src/app2
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD [ "node", "main.js" ]
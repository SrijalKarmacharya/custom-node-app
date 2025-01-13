FROM node:latest
WORKDIR /app

COPY package*.json /app

# Install dependencies
RUN npm install

COPY . .
CMD [ "node", "index.js" ]
EXPOSE 5000
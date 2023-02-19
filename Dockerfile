FROM node:16.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# take 5 minutes
RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:prod"]

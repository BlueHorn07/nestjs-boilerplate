# Buile Step
FROM node:16.13-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# take 5 minutes
RUN npm ci --ignore-scripts

COPY . .

RUN npm run build


# Run Step
FROM node:16.13-alpine AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

EXPOSE 4000

CMD ["npm", "run", "start:prod"]

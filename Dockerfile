FROM node:alpine
WORKDIR /usr/src/api/chess

COPY package*.json ./
RUN npm i
COPY . .

ENV PORT 3001
EXPOSE 3001

CMD ["npm", "run", "dev"]
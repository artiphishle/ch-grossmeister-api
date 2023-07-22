#
# api-chess
#
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/api/chess

# copy the package.json files from local machine to the workdir in container
# & copy the generated modules and all other files to the container
COPY package*.json ./
RUN npm install
COPY . .

# our app is running on port 3001 within the container, so need to expose it
EXPOSE 3001

# CMD ["npm", "start"]
RUN npm start
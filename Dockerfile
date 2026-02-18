# base image
FROM node:18

# working directory
WORKDIR /app

# copy files
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest files
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["node", "server.js"]
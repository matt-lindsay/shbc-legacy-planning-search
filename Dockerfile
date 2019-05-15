# Use nodejs LTS source
FROM node:8

# Create app directory
#RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./ 
#COPY bower.json /usr/src/app/

RUN npm install

# Bundle app source
#COPY . /usr/src/app
COPY . .

EXPOSE 8080
CMD ["npm", "start" ]

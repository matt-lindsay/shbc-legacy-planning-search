# Use nodejs LTS source
FROM node:8

# Add envrionment variables
ENV ACCESSTOKEN ****
ENV addressPath ****
ENV CLIENTID ****
ENV CLIENTSECRET ****
ENV fmeApi ****
ENV fmePath ****
ENV historyCardPath ****
ENV shApi ****
ENV PORT ****

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

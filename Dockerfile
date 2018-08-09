# Use nodejs LTS source
FROM node:boron

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
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#RUN npm install
#RUN npm install --only=production

# Install app dependencies
COPY package.json /usr/src/app/
#COPY bower.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app
#COPY . .

EXPOSE 8080
CMD ["npm", "start" ]

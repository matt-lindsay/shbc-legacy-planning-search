# Use nodejs LTS source
FROM node:argon

# Add envrionment variables
ENV addressPath ****
ENV fmeApi ****
ENV fmePath ****
ENV historyCardPath ****
ENV shApi ****
ENV PORT ****

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app

EXPOSE PORT
CMD ["npm", "start" ]
# Use nodejs LTS source
FROM node:boron

# Add envrionment variables
ENV container_path /path/to/app
ENV addressPath ****
ENV fmeApi ****
ENV fmePath ****
ENV historyCardPath ****
ENV shApi ****

# Create app directory
#RUN mkdir -p container_path
WORKDIR container_path

# Install app dependencies
#COPY package.json container_path + '/'
RUN npm install

# Bundle app source
COPY . container_path

EXPOSE 8080
CMD ["npm", "start" ]
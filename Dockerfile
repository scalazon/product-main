FROM node:12

# Create App directory

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production

COPY . .

ENV NODE_ENV=production
ENV PORT=5000
ENV DBURI=mongodb://ec2-54-159-99-153.compute-1.amazonaws.com:27017/productMain

EXPOSE 5000
CMD [ "npm", "run", "start" ]
# Step 1: Build the React application
FROM node:alpine as build
WORKDIR /app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 80 for node, and 9229 and 9230 (tests) for debug
ARG PORT=80
ENV PORT $PORT


# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

COPY . /app

CMD ["npm", "start"]
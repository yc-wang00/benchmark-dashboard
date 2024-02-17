# Step 1: Build the React application
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

ARG REACT_APP_BACKEND_HOST 
ARG REACT_APP_BACKEND_PORT

ENV REACT_APP_BACKEND_HOST ${REACT_APP_BACKEND_HOST}
ENV REACT_APP_BACKEND_PORT ${REACT_APP_BACKEND_PORT}

# RUN echo "REACT_APP_BACKEND_HOST=${REACT_APP_BACKEND_HOST}"
# RUN echo "REACT_APP_BACKEND_PORT=${REACT_APP_BACKEND_PORT}"

RUN npm run build

# Step 2: Serve the build using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
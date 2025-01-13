# Use an official Node.js image for building the app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application source
COPY . .

# Build the application
RUN npm run build

# Use an Nginx image to serve the frontend
FROM nginx:alpine

# Copy built files to the Nginx default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

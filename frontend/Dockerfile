# # Use an official Node.js image for building the app
# FROM node:18 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the application source
# COPY . .

# # Build the application
# RUN npm run build

# # Use an Nginx image to serve the frontend
# FROM nginx:alpine

# # Copy built files to the Nginx default public directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


# Use Node.js for building the React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Add an entrypoint script to inject environment variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]


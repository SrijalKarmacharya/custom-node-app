# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source
COPY . .

# Expose the login service port
EXPOSE 4001

# Start the login service
CMD ["npm", "start"]

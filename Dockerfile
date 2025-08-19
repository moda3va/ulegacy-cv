# Use official Node.js image as base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port Vite uses by default (3000)
EXPOSE 3000

# Run the Vite development server (or build for production as needed)
CMD ["npm", "run", "dev"]

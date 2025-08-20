# Use Node 23 Alpine version
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install global dependencies (including Vite)
RUN npm install -g vite

# Clean install of project dependencies (including devDependencies)
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app for production
RUN npm run build

# # Remove devDependencies to reduce image size
# RUN npm prune --production

# Expose the port Vite will run on (default is 3000)
EXPOSE 8080

# Run the Vite app in production mode (serve the built assets)
CMD ["npm", "run", "preview"]

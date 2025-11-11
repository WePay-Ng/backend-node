# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/wepay-app

# Install OS dependencies required for node-gyp and Docker CLI (if needed)
RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package*.json ./

# Install dependencies (omit dev dependencies for production)
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

# Expose the internal app port
EXPOSE 8000

# Start the server
CMD ["npm", "run", "dev"]

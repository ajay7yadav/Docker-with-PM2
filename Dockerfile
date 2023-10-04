# Use the official Node.js image
FROM node:16.15.0

# Set the working directory
WORKDIR /service

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app listens on
EXPOSE 3303

# Start the Node.js application with PM2
CMD ["pm2-runtime", "start", "pm2.config.js"]

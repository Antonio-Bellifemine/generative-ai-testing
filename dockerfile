# pull

# Use the official Node.js image from the Docker Hub
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project directory to the working directory, except for files specified in .dockerignore
COPY . .

# Install the dependencies
RUN npm install

CMD ["tail", "-f", "/dev/null"]
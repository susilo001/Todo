FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

# Copy the entrypoint script into the container
COPY entrypoint.sh /entrypoint.sh

# Give execute permission to the entrypoint script
RUN chmod +x /entrypoint.sh

EXPOSE 3030

# Use the entrypoint script as the command to run when the container starts
CMD ["/entrypoint.sh"]
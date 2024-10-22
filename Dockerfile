# Use the official Nginx image as the base image
FROM nginx:alpine

# Set up environment variables
ENV EN_PORT=3033
ENV FR_PORT=3034
ENV ROOT_PORT=3035

# Install git to clone the repo
RUN apk add --no-cache git

# Clone the repository and check out the gh-pages branch
RUN git clone --branch gh-pages https://github.com/makhosi6/flexiipay.git /usr/share/nginx/html

# Create separate server blocks for each path
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose the required ports
EXPOSE 3033 3034 3035

CMD ["nginx", "-g", "daemon off;"]
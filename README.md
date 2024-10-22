### build

Steps to build and run the Docker container

1.	Build the Docker Image:
  You can build the Docker image using the following command:

  `docker build -t flexiipay:latest .`


2.	Run the Docker container:
  After building the Docker image, run the container using:

  `docker run -d -p 3033:3033 -p 3034:3034 -p 3035:3035 -p 3036:3036 flexiipay:latest`


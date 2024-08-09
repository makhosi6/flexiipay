#!/bin/bash


# delete outdate deployemnt dir
rm -fr dist dist.zip

# Create the dist directory if it doesn't exist
mkdir -p dist

# Copy the assets folder to the dist directory
cp -r assets dist/

# Copy all image files (.png, .ico, .jpg) to the dist directory
cp *.png *.ico *.jpg dist/

# Copy the specific HTML files to the dist directory
cp download.html index.html 404.html dist/

# Copy prod files
cp sitemap.xml robots.txt .htaccess dist/

# then zip the deployement dir
zip -r dist.zip dist/

echo "All files copied successfully to the dist/ directory."


#  chmod +x build.sh 
#  ./build.sh

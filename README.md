# Victics Catwalk

Welcome to the Victics Catwalk project! This project is all about bringing joy to people through a slideshow of random cat images. Everyone knows that looking at cute cat pictures can boost your mood, and this project aims to do just that.

## Features

- **Cat Slideshow**: Enjoy a continuous slideshow of random cat images sourced from a vast library of cat pictures.
- **Next Button**: Not satisfied with the current image? No problem! Just hit the 'Next' button to load another random image.

## API Reference

This project leverages the [The Cat API](https://thecatapi.com/) to fetch random cat images to present in the slideshow. Huge thanks to them for providing such a fantastic and easy-to-use API.

## Installation & Setup

To get started with this project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/patpatwithhat/victics-catwalk.git
```
2. Navigate to the project directory:
```
cd victics-catwalk
```
3. Add .env file with your api key from the [The Cat API](https://thecatapi.com/)

4a. Install the necessary packages and run:
```
npm init
node app.js
```

4b. Run with Docker:
```
docker build -t victics_catwalk .
docker run -d -p 8080:3000 cat-slideshow  
```

// Array of background image URLs
const images = [
    '01.jpg','02.jpg','03.jpg','04.jpg',
];

const imageContainer = document.querySelector('.background-image-container');

let currentImageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = `url(${images[currentImageIndex]})`;
    imageContainer.style.backgroundImage = imageUrl;
}

// Change the background image every 5 seconds (adjust as needed)
setInterval(changeBackgroundImage, 3000);

// Initialize with the first image
changeBackgroundImage();


//background img changing script finished............................


// Image sources for the slideshow
const images = [
    'Images/graduation chloe.jpg',
    'Images/mum bday3.jpeg',
    'Images/mumbday.jpeg',
    'Images/mumbday2.jpeg'
];

let currentImageIndex = 0;

// Function to change the image every 20 seconds
function changeImage() {
    const topImageElement = document.getElementById('top-slideshow-image');
    const bottomImageElement = document.getElementById('bottom-slideshow-image');

    // Update image sources
    currentImageIndex = (currentImageIndex + 1) % images.length;
    topImageElement.src = images[currentImageIndex];
    bottomImageElement.src = images[currentImageIndex];
}

// Set interval to change images every 20 seconds (20000 ms)
setInterval(changeImage, 30000);

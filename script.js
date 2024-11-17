// Image sources for the slideshow
const images = [
    'Images/graduation chloe.jpg',
    'Images/mum bday3.jpeg',
    'Images/mumbday.jpeg',
    'Images/mumbday2.jpeg'
];

let currentImageIndex = 0;

// Function to change the image every 5 seconds for both top and bottom slideshows
function changeImage() {
    // Change the top image
    const topImageElement = document.getElementById('top-slideshow-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    topImageElement.src = images[currentImageIndex];
    
    // Change the bottom image
    const bottomImageElement = document.getElementById('bottom-slideshow-image');
    bottomImageElement.src = images[currentImageIndex];
}

// Set interval to change images every 5 seconds (5000 ms)
setInterval(changeImage, 5000);

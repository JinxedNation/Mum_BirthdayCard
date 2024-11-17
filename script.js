// Image sources for the slideshow
const images = [
    'Images/graduation chloe.jpg',
    'Images/mum bday3.jpeg',
    'Images/mumbday.jpeg',
    'Images/mumbday2.jpeg'
];

let currentImageIndex = 0;

// Function to change the image every 30 seconds
function changeImage() {
    const imageElement = document.getElementById('top-slideshow-image') || document.getElementById('slideshow-image');

    if (imageElement) {
        // Update image source
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    } else {
        console.error("Slideshow image element not found.");
    }
}

// Set interval to change image every 30 seconds (30000 ms)
setInterval(changeImage, 15000);

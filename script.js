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
    const topImageElement = document.getElementById('top-slideshow-image');
    const bottomImageElement = document.getElementById('bottom-slideshow-image');
    const singleSlideshowImage = document.getElementById('slideshow-image');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newSrc = images[currentImageIndex];

    // Update images only if they exist on the current page
    if (topImageElement) topImageElement.src = newSrc;
    if (bottomImageElement) bottomImageElement.src = newSrc;
    if (singleSlideshowImage) singleSlideshowImage.src = newSrc;
}

// Set interval to change images every 5 seconds (5000 ms)
setInterval(changeImage, 5000);

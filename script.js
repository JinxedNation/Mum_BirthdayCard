// Image sources for the slideshow
const images = [
    'Images/graduation chloe.jpg',
    'Images/mum bday3.jpeg',
    'Images/mumbday.jpeg',
    'Images/mumbday2.jpeg'
];

let currentImageIndex = 0;

// Function to change the image every 20 seconds for both top and bottom slideshows
function changeImage() {
    const topImageElement = document.getElementById('top-slideshow-image');
    const bottomImageElement = document.getElementById('bottom-slideshow-image');
    const singleSlideshowImage = document.getElementById('slideshow-image');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newSrc = images[currentImageIndex];

    if (topImageElement) topImageElement.src = newSrc;
    if (bottomImageElement) bottomImageElement.src = newSrc;
    if (singleSlideshowImage) singleSlideshowImage.src = newSrc;
}


setInterval(changeImage, 60000);

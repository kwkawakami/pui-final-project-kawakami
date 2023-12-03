document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the current image source from local storage
    
    var imageSrc = localStorage.getItem('currentImageSrc');

    // Set the image source for the polaroid
    var polaroidImage = document.getElementById('polaroidImage');
    polaroidImage.src = imageSrc;

    new kursor({
        color: '#ffffff'
    });
});

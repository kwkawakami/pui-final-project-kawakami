document.addEventListener("DOMContentLoaded", function () {
    new kursor({
        color: '#ffffff'
    });

    var apertureSlider = document.getElementById("apertureSlider");
    var shutterSlider = document.getElementById("shutterSlider");
    var shutterButton = document.getElementById("shutterButton");
    var lightMeter = document.getElementById("lightMeter");

    apertureSlider.addEventListener("input", function () {
        updateImage();
    });

    shutterSlider.addEventListener("input", function () {
        updateImage();
    });

    shutterButton.addEventListener("click", function () {
        // Get the current image element
        var currentImageElement = document.querySelector('.sightFinderParent img');
    
        // Check if the image element is found
        if (currentImageElement) {
            // Get the current image source
            var currentImageSrc = currentImageElement.getAttribute('src');
    
            // Log the current image source
            console.log("Current Image Source:", currentImageSrc);
    
            // Save the current image source to local storage
            localStorage.setItem('currentImageSrc', currentImageSrc);
    
            // Redirect to the polaroid.html page
            window.location.href = "polaroid.html";
        } else {
            console.error("Error: Unable to find the image element with class 'sightFinder'.");
        }
    });

    function updateImage() {
        // Update the image based on the current slider values
        var apertureValue = parseInt(apertureSlider.value);
        var shutterValue = parseInt(shutterSlider.value);

        handleImageChange(apertureValue, shutterValue);
    }

    function handleImageChange(apertureValue, shutterValue) {
        if (apertureValue === 3 && shutterValue === 3) {
            changeA6();
        } else if (apertureValue === 3 && shutterValue === 2) {
            changeA7();
        } else if (apertureSlider.value == 3 && shutterSlider.value == 1) {
            changeA9();
        } else if (apertureSlider.value == 2 && shutterSlider.value == 3) {
            changeA4();
        } else if (apertureSlider.value == 2 && shutterSlider.value == 2) {
            changeA3();
        } else if (apertureSlider.value == 2 && shutterSlider.value == 1) {
            changeA5();
        } else if (apertureSlider.value == 1 && shutterSlider.value == 3) {
            changeA1();
        } else if (apertureSlider.value == 1 && shutterSlider.value == 2) {
            changeA2();
        } else if (apertureSlider.value == 1 && shutterSlider.value == 1) {
            changeA8();
        }


        updateLightMeter(apertureValue, shutterValue);
    }

    function updateLightMeter(apertureValue, shutterValue) {
        // Get the light meter element
        var lightMeterElement = document.querySelector('.lightMeter');

        // Determine the appropriate light meter image based on aperture and shutter values
        var lightMeterImage;
        if (apertureValue === 2 && shutterValue === 2) {
            lightMeterImage = "lightMeter0.png";
        } 
        else if (apertureValue === 3 && shutterValue === 3) {
            lightMeterImage = "lightMeter+3.png";
        }
        else if (apertureSlider.value == 3 && shutterSlider.value == 2){
            lightMeterImage = "lightMeter+1.png";
        }
        else if (apertureSlider.value == 3 && shutterSlider.value == 1){
            lightMeterImage = "lightMeter-1.png";
        }
        else if (apertureSlider.value == 2 && shutterSlider.value == 3){
            lightMeterImage = "lightMeter+2.png";
        }
        else if(apertureSlider.value == 2 && shutterSlider.value == 1){
            lightMeterImage = "lightMeter-2.png";
        }
        else if(apertureSlider.value == 1 && shutterSlider.value == 3){
            lightMeterImage = "lightMeter+1.png";
        }
        else if(apertureSlider.value == 1 && shutterSlider.value == 2){
            lightMeterImage = "lightMeter-1.png";
        }
        else if(apertureSlider.value == 1 && shutterSlider.value == 1){
            lightMeterImage = "lightMeter-3.png";
        }
        // Update the light meter image source
        lightMeterElement.src = "../assets/" + lightMeterImage;
    }
    function changeA1() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A1.png";
    }

    function changeA2() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A2.png";
    }

    function changeA3() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A3.png";
    }

    function changeA4(){
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A4.png";
    }

    function changeA5() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A5.png";
    }

    function changeA6() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A6.png";
    }

    function changeA7() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A7.png";
    }

    function changeA8() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A8.png";
    }

    function changeA9() {
        var imageElement = document.querySelector('img[alt="Your Image Description"]');
        imageElement.src = "../assets/A9.png";
    }

});

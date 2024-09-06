window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("fade-out"); // Trigger the fade-out animation

        // Wait for the animation to complete, then hide the preloader
        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 500); // Match the CSS transition duration (0.5s)
    });


    // Wait until the DOM content is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Select all the images you want to apply the fade-in animation to
        const images = document.querySelectorAll('.fade-in');

        images.forEach(function(image) {
            // Add an event listener to check when the image has loaded
            image.addEventListener('load', function() {
                image.classList.add('loaded'); // Add the 'loaded' class to trigger the animation
            });

            // For cached images that may not trigger 'load'
            if (image.complete) {
                image.classList.add('loaded');
            }
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const thanksText = document.querySelector('.thanks-content h1');
        thanksText.classList.add('loaded'); // Trigger the fade-in effect when the page is loaded
    });
    document.addEventListener("DOMContentLoaded", function () {
        const thanksText = document.querySelector('.thanks-content h1');
        thanksText.classList.add('loaded'); // Trigger the fade-in effect when the page is loaded
    })
   
    // Open the popup
function openPopup() {
    document.getElementById("inquiryPopup").style.display = "block";
}
function closePopup() {
    document.getElementById("inquiryPopup").style.display = "none";
}

// Close the popup when user clicks outside of it
window.onclick = function(event) {
    var popup = document.getElementById("inquiryPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


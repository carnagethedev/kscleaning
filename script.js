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


const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const width = document.querySelector('.service-item').offsetWidth;
  carouselWrapper.style.transform = `translateX(${-width * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.service-item').length;
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    currentIndex = 0; // Loop back to the start
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.service-item').length;
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    currentIndex = totalItems - 1; // Loop back to the last item
    updateCarousel();
  }
});

/* Add touch swipe support for mobile */
let startX;
carouselWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselWrapper.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const deltaX = touch.clientX - startX;

  if (deltaX > 50) {
    prevButton.click();
  } else if (deltaX < -50) {
    nextButton.click();
  }
});


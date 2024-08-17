document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");

    toggleBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.classList.remove("active");
        });
    });
});


// Get the button element
var scrollUpButton = document.getElementById("scrollUpButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400
    });
  
    ScrollReveal().reveal('.content p1', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.content img', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.content h2', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.large-text strong', { delay: 500, origin: 'dowun'});

    ScrollReveal().reveal('.about-left h2', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.location-image', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.buttons', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.content p1', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.deal-title', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.deal-item', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.services-title', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.reviews-title', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.review-item', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.left-image', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.right-details', { delay: 500, origin: 'top' });
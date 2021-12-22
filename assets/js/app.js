const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

if (jQuery('#back-to-top').length) {
  var scrollTrigger = 100, // px
      backToTop = function () {
          var scrollTop = jQuery(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              jQuery('#back-to-top').addClass('show');
          } else {
              jQuery('#back-to-top').removeClass('show');
          }
      };
  backToTop();
  jQuery(window).on('scroll', function () {
      backToTop();
  });
  jQuery('#back-to-top').on('click', function (e) {
      e.preventDefault();
     jQuery('html,body').animate({
          scrollTop: 0
      }, 700);
  });
}
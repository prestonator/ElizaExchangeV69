const menuToggle = document.querySelector(".toggle");
const content = document.querySelector(".content");
const navLink = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("reveal");
  content.classList.toggle("reveal");
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
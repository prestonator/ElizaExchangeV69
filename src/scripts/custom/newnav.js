const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".content");
const navLink = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("reveal");
  showcase.classList.toggle("reveal");
});

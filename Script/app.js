const menuBtn = document.querySelector(".toggle__menu");
const menu = document.querySelector(".mobile__menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu--active");
});

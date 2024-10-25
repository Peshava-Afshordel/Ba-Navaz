const menuBtn = document.querySelector(".toggle__menu");
const menu = document.querySelector(".mobile__menu");

const linkTag = document.querySelectorAll("a");

linkTag.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu--active");

  document.querySelector("body").classList.toggle("hidden");
});


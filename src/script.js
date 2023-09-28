"use strict";

const closeBtn = document.getElementById("nav-close-btn");
const mobileNav = document.querySelector(".mobile-navbar");
const whyOtter = document.getElementById("why-otter");
const navDropdown = document.getElementById("nav-dropdown");

console.log(navDropdown);

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

whyOtter.addEventListener("click", () => {
  navDropdown.classList.toggle("active");
});

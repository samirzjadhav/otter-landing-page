"use strict";

const closeBtn = document.getElementById("nav-close-btn");
const mobileNav = document.querySelector(".mobile-navbar");
const whyOtter = document.getElementById("why-otter");
const navDropdown = document.getElementById("nav-dropdown");
const dowload = document.getElementById("dowload");
const navDowload = document.getElementById("dowload-nav");

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

whyOtter.addEventListener("click", () => {
  navDropdown.classList.toggle("active");
});

dowload.addEventListener("click", () => {
  navDowload.classList.toggle("active");
});

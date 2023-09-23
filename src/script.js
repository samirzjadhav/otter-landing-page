"use strict";

const closeBtn = document.getElementById("nav-close-btn");
const mobileNav = document.querySelector(".mobile-navbar");
console.log(mobileNav);

closeBtn.addEventListener("click", () => {
  console.log("click");
  mobileNav.classList.toggle("active");
});

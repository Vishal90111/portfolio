"use strict";

const text = document.querySelector(".typed-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Vishal Joshi";
  }, 0);
  setTimeout(() => {
    text.textContent = "UI/UX Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Software Developer";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

const menu = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu .menu-icon");
const menuList = document.querySelector(".menu");
const menuLink = document.getElementsByClassName("menu-link");
const navList = document.querySelector(".nav-list");
const scrollToTop = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
const navHeight = header.getBoundingClientRect().height;

menu.addEventListener("click", function (e) {
  menuClose.classList.add("close");
  menuList.style.display = "block";
  e.stopPropagation();
});

menuClose.addEventListener("click", function (e) {
  menu.classList.remove("close");
  menuList.style.display = "none";
  e.stopPropagation();
});

document.addEventListener("click", function (e) {
  if (e.target.className === "menu-link") {
    menu.classList.remove("close");
    menuList.style.display = "none";
    e.stopPropagation();
  }
});

header.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("menu-link")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ top: 0, behavior: "smooth" });
  }
});

scrollToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observerCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky-header");
    scrollToTop.style.opacity = 1;
  } else {
    header.classList.remove("sticky-header");
    scrollToTop.style.opacity = 0;
  }
};

const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
};

const section = document.querySelector(".home");
const observer1 = new IntersectionObserver(observerCallback, obsOption);
observer1.observe(section);

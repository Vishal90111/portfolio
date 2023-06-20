"use strict"

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
}
textLoad();
setInterval(textLoad, 12000);

const menu = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu .menu-icon");
const menuList = document.querySelector(".menu");
const menuLink = document.getElementsByClassName("menu-link");

menu.addEventListener('click', function (e) {
    menuClose.classList.add('close');
    menuList.style.display = "block"
    e.stopPropagation();
})

menuClose.addEventListener('click', function (e) {
    menu.classList.remove('close');
    menuList.style.display = "none"
    e.stopPropagation();

})

document.addEventListener('click', function (e) {
    if (e.target.className === 'menu-link') {
        menu.classList.remove('close');
        menuList.style.display = "none"
        e.stopPropagation();
    }
})


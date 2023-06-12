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
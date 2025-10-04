const titulo = document.querySelector('.titulo');
const hill1 = document.querySelector('.hill1');
const hill4 = document.querySelector('.hill4');
const hill5 = document.querySelector('.hill5');

document.addEventListener("scroll", function () {
    let scrolly = window.scrollY;
    titulo.style.marginTop = scrolly + "px";
    hill1.style.left = -scrolly * 2 + "px";
    hill4.style.left = scrolly + "px";
})

const $ = document;
let nav_btn = $.querySelector(".nav__btn");
let nav_menu = $.querySelector(".nav-menu");



let nav_open = false; 


nav_btn.addEventListener('click', function () {

    if (nav_open) {
        nav_btn.classList.remove("nav__btn--open");
        nav_menu.classList.remove("nav-menu--open");
        nav_open = false;
    } else {
        nav_btn.classList.add("nav__btn--open");
        nav_menu.classList.add("nav-menu--open");
        nav_open = true;
    }
    
})



 //////// this is for activate the likes ////////

let heart_icone = $.querySelectorAll(".place__img-heart");


for (let i = 0 ; i < heart_icone.length ; i++) {
    heart_icone[i].addEventListener("click", function() {
            this.classList.toggle("place__img-heart--fill")
        
    })
}



 //////// create smooth scroll btn ////////


let scroll_btn = $.querySelector(".footer__scroll");

scroll_btn.addEventListener("click", function (event) {
    
    event.preventDefault();
    const href = this.getAttribute("href");
    $.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
})
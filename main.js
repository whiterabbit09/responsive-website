'use strict';

// 넷바 색상 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//넷바 메뉴 선택시 해당 부분으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
});

//Contact Me 버튼 클릭시 해당 부분으로 이동
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({behavior : 'smooth'});
});

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - scrollY / homeHeight;
});

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});
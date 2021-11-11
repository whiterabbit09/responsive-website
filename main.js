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

//Contact Me 버튼 클릭시 최하단으로 이동
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({behavior : 'smooth'});
});

//arrow-up 버튼 클릭시 최상단으로 이동
const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
    document.querySelector("#home").scrollIntoView({behavior : 'smooth'});
});

//화면을 어느 정도 내리면 home의 요소들의 투명도가 줄어듬
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - scrollY / homeHeight;
    if(window.scrollY > homeHeight) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});

//화면이 작아졌을 때 navbar의 햄버거 아이콘을 클릭하면 메뉴가 나타남
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});
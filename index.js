//MENU
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick =() =>{
    profile.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
    profile.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    navbar.classList.remove('active');
}

//MENU-END

//TOP-SWIPER

const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationdots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function init(){

    /*
    *slideImage[0] = 0
    *slideImage[1] = 100%
    *slideImage[2] = 200%
    * */

    slideImage.forEach((img, i) =>{
       img.style.left = i *100 + "%";
    });

    slideImage[0].classList.add("active");

createNavigationDots();
}

init();

function createNavigationDots(){
    for (let i=0; i<numberOfImages;i++){
        const dot =document.createElement("div");
        dot.classList.add("single-dot");
        navigationdots.appendChild(dot);

        dot.addEventListener("click", ()=>{
            goToSlide(i);
        })
    }

    navigationdots.children[0].classList.add("active");
}

//lapozas
nextBtn.addEventListener("click", () =>{
    if (currentSlide >= numberOfImages -1){
        goToSlide(0);
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

//visszafele

prevBtn.addEventListener("click", () =>{
    if (currentSlide <=0){
        goToSlide(numberOfImages-1);
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber){
    slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

function setActiveClass(){

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

//
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationdots.children[currentSlide].classList.add("active");
}
//TOP-SWIPER-END


//BOTTOM-SWIPER
var swiper = new Swiper(".three", {
    spaceBetween: 50,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
        rotate: 1,
        stretch: 0,
        depth: 100,
        modifier: 1
    },
    breakpoints: {
        200: {
            slidesPerView: "auto",
            spaceBetween: 50,
            // nextButton: '.swiper-next',
            // prevButton: '.swiper-prev',
        //    brakpoint pagination
        }
    }
});
//BOTTOM-SWIPER-END





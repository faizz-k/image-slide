

let currentSlide = 0;
let Slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click",function() {
    let nextSlide = (currentSlide+1)%Slides.length;
    Slides[currentSlide].style.display="none";

    Slides[nextSlide].style.display ="block";
    currentSlide = nextSlide;
})

prevBtn.addEventListener("click", function() {
    let prevSlide = currentSlide == 0?Slides.length -1:currentSlide -1;
    Slides[currentSlide].style.display ="none";

    Slides[prevSlide].style.display ="block";
    currentSlide = prevSlide;
})
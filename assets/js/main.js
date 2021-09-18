const slider = document.querySelector('.slider');
const sliderProgress = document.querySelector('.slider__progress');
const slide1 = document.querySelector('.slide__item-first');
const slide2 = document.querySelector('.slide__item-second');
const btnSlideLeft = document.querySelector('.btn__change-slide-left svg');
const btnSlideRight = document.querySelector('.btn__change-slide-right svg');
let isSlider1 = true;

const changeSlide = function () {
    resetAnimation();
    isSlider1 = !isSlider1;
    if (isSlider1) {
        slide1.style.display = 'none';
        slide2.style.display = 'block';
    } else {
        slide1.style.display = 'block';
        slide2.style.display = 'none';
    }
    
}

const resetAnimation = () => {
    sliderProgress.style.animation = 'none';
    sliderProgress.offsetHeight; 
    sliderProgress.style.animation = null;
}

let autoChangeSlide = setInterval(changeSlide, 5000);

const ClickChangeSlide = () => {
    clearInterval(autoChangeSlide)
    autoChangeSlide = null;
    changeSlide()
    autoChangeSlide = setInterval(changeSlide, 5000);
}

btnSlideLeft.onclick = ClickChangeSlide
btnSlideRight.onclick = ClickChangeSlide




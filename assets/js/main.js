const slider = document.querySelector('.slider');
const sliderProgress = document.querySelector('.slider__progress');
const slide1 = document.querySelector('.slide__item-first');
const slide2 = document.querySelector('.slide__item-second');
const btnSlideLeft = document.querySelector('.btn__change-slide-left svg');
const btnSlideRight = document.querySelector('.btn__change-slide-right svg');
const sliderElementsHasAnimation = document.querySelectorAll('.slider__element-animation')
const btnBuyTour = document.querySelector('.slider_tour-btn');
let isSlider1 = true;
let currentIndex = 0;
let SetTimeout;
const changeSlide = function () {
    // if (SetTimeout){
    //     clearTimeout(SetTimeout);
    //     SetTimeout = null;
    // }
    currentIndex = 0;
    HideAllElementAnimation();
    ResetAllElementAnimation(currentIndex);
    isSlider1 = !isSlider1;
    if (isSlider1) {
        slide1.style.display = 'none';
        slide2.style.display = 'block';
        btnBuyTour.innerText = 'BUY THE TOUR'
    } else {
        slide1.style.display = 'block';
        slide2.style.display = 'none';
        btnBuyTour.innerText = 'BUY A LICENSE'

    }
}

const HideAllElementAnimation = () => {
    resetAnimation(sliderProgress);
    for (element of sliderElementsHasAnimation){
        element.classList.add('display_none');
    }
}

const ResetAllElementAnimation= (currentIndex) => {
    SetTimeout = setTimeout(() => {
        if (currentIndex < sliderElementsHasAnimation.length){
            let element = sliderElementsHasAnimation[currentIndex];
            element.classList.remove('display_none');
            resetAnimation(element)
            currentIndex++;
            ResetAllElementAnimation(currentIndex);
        }
    }, 300)
}

const resetAnimation = (element) => {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = null;
}

HideAllElementAnimation();
ResetAllElementAnimation(currentIndex);
let autoChangeSlide = setInterval(changeSlide, 5000);

const ClickChangeSlide = () => {
    clearInterval(autoChangeSlide)
    autoChangeSlide = null;
    changeSlide()
    autoChangeSlide = setInterval(changeSlide, 5000);
}

btnSlideLeft.onclick = ClickChangeSlide
btnSlideRight.onclick = ClickChangeSlide




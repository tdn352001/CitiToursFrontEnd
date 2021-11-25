const slider = document.querySelector('.slider');
const sliderProgress = document.querySelector('.slider__progress');
const slide1 = document.querySelector('.slide__item-first');
const slide2 = document.querySelector('.slide__item-second');
const btnSlideLeft = document.querySelector('.btn__change-slide-left svg');
const btnSlideRight = document.querySelector('.btn__change-slide-right svg');

const sliderAbove = document.querySelector('.slider__heading-above')
const sliderBelow = document.querySelector('.slider__heading-under')
const sliderElementsHasAnimation = document.querySelectorAll('.slider__element-animation')
const btnBuyTour = document.querySelector('.slider_tour-btn');
let isSlider1 = true;
let currentIndex = 0;
let SetTimeout;




const resetAnimation = (element) => {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = null;
}


const HideAllElementAnimation = () => {
    resetAnimation(sliderProgress);
    for (element of sliderElementsHasAnimation) {
        element.classList.add('display_none');
    }
}

const setAnimationForHeader = (changeSlide) =>{
    resetAnimation(sliderAbove);
    if (changeSlide){
        sliderAbove.style.animation = 'FromRightToLeft ease-in-out 0.5s'
        sliderBelow.style.animation = 'FromLeftToRight ease-in-out 0.5s'
    }else{
        sliderAbove.style.animation = 'floatingUseMatrix 30s linear 0s infinite normal'
        setTimeout(() => {
            resetAnimation(sliderBelow);
            sliderBelow.style.animation = 'floatingUseMatrix 30s linear 0s infinite normal'
        }, 20)
    }
}

const ResetAllElementAnimation = (currentIndex) => {
    SetTimeout = setTimeout(() => {
        if (currentIndex < sliderElementsHasAnimation.length) {
            let element = sliderElementsHasAnimation[currentIndex];
            resetAnimation(element)
            element.classList.remove('display_none');
            currentIndex++;
            ResetAllElementAnimation(currentIndex);
            if (currentIndex === sliderElementsHasAnimation.length - 3){
                setTimeout(() => {
                    setAnimationForHeader(false)
                }, 100)
            }
        }
        
    }, 300)
}

const changeSlide = function () {
    currentIndex = 0;
    HideAllElementAnimation();
    setAnimationForHeader(true)
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

let autoChangeSlide = setInterval(changeSlide, 10000);

const ClickChangeSlide = () => {
    clearInterval(autoChangeSlide)
    autoChangeSlide = null;
    changeSlide()
    autoChangeSlide = setInterval(changeSlide, 10000);
}


btnSlideLeft.onclick = ClickChangeSlide
btnSlideRight.onclick = ClickChangeSlide

HideAllElementAnimation();
ResetAllElementAnimation(currentIndex);




// // let x = 3;
// // let y = 0;
// // let k = false;


// // const StartFloatingAnimationForHeader = () => {

// //     sliderAbove.style.transform = 'matrix(1, 0, 0, 1,'+ y + ','+ x + ')';
// //     sliderBelow.style.transform = 'matrix(1, 0, 0, 1,' + y + ',' + x + ')';
// //     console.log(x, y, k)
// //     if (x === 3 || x === -3) {
// //         y = 0;
// //         k = !k
// //     }

// //     if (k) {
// //         x -= 0.01;
// //         y = Math.sqrt(9 - x * x);
// //     } else {
// //         x += 0.01;
// //         y = 0 - Math.sqrt(9 - x * x);
// //     }

// //     if (y) {
// //         y = Math.round(y * 10000) / 10000;
// //     }
// //     if(x){
// //         x = Math.round(x * 100) / 100;
// //     }
// // }

// let deg = 0
// const StartFloatingAnimationForHeader = function(){
//     if(deg === 360){
//         deg = 0;
//     }
//     deg+= 0.4;
//     let y = Math.sin(deg);
//     let x = Math.cos(deg);
//     x*=2;
//     y*=2;
//     sliderAbove.style.transform = 'matrix(1, 0, 0, 1,' + y + ',' + x + ')';
//     setTimeout(() => {
//         sliderBelow.style.transform = 'matrix(1, 0, 0, 1,' + y + ',' + x + ')';
//     }, 50)
// }
// setInterval(StartFloatingAnimationForHeader, 200);

// let deg = 0
// let Floating = [];
// for(deg; deg <= 100; deg++) {
//     let x = Math.round(Math.cos(deg) * 3 *10000)/10000;
//     let y = Math.round(Math.sin(deg) * 3 * 10000) / 10000;
//     let float = `
//         ${deg}% {
//             transform: matrix(1, 0, 0, 1, ${y}, ${x});
//         }
//     `
//     Floating.push(float);
// }

// console.log(Floating.join('\n'));
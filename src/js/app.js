'use strict';

const $overlay = document.querySelector('.overlay');
const $overlayBtn = $overlay.querySelector('.overlay__btn');
const $overlayLoader = $overlay.querySelector('.overlay__loader');

const $slider = document.querySelector('.slider');
const $slideList = $slider.querySelector('.slider__list');
const $slides = $slideList.querySelectorAll('.slider__item');
const slidesLen = $slides.length;
const currentSlideClass = 'slider__item--shown';

const $btnPrev = $slider.querySelector('.slider__btn--prev');
const $btnNext = $slider.querySelector('.slider__btn--next');

const $paginationList = $slider.querySelector('.slider__pagination');
const $paginations = $paginationList.querySelectorAll('.slider__pagination-item');
const currentPaginationClass = 'slider__pagination-item--current';

let currentSlideIndex = 0;
let swipeDirection = 0;

const goToSlide = (slideIndex) => {
    $slides[currentSlideIndex].classList.remove(currentSlideClass);

    for (let item of $paginations) {
        item.classList.remove(currentPaginationClass);
    }

    currentSlideIndex = slideIndex  % slidesLen;
    $slides[currentSlideIndex].classList.add(currentSlideClass);
    $paginations[currentSlideIndex].classList.add(currentPaginationClass);
}

$overlayBtn.addEventListener('click', () => {
    $overlayBtn.classList.add('overlay__btn--hidden');
    $overlayLoader.classList.remove('overlay__loader--hidden');
    setTimeout(
        () => $overlay.classList.add('overlay--hidden'),
        5000
    )
});

$btnNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
$btnPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1 + slidesLen));

$slideList.ondragstart = () => false;
$slideList.addEventListener('pointerdown', (event) => {
    swipeDirection = event.clientX;
});
$slideList.addEventListener('pointerup', (event) => {
    (swipeDirection - event.clientX) >= 0 ? goToSlide(currentSlideIndex + 1) : goToSlide(currentSlideIndex - 1 + slidesLen);
});

$paginationList.addEventListener('click', (event) => {
    let pagination = event.target.closest('.slider__pagination-item');

    if (pagination) {
        currentSlideIndex = pagination.dataset.slideNumber - 1;

        for (let i = 0; i < $slides.length; i++) {
            $slides[i].classList.remove(currentSlideClass);
            $paginations[i].classList.remove(currentPaginationClass);
        }

        $slides[currentSlideIndex].classList.add(currentSlideClass);
        $paginations[currentSlideIndex].classList.add(currentPaginationClass);
    }
});

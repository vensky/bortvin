'use strict';

const $overlay = document.querySelector('.overlay');
const $btnOverlay = $overlay.querySelector('.overlay__btn');

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

const goToSlide = (slideIndex) => {
    $slides[currentSlideIndex].classList.remove(currentSlideClass);

    for (let item of $paginations) {
        item.classList.remove(currentPaginationClass);
    }

    currentSlideIndex = slideIndex  % slidesLen;
    $slides[currentSlideIndex].classList.add(currentSlideClass);
    $paginations[currentSlideIndex].classList.add(currentPaginationClass);
}

$btnOverlay.addEventListener('click', () => {
    setTimeout(
        () => $overlay.classList.add('overlay--hidden'),
        5000
    )
});

$btnNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
$btnPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1 + slidesLen));

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

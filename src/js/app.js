'use strict';

const $btnPrev = document.querySelector('.slider__btn--prev');
const $btnNext = document.querySelector('.slider__btn--next');

const $slideList = document.querySelector('.slider__slides');
const $slides = $slideList.querySelectorAll('.slider__slide');
let currentSlideIndex = 0;

const $paginationList = document.querySelector('.slider__pagination');
const $paginations = $paginationList.querySelectorAll('.slider__pagination-item');

const goToSlide = (direction) => {
    $slides[currentSlideIndex].classList.remove('slider__slide--shown');

    for (let i = 0; i < $slides.length; i++) {
        $paginations[i].classList.remove('slider__pagination-item--current');
    }

    if (direction === 'next') {
        currentSlideIndex = (currentSlideIndex + 1) % $slides.length;
    }

    if (direction === 'prev') {
        currentSlideIndex = (currentSlideIndex - 1 + $slides.length) % $slides.length;
    }

    $slides[currentSlideIndex].classList.add('slider__slide--shown');
    $paginations[currentSlideIndex].classList.add('slider__pagination-item--current');
}

$btnNext.addEventListener('click', () => goToSlide('next'));
$btnPrev.addEventListener('click', () => goToSlide('prev'));
$paginationList.addEventListener('click', (event) => {
    let paginationItem = event.target.closest('li');

    if (paginationItem) {
        currentSlideIndex = paginationItem.dataset.slideNumber - 1;

        for (let i = 0; i < $slides.length; i++) {
            $slides[i].classList.remove('slider__slide--shown');
            $paginations[i].classList.remove('slider__pagination-item--current');
        }

        $slides[currentSlideIndex].classList.add('slider__slide--shown');
        $paginations[currentSlideIndex].classList.add('slider__pagination-item--current');
    }
});

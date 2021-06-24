'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $overlay = document.querySelector('.overlay');
var $overlayBtn = $overlay.querySelector('.overlay__btn');
var $overlayLoader = $overlay.querySelector('.overlay__loader');
var $slider = document.querySelector('.slider');
var $slideList = $slider.querySelector('.slider__list');
var $slides = $slideList.querySelectorAll('.slider__item');
var slidesLen = $slides.length;
var currentSlideClass = 'slider__item--shown';
var $btnPrev = $slider.querySelector('.slider__btn--prev');
var $btnNext = $slider.querySelector('.slider__btn--next');
var $paginationList = $slider.querySelector('.slider__pagination');
var $paginations = $paginationList.querySelectorAll('.slider__pagination-item');
var currentPaginationClass = 'slider__pagination-item--current';
var currentSlideIndex = 0;

var goToSlide = function goToSlide(slideIndex) {
  $slides[currentSlideIndex].classList.remove(currentSlideClass);

  var _iterator = _createForOfIteratorHelper($paginations),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.classList.remove(currentPaginationClass);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  currentSlideIndex = slideIndex % slidesLen;
  $slides[currentSlideIndex].classList.add(currentSlideClass);
  $paginations[currentSlideIndex].classList.add(currentPaginationClass);
};

$overlayBtn.addEventListener('click', function () {
  $overlayBtn.classList.add('overlay__btn--hidden');
  $overlayLoader.classList.remove('overlay__loader--hidden');
  setTimeout(function () {
    return $overlay.classList.add('overlay--hidden');
  }, 5000);
});
$btnNext.addEventListener('click', function () {
  return goToSlide(currentSlideIndex + 1);
});
$btnPrev.addEventListener('click', function () {
  return goToSlide(currentSlideIndex - 1 + slidesLen);
});
$paginationList.addEventListener('click', function (event) {
  var pagination = event.target.closest('.slider__pagination-item');

  if (pagination) {
    currentSlideIndex = pagination.dataset.slideNumber - 1;

    for (var i = 0; i < $slides.length; i++) {
      $slides[i].classList.remove(currentSlideClass);
      $paginations[i].classList.remove(currentPaginationClass);
    }

    $slides[currentSlideIndex].classList.add(currentSlideClass);
    $paginations[currentSlideIndex].classList.add(currentPaginationClass);
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkb3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRvdmVybGF5QnRuIiwiJG92ZXJsYXlMb2FkZXIiLCIkc2xpZGVyIiwiJHNsaWRlTGlzdCIsIiRzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzTGVuIiwibGVuZ3RoIiwiY3VycmVudFNsaWRlQ2xhc3MiLCIkYnRuUHJldiIsIiRidG5OZXh0IiwiJHBhZ2luYXRpb25MaXN0IiwiJHBhZ2luYXRpb25zIiwiY3VycmVudFBhZ2luYXRpb25DbGFzcyIsImN1cnJlbnRTbGlkZUluZGV4IiwiZ29Ub1NsaWRlIiwic2xpZGVJbmRleCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIml0ZW0iLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImV2ZW50IiwicGFnaW5hdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJkYXRhc2V0Iiwic2xpZGVOdW1iZXIiLCJpIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBR0gsUUFBUSxDQUFDRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTUUsY0FBYyxHQUFHSixRQUFRLENBQUNFLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0FBRUEsSUFBTUcsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBaEI7QUFDQSxJQUFNSSxVQUFVLEdBQUdELE9BQU8sQ0FBQ0gsYUFBUixDQUFzQixlQUF0QixDQUFuQjtBQUNBLElBQU1LLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixlQUE1QixDQUFoQjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRyxNQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLHFCQUExQjtBQUVB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Q0UsaUJBQUQsQ0FBWixDQUFnQ0csU0FBaEMsQ0FBMENHLEdBQTFDLENBQThDUCxzQkFBOUM7QUFDSDtBQUNKLENBZEQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0ICRvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0ICRvdmVybGF5QnRuID0gJG92ZXJsYXkucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX2J0bicpO1xuY29uc3QgJG92ZXJsYXlMb2FkZXIgPSAkb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheV9fbG9hZGVyJyk7XG5cbmNvbnN0ICRzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XG5jb25zdCAkc2xpZGVMaXN0ID0gJHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19saXN0Jyk7XG5jb25zdCAkc2xpZGVzID0gJHNsaWRlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19pdGVtJyk7XG5jb25zdCBzbGlkZXNMZW4gPSAkc2xpZGVzLmxlbmd0aDtcbmNvbnN0IGN1cnJlbnRTbGlkZUNsYXNzID0gJ3NsaWRlcl9faXRlbS0tc2hvd24nO1xuXG5jb25zdCAkYnRuUHJldiA9ICRzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fYnRuLS1wcmV2Jyk7XG5jb25zdCAkYnRuTmV4dCA9ICRzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fYnRuLS1uZXh0Jyk7XG5cbmNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICRzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fcGFnaW5hdGlvbicpO1xuY29uc3QgJHBhZ2luYXRpb25zID0gJHBhZ2luYXRpb25MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3BhZ2luYXRpb24taXRlbScpO1xuY29uc3QgY3VycmVudFBhZ2luYXRpb25DbGFzcyA9ICdzbGlkZXJfX3BhZ2luYXRpb24taXRlbS0tY3VycmVudCc7XG5cbmxldCBjdXJyZW50U2xpZGVJbmRleCA9IDA7XG5cbmNvbnN0IGdvVG9TbGlkZSA9IChzbGlkZUluZGV4KSA9PiB7XG4gICAgJHNsaWRlc1tjdXJyZW50U2xpZGVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50U2xpZGVDbGFzcyk7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mICRwYWdpbmF0aW9ucykge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG4gICAgfVxuXG4gICAgY3VycmVudFNsaWRlSW5kZXggPSBzbGlkZUluZGV4ICAlIHNsaWRlc0xlbjtcbiAgICAkc2xpZGVzW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRTbGlkZUNsYXNzKTtcbiAgICAkcGFnaW5hdGlvbnNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG59XG5cbiRvdmVybGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICRvdmVybGF5QnRuLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfX2J0bi0taGlkZGVuJyk7XG4gICAgJG92ZXJsYXlMb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheV9fbG9hZGVyLS1oaWRkZW4nKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiAkb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS1oaWRkZW4nKSxcbiAgICAgICAgNTAwMFxuICAgIClcbn0pO1xuXG4kYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShjdXJyZW50U2xpZGVJbmRleCArIDEpKTtcbiRidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZUluZGV4IC0gMSArIHNsaWRlc0xlbikpO1xuXG4kcGFnaW5hdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgcGFnaW5hdGlvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0nKTtcblxuICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gcGFnaW5hdGlvbi5kYXRhc2V0LnNsaWRlTnVtYmVyIC0gMTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICRzbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50U2xpZGVDbGFzcyk7XG4gICAgICAgICAgICAkcGFnaW5hdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50UGFnaW5hdGlvbkNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFNsaWRlQ2xhc3MpO1xuICAgICAgICAkcGFnaW5hdGlvbnNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG4gICAgfVxufSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9

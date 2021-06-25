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
var swipeDirection = 0;

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

$slideList.ondragstart = function () {
  return false;
};

$slideList.addEventListener('pointerdown', function (event) {
  swipeDirection = event.clientX;
});
$slideList.addEventListener('pointerup', function (event) {
  swipeDirection - event.clientX >= 0 ? goToSlide(currentSlideIndex + 1) : goToSlide(currentSlideIndex - 1 + slidesLen);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkb3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRvdmVybGF5QnRuIiwiJG92ZXJsYXlMb2FkZXIiLCIkc2xpZGVyIiwiJHNsaWRlTGlzdCIsIiRzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzTGVuIiwibGVuZ3RoIiwiY3VycmVudFNsaWRlQ2xhc3MiLCIkYnRuUHJldiIsIiRidG5OZXh0IiwiJHBhZ2luYXRpb25MaXN0IiwiJHBhZ2luYXRpb25zIiwiY3VycmVudFBhZ2luYXRpb25DbGFzcyIsImN1cnJlbnRTbGlkZUluZGV4Iiwic3dpcGVEaXJlY3Rpb24iLCJnb1RvU2xpZGUiLCJzbGlkZUluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaXRlbSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0Iiwib25kcmFnc3RhcnQiLCJldmVudCIsImNsaWVudFgiLCJwYWdpbmF0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRhdGFzZXQiLCJzbGlkZU51bWJlciIsImkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHSCxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxJQUFNRSxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdkI7QUFFQSxJQUFNRyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFoQjtBQUNBLElBQU1JLFVBQVUsR0FBR0QsT0FBTyxDQUFDSCxhQUFSLENBQXNCLGVBQXRCLENBQW5CO0FBQ0EsSUFBTUssT0FBTyxHQUFHRCxVQUFVLENBQUNFLGdCQUFYLENBQTRCLGVBQTVCLENBQWhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixPQUFPLENBQUNH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T0FBYixDQUFxQiwwQkFBckIsQ0FBakI7O0FBRUEsTUFBSUYsVUFBSixFQUFnQjtBQUNaYixJQUFBQSxpQkFBaUIsR0FBR2EsVUFBVSxDQUFDRyxPQUFYLENBQW1CQyxXQUFuQixHQUFpQyxDQUFyRDs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc1QixPQUFPLENBQUNHLE1BQTVCLEVBQW9DeUIsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQzVCLE1BQUFBLE9BQU8sQ0FBQzRCLENBQUQsQ0FBUCxDQUFXZCxTQUFYLENBQXFCQyxNQUFyQixDQUE0QlgsaUJBQTVCO0FBQ0FJLE1BQUFBLFlBQVksQ0FBQ29CLENBQUQsQ0FBWixDQUFnQmQsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDTixzQkFBakM7QUFDSDs7QUFFRFQsSUFBQUEsT0FBTyxDQUFDVSxpQkFBRCxDQUFQLENBQTJCSSxTQUEzQixDQUFxQ0csR0FBckMsQ0FBeUNiLGlCQUF6QztBQUNBSSxJQUFBQSxZQUFZLENBQUNFLGlCQUFELENBQVosQ0FBZ0NJLFNBQWhDLENBQTBDRyxHQUExQyxDQUE4Q1Isc0JBQTlDO0FBQ0g7QUFDSixDQWREIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCAkb3ZlcmxheUJ0biA9ICRvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5X19idG4nKTtcbmNvbnN0ICRvdmVybGF5TG9hZGVyID0gJG92ZXJsYXkucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX2xvYWRlcicpO1xuXG5jb25zdCAkc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xuY29uc3QgJHNsaWRlTGlzdCA9ICRzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbGlzdCcpO1xuY29uc3QgJHNsaWRlcyA9ICRzbGlkZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faXRlbScpO1xuY29uc3Qgc2xpZGVzTGVuID0gJHNsaWRlcy5sZW5ndGg7XG5jb25zdCBjdXJyZW50U2xpZGVDbGFzcyA9ICdzbGlkZXJfX2l0ZW0tLXNob3duJztcblxuY29uc3QgJGJ0blByZXYgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcHJldicpO1xuY29uc3QgJGJ0bk5leHQgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tbmV4dCcpO1xuXG5jb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3BhZ2luYXRpb24nKTtcbmNvbnN0ICRwYWdpbmF0aW9ucyA9ICRwYWdpbmF0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0nKTtcbmNvbnN0IGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MgPSAnc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnO1xuXG5sZXQgY3VycmVudFNsaWRlSW5kZXggPSAwO1xubGV0IHN3aXBlRGlyZWN0aW9uID0gMDtcblxuY29uc3QgZ29Ub1NsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcbiAgICAkc2xpZGVzW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRTbGlkZUNsYXNzKTtcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgJHBhZ2luYXRpb25zKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50UGFnaW5hdGlvbkNsYXNzKTtcbiAgICB9XG5cbiAgICBjdXJyZW50U2xpZGVJbmRleCA9IHNsaWRlSW5kZXggICUgc2xpZGVzTGVuO1xuICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFNsaWRlQ2xhc3MpO1xuICAgICRwYWdpbmF0aW9uc1tjdXJyZW50U2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChjdXJyZW50UGFnaW5hdGlvbkNsYXNzKTtcbn1cblxuJG92ZXJsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgJG92ZXJsYXlCdG4uY2xhc3NMaXN0LmFkZCgnb3ZlcmxheV9fYnRuLS1oaWRkZW4nKTtcbiAgICAkb3ZlcmxheUxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5X19sb2FkZXItLWhpZGRlbicpO1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+ICRvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktLWhpZGRlbicpLFxuICAgICAgICA1MDAwXG4gICAgKVxufSk7XG5cbiRidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZUluZGV4ICsgMSkpO1xuJGJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnb1RvU2xpZGUoY3VycmVudFNsaWRlSW5kZXggLSAxICsgc2xpZGVzTGVuKSk7XG5cbiRzbGlkZUxpc3Qub25kcmFnc3RhcnQgPSAoKSA9PiBmYWxzZTtcbiRzbGlkZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBzd2lwZURpcmVjdGlvbiA9IGV2ZW50LmNsaWVudFg7XG59KTtcbiRzbGlkZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKGV2ZW50KSA9PiB7XG4gICAgKHN3aXBlRGlyZWN0aW9uIC0gZXZlbnQuY2xpZW50WCkgPj0gMCA/IGdvVG9TbGlkZShjdXJyZW50U2xpZGVJbmRleCArIDEpIDogZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZUluZGV4IC0gMSArIHNsaWRlc0xlbik7XG59KTtcblxuJHBhZ2luYXRpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IHBhZ2luYXRpb24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNsaWRlcl9fcGFnaW5hdGlvbi1pdGVtJyk7XG5cbiAgICBpZiAocGFnaW5hdGlvbikge1xuICAgICAgICBjdXJyZW50U2xpZGVJbmRleCA9IHBhZ2luYXRpb24uZGF0YXNldC5zbGlkZU51bWJlciAtIDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgJHBhZ2luYXRpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2xpZGVzW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRTbGlkZUNsYXNzKTtcbiAgICAgICAgJHBhZ2luYXRpb25zW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xuICAgIH1cbn0pO1xuIl0sImZpbGUiOiJhcHAuanMifQ==

'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $overlay = document.querySelector('.overlay');
var $btnOverlay = $overlay.querySelector('.overlay__btn');
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

$btnOverlay.addEventListener('click', function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkb3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRidG5PdmVybGF5IiwiJHNsaWRlciIsIiRzbGlkZUxpc3QiLCIkc2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlc0xlbiIsImxlbmd0aCIsImN1cnJlbnRTbGlkZUNsYXNzIiwiJGJ0blByZXYiLCIkYnRuTmV4dCIsIiRwYWdpbmF0aW9uTGlzdCIsIiRwYWdpbmF0aW9ucyIsImN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MiLCJjdXJyZW50U2xpZGVJbmRleCIsImdvVG9TbGlkZSIsInNsaWRlSW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpdGVtIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJldmVudCIsInBhZ2luYXRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZGF0YXNldCIsInNsaWRlTnVtYmVyIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQSxJQUFNQyxXQUFXLEdBQUdILFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUVBLElBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWhCO0FBQ0EsSUFBTUcsVUFBVSxHQUFHRCxPQUFPLENBQUNGLGFBQVIsQ0FBc0IsZUFBdEIsQ0FBbkI7QUFDQSxJQUFNSSxPQUFPLEdBQUdELFVBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEIsZUFBNUIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csTUFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxxQkFBMUI7QUFFQSxJQUFNQyxRQUFRLEdBQUdQLE9BQU8sQ0FBQ0YsYUFBUixDQUFzQixvQkFBdEIsQ0FBakI7QUFDQSxJQUFNVSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0YsYUFBUixDQUFzQixvQkFBdEIsQ0FBakI7QUFFQSxJQUFNVyxlQUFlLEdBQUdULE9BQU8sQ0FBQ0YsYUFBUixDQUFzQixxQkFBdEIsQ0FBeEI7QUFDQSxJQUFNWSxZQUFZLEdBQUdELGVBQWUsQ0FBQ04sZ0JBQWhCLENBQWlDLDBCQUFqQyxDQUFyQjtBQUNBLElBQU1RLHNCQUFzQixHQUFHLGtDQUEvQjtBQUVBLElBQUlDLGlCQUFpQixHQUFHLENBQXhCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFVBQUQsRUFBZ0I7QUFDOUJaLEVBQUFBLE9BQU8sQ0FBQ1UsaUJBQUQsQ0FBUCxDQUEyQkcsU0FBM0IsQ0FBcUNDLE1BQXJDLENBQTRDVixpQkFBNUM7O0FBRDhCLDZDQUdiSSxZQUhhO0FBQUE7O0FBQUE7QUFHOUIsd0RBQStCO0FBQUEsVUFBdEJPLElBQXNCO0FBQzNCQSxNQUFBQSxJQUFJLENBQUNGLFNBQUwsQ0FBZUMsTUFBZixDQUFzQkwsc0JBQXRCO0FBQ0g7QUFMNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPOUJDLEVBQUFBLGlCQUFpQixHQUFHRSxVQUFVLEdBQUlWLFNBQWxDO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ1UsaUJBQUQsQ0FBUCxDQUEyQkcsU0FBM0IsQ0FBcUNHLEdBQXJDLENBQXlDWixpQkFBekM7QUFDQUksRUFBQUEsWUFBWSxDQUFDRSxpQkFBRCxDQUFaLENBQWdDRyxTQUFoQyxDQUEwQ0csR0FBMUMsQ0FBOENQLHNCQUE5QztBQUNILENBVkQ7O0FBWUFaLFdBQVcsQ0FBQ29CLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDeENDLEVBQUFBLFVBQVUsQ0FDTjtBQUFBLFdBQU14QixRQUFRLENBQUNtQixTQUFULENBQW1CRyxHQUFuQixDQUF1QixpQkFBdkIsQ0FBTjtBQUFBLEdBRE0sRUFFTixJQUZNLENBQVY7QUFJSCxDQUxEO0FBT0FWLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM7QUFBQSxTQUFNTixTQUFTLENBQUNELGlCQUFpQixHQUFHLENBQXJCLENBQWY7QUFBQSxDQUFuQztBQUNBTCxRQUFRLENBQUNZLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQUEsU0FBTU4sU0FBUyxDQUFDRCxpQkFBaUIsR0FBRyxDQUFwQixHQUF3QlIsU0FBekIsQ0FBZjtBQUFBLENBQW5DO0FBRUFLLGVBQWUsQ0FBQ1UsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUNFLEtBQUQsRUFBVztBQUNqRCxNQUFJQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxPQUFiLENBQXFCLDBCQUFyQixDQUFqQjs7QUFFQSxNQUFJRixVQUFKLEVBQWdCO0FBQ1pWLElBQUFBLGlCQUFpQixHQUFHVSxVQUFVLENBQUNHLE9BQVgsQ0FBbUJDLFdBQW5CLEdBQWlDLENBQXJEOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3pCLE9BQU8sQ0FBQ0csTUFBNUIsRUFBb0NzQixDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDekIsTUFBQUEsT0FBTyxDQUFDeUIsQ0FBRCxDQUFQLENBQVdaLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCVixpQkFBNUI7QUFDQUksTUFBQUEsWUFBWSxDQUFDaUIsQ0FBRCxDQUFaLENBQWdCWixTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUNMLHNCQUFqQztBQUNIOztBQUVEVCxJQUFBQSxPQUFPLENBQUNVLGlCQUFELENBQVAsQ0FBMkJHLFNBQTNCLENBQXFDRyxHQUFyQyxDQUF5Q1osaUJBQXpDO0FBQ0FJLElBQUFBLFlBQVksQ0FBQ0UsaUJBQUQsQ0FBWixDQUFnQ0csU0FBaEMsQ0FBMENHLEdBQTFDLENBQThDUCxzQkFBOUM7QUFDSDtBQUNKLENBZEQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0ICRvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0ICRidG5PdmVybGF5ID0gJG92ZXJsYXkucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX2J0bicpO1xuXG5jb25zdCAkc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xuY29uc3QgJHNsaWRlTGlzdCA9ICRzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbGlzdCcpO1xuY29uc3QgJHNsaWRlcyA9ICRzbGlkZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faXRlbScpO1xuY29uc3Qgc2xpZGVzTGVuID0gJHNsaWRlcy5sZW5ndGg7XG5jb25zdCBjdXJyZW50U2xpZGVDbGFzcyA9ICdzbGlkZXJfX2l0ZW0tLXNob3duJztcblxuY29uc3QgJGJ0blByZXYgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcHJldicpO1xuY29uc3QgJGJ0bk5leHQgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tbmV4dCcpO1xuXG5jb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3BhZ2luYXRpb24nKTtcbmNvbnN0ICRwYWdpbmF0aW9ucyA9ICRwYWdpbmF0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0nKTtcbmNvbnN0IGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MgPSAnc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnO1xuXG5sZXQgY3VycmVudFNsaWRlSW5kZXggPSAwO1xuXG5jb25zdCBnb1RvU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xuICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFNsaWRlQ2xhc3MpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiAkcGFnaW5hdGlvbnMpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xuICAgIH1cblxuICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gc2xpZGVJbmRleCAgJSBzbGlkZXNMZW47XG4gICAgJHNsaWRlc1tjdXJyZW50U2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChjdXJyZW50U2xpZGVDbGFzcyk7XG4gICAgJHBhZ2luYXRpb25zW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xufVxuXG4kYnRuT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiAkb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS1oaWRkZW4nKSxcbiAgICAgICAgNTAwMFxuICAgIClcbn0pO1xuXG4kYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShjdXJyZW50U2xpZGVJbmRleCArIDEpKTtcbiRidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZUluZGV4IC0gMSArIHNsaWRlc0xlbikpO1xuXG4kcGFnaW5hdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgcGFnaW5hdGlvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0nKTtcblxuICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gcGFnaW5hdGlvbi5kYXRhc2V0LnNsaWRlTnVtYmVyIC0gMTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICRzbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50U2xpZGVDbGFzcyk7XG4gICAgICAgICAgICAkcGFnaW5hdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50UGFnaW5hdGlvbkNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFNsaWRlQ2xhc3MpO1xuICAgICAgICAkcGFnaW5hdGlvbnNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG4gICAgfVxufSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9

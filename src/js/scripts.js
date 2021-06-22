'use strict';

var $btnPrev = document.querySelector('.slider__btn--prev');
var $btnNext = document.querySelector('.slider__btn--next');
var $slideList = document.querySelector('.slider__slides');
var $slides = $slideList.querySelectorAll('.slider__slide');
var currentSlideIndex = 0;
var $paginationList = document.querySelector('.slider__pagination');
var $paginations = $paginationList.querySelectorAll('.slider__pagination-item');

var toSlide = function toSlide(direction) {
  $slides[currentSlideIndex].classList.remove('slider__slide--shown');

  for (var i = 0; i < $slides.length; i++) {
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
};

$btnNext.addEventListener('click', function () {
  return toSlide('next');
});
$btnPrev.addEventListener('click', function () {
  return toSlide('prev');
});
$paginationList.addEventListener('click', function (event) {
  if (event.target.dataset.slideNumber) {
    currentSlideIndex = event.target.dataset.slideNumber - 1;

    for (var i = 0; i < $slides.length; i++) {
      $slides[i].classList.remove('slider__slide--shown');
      $paginations[i].classList.remove('slider__pagination-item--current');
    }

    $slides[currentSlideIndex].classList.add('slider__slide--shown');
    $paginations[currentSlideIndex].classList.add('slider__pagination-item--current');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkYnRuUHJldiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRidG5OZXh0IiwiJHNsaWRlTGlzdCIsIiRzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudFNsaWRlSW5kZXgiLCIkcGFnaW5hdGlvbkxpc3QiLCIkcGFnaW5hdGlvbnMiLCJ0b1NsaWRlIiwiZGlyZWN0aW9uIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaSIsImxlbmd0aCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJzbGlkZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWpCO0FBRUEsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5CO0FBQ0EsSUFBTUcsT0FBTyxHQUFHRCxVQUFVLENBQUNFLGdCQUFYLENBQTRCLGdCQUE1QixDQUFoQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXhCO0FBQ0EsSUFBTU8sWUFBWSxHQUFHRCxlQUFlLENBQUNGLGdCQUFoQixDQUFpQywwQkFBakMsQ0FBckI7O0FBRUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsU0FBRCxFQUFlO0FBQzNCTixFQUFBQSxPQUFPLENBQUNFLGlCQUFELENBQVAsQ0FBMkJLLFNBQTNCLENBQXFDQyxNQUFyQyxDQUE0QyxzQkFBNUM7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxPQUFPLENBQUNVLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDTCxJQUFBQSxZQUFZLENBQUNLLENBQUQsQ0FBWixDQUFnQkYsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLGtDQUFqQztBQUNIOztBQUVELE1BQUlGLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN0QkosSUFBQUEsaUJBQWlCLEdBQUcsQ0FBQ0EsaUJBQWlCLEdBQUcsQ0FBckIsSUFBMEJGLE9BQU8sQ0FBQ1UsTUFBdEQ7QUFDSDs7QUFFRCxNQUFJSixTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDdEJKLElBQUFBLGlCQUFpQixHQUFHLENBQUNBLGlCQUFpQixHQUFHLENBQXBCLEdBQXdCRixPQUFPLENBQUNVLE1BQWpDLElBQTJDVixPQUFPLENBQUNVLE1BQXZFO0FBQ0g7O0FBRURWLEVBQUFBLE9BQU8sQ0FBQ0UsaUJBQUQsQ0FBUCxDQUEyQkssU0FBM0IsQ0FBcUNJLEdBQXJDLENBQXlDLHNCQUF6QztBQUNBUCxFQUFBQSxZQUFZLENBQUNGLGlCQUFELENBQVosQ0FBZ0NLLFNBQWhDLENBQTBDSSxHQUExQyxDQUE4QyxrQ0FBOUM7QUFDSCxDQWpCRDs7QUFtQkFiLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM7QUFBQSxTQUFNUCxPQUFPLENBQUMsTUFBRCxDQUFiO0FBQUEsQ0FBbkM7QUFDQVYsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM7QUFBQSxTQUFNUCxPQUFPLENBQUMsTUFBRCxDQUFiO0FBQUEsQ0FBbkM7QUFDQUYsZUFBZSxDQUFDUyxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pELE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxXQUF6QixFQUFzQztBQUNsQ2QsSUFBQUEsaUJBQWlCLEdBQUdXLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxXQUFyQixHQUFtQyxDQUF2RDs7QUFFQSxTQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULE9BQU8sQ0FBQ1UsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDckNULE1BQUFBLE9BQU8sQ0FBQ1MsQ0FBRCxDQUFQLENBQVdGLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLHNCQUE1QjtBQUNBSixNQUFBQSxZQUFZLENBQUNLLENBQUQsQ0FBWixDQUFnQkYsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLGtDQUFqQztBQUNIOztBQUVEUixJQUFBQSxPQUFPLENBQUNFLGlCQUFELENBQVAsQ0FBMkJLLFNBQTNCLENBQXFDSSxHQUFyQyxDQUF5QyxzQkFBekM7QUFDQVAsSUFBQUEsWUFBWSxDQUFDRixpQkFBRCxDQUFaLENBQWdDSyxTQUFoQyxDQUEwQ0ksR0FBMUMsQ0FBOEMsa0NBQTlDO0FBQ0g7QUFDSixDQVpEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcHJldicpO1xuY29uc3QgJGJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19idG4tLW5leHQnKTtcblxuY29uc3QgJHNsaWRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NsaWRlcycpO1xuY29uc3QgJHNsaWRlcyA9ICRzbGlkZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fc2xpZGUnKTtcbmxldCBjdXJyZW50U2xpZGVJbmRleCA9IDA7XG5cbmNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3BhZ2luYXRpb24nKTtcbmNvbnN0ICRwYWdpbmF0aW9ucyA9ICRwYWdpbmF0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0nKTtcblxuY29uc3QgdG9TbGlkZSA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAkc2xpZGVzW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3NsaWRlLS1zaG93bicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICRwYWdpbmF0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3BhZ2luYXRpb24taXRlbS0tY3VycmVudCcpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBjdXJyZW50U2xpZGVJbmRleCA9IChjdXJyZW50U2xpZGVJbmRleCArIDEpICUgJHNsaWRlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gKGN1cnJlbnRTbGlkZUluZGV4IC0gMSArICRzbGlkZXMubGVuZ3RoKSAlICRzbGlkZXMubGVuZ3RoO1xuICAgIH1cblxuICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fc2xpZGUtLXNob3duJyk7XG4gICAgJHBhZ2luYXRpb25zW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3BhZ2luYXRpb24taXRlbS0tY3VycmVudCcpO1xufVxuXG4kYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvU2xpZGUoJ25leHQnKSk7XG4kYnRuUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvU2xpZGUoJ3ByZXYnKSk7XG4kcGFnaW5hdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2xpZGVOdW1iZXIpIHtcbiAgICAgICAgY3VycmVudFNsaWRlSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5zbGlkZU51bWJlciAtIDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fc2xpZGUtLXNob3duJyk7XG4gICAgICAgICAgICAkcGFnaW5hdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fc2xpZGUtLXNob3duJyk7XG4gICAgICAgICRwYWdpbmF0aW9uc1tjdXJyZW50U2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnKTtcbiAgICB9XG59KTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=

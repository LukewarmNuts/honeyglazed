const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const scrollAmount = galleryItems[0].offsetWidth + parseInt(getComputedStyle(galleryItems[0]).marginLeft) * 2; // Calculate the scroll amount based on the item width and margin

let scrollPosition = 0;

function scrollGallery(direction) {
    const maxScrollPosition = gallery.scrollWidth - gallery.clientWidth;

    scrollPosition += direction * scrollAmount;
    scrollPosition = Math.min(maxScrollPosition, Math.max(0, scrollPosition));

    gallery.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }


// Hide loader after 2 seconds once window fully loads
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.pointerEvents = "none";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // fade out duration
    }, 2000);
  }
});


// Toggle mobile menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Swiper carousel init
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

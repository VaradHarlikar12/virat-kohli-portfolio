const swiper1 = new Swiper("#swiper-1", {
  autoHeight: false,
  effect: "fade",
  loop: true, // Enables infinite looping
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //slidesPerView: 1, Ensures only one slide is visible at a time
  //spaceBetween: 0,
});
const swiper2 = new Swiper("#swiper-2", {
  effect: "fade",
  loop: true, // Enables infinite looping

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  //slidesPerView: 1, Ensures only one slide is visible at a time
  //spaceBetween: 0,
});

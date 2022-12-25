$(() => {
  var theme = new Swiper("#theme-category-swiper", {
    loop: true,
    slidesPerView: "6",
    spaceBetween: 80,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  let newlego = new Swiper("#new-logo-swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".new-lego-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  console.log($(window).outerWidth());
});

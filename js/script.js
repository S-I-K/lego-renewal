$(() => {
  /* theme category */
  var theme = new Swiper("#theme-category-swiper", {
    loop: true,
    slidesPerView: "6",
    spaceBetween: 80,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  /* new legos */
  let newlego = new Swiper("#new-logo-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
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
  /* super mario legos */
  let mario = new Swiper("#mario-swiper", {
    slidesPerView: "4",
    spaceBetween: 40,
  });
});

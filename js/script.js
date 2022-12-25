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
    slidesPerView: 'auto',
  });
  console.log($(window).outerWidth());
});

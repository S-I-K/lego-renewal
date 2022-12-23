$(() => {
  var theme = new Swiper("#theme-category-swiper", {
    loop: true,
    slidesPerView: "6",
    spaceBetween: 80,
  });
  console.log($(window).outerWidth());
});

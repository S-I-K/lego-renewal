$(() => {
  /* swiper.js */
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
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /* super mario legos */
  let mario = new Swiper("#mario-swiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
  });
  /* marvel legos */
  let marvel = new Swiper("#marvel-swiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".marvel-pagination",
      type: "progressbar",
      clickable: true,
    },
  });

  /*************  scrollToGiveClass *************/
  /* header */
  $("header").scrollToGiveClass({
    class: "fixed",
    baseline: 80,
  });
  /* category */
  $(".theme-category .title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $("#theme-category-swiper").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".new-logos h2.title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $("#new-logo-swiper").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".mario-lego-wrap h2.title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $("#mario-swiper").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".mario-lego-wrap .thumb-wrap").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".marvel-lego-wrap h2.title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $("#marvel-swiper").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".marvel-lego-wrap .thumb-wrap").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".lego-story h2.title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".lego-story .story-thumb").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".lego-story .story-txt").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".newsletter-lego").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".newsletter-txt h3.title").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".newsletter-txt .desc").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
  $(".newsletter-txt .more-btn").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 300,
  });
});

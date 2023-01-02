$(() => {
  /* swiper.js */
  /* theme category */
  var theme = new Swiper("#theme-category-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    /* window >= number */
    breakpoints: {
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 80,
      },
    },
  });
  /* new legos */
  let newlego = new Swiper("#new-logo-swiper", {
    centeredSlides: true,
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
    /* window >= number */
    breakpoints: {
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 80,
      },
    },
  });
  /* super mario legos */
  let mario = new Swiper("#mario-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
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
    /* window >= number */
    breakpoints: {
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 80,
      },
    },
  });
  /* marvel legos */
  let marvel = new Swiper("#marvel-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
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
    breakpoints: {
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 80,
      },
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

  /* m-nav menu */
  $(".hamburger").click(function () {
    $(".m-nav").toggle("200");
    $(this).toggleClass("close");
  });
  /* m-nav acodian menu click event */
  $(".menu-title").click(function () {
    $(".sub-menu").stop().slideUp(400);
    $(this).siblings(".sub-menu").stop().slideToggle(400);
    // $(this).parents("li").toggleClass("arrow_action");
  });
  /* mobile footer acodian menu */
  $(".site-map-title").click(function () {
    $(".site-map-contents").stop().slideUp(400);
    $(this).siblings(".site-map-contents").stop().slideToggle(400);
    $(this).children("img").toggleClass("arrow-action");
    $(".site-map-title")
      .children("img")
      .not($(this).children("img"))
      .removeClass("arrow-action");
  });
});

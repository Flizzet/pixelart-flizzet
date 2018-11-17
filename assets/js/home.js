
// Enable smooth scroll with click-to-navigate
$.localScroll({duration:500});
// Enable Slick carousels
$('.style-thumbnails').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: false,
  dots: true,
  adaptiveHeight: true,
  variableWidth: true,
  arrows: true,
  autoplay: true,

  responsive: [
  {
    breakpoint: 775,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

// Enable Slick carousels
$('.showcase-thumbnails').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: false,
  dots: true,
  adaptiveHeight: true,
  variableWidth: true,
  arrows: true,
  autoplay: true,

  responsive: [
  {
    breakpoint: 775,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

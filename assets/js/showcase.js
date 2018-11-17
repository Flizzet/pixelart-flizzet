// Enable tooltips
$('[data-toggle="tooltip"]').tooltip();
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

$("document").ready(function($){
  handleSlick();
  $(window).on("resize", handleSlick);
});

var handleSlick = function(){
  if (($(window).width() < 768) && ($('.slick-initialized').length > 0)) {
    clearButtons();
    unslick();
  }
  else if (($(window).width() >= 768) && ($('.slick-initialized').length == 0)){
    addButtons();
    slick();
  }
}

var unslick = function(){
  $('.variable-width').slick('unslick');
}

var slick = function(){
  $('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
  });
};

var addButtons = function(){
  $('#panelNav').html("<button class='btn-prev'><i class='fa fa-angle-left nav-img'></i></button><button class='btn-next'><i class='fa fa-angle-right nav-img'></i></button>");
}

var clearButtons = function(){
  $('#panelNav').html('');
}
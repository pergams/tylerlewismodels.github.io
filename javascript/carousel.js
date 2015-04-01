$("document").ready(function($){
  handleSlick();
  $(window).on("resize", handleSlick);
});

var handleSlick = function(){
  if (($(window).width() < 600) && ($('.slick-initialized').length > 0)) {
    clearButtons();
    unslick();
  }
  else if (($(window).width() >= 600) && ($('.slick-initialized').length == 0)){
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
  $('#panelNav').html("<button class='btn-prev'><img class='nav-img' src='img/prev.png' /></button><button class='btn-next'><img class='nav-img' src='img/next.png' /></button>");
}

var clearButtons = function(){
  $('#panelNav').html('');
}
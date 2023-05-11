$(document).ready(function(){
    $('ul.about').on('click', 'li:not(.about_us_active)', function() {
        $(this)
        .addClass('about_us_active').siblings().removeClass('about_us_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  $(window).on('scroll', function(){
    if($(this).scrollTop() > 500) {
        $('.menu').fadeIn();
    }
    else {
        $('.menu').fadeOut();
    }
  });
  new WOW().init();
});

  

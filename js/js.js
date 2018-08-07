$(document).ready(function(){
    $('.slick-next').html('<i class="icon-next"></i>');
    $('.slick-next').addClass('fas');
    $('.slick-prev').html('<i class="icon-prev"></i>');
});

$(document).ready(function(){
  $('.slider .slick-next').html('<i class="icon-next"></i>');
  $('.slider .slick-next').addClass('fas');
  $('.slider .slick-prev').html('<i class="icon-prev"></i>');

  $('.menu-link').click(function(){
    $('.items-menu ul').toggleClass('active');
  });

  if ($(window).width() < 768) {
    $('.close-custome').click(function(){
      $('.list-custome').toggleClass('active');
      
    });


 }

});

// for slider customers
$('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 5500,

  });
  
  // for slider news
  $('.slider-news').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,

  });
    
  // for slider logos
$('.slider-logos').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $(window).load(function(){
	
    $(".loading-overlay .lds-ripple").fadeOut(1000,
    function()
    {
       $(this).parent().fadeOut(1500,
       function(){
         $(this).remove();
         });	
      });
    $("body").css("overflow","auto");
    });
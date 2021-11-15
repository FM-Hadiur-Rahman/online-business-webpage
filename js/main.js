$(document).ready(function(){
       $(".slider-attribute").owlCarousel({
            autoplay:true,
            loop:true,
             nav:false,
            dots:true,
         
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    
    
     $(".logo-slider").owlCarousel({
            autoplay:true,
            loop:true,
             nav:false,
            dots:false,
         
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:5
                },
                1000:{
                    items:5
                }
            }
        });
    
    
        $(".new_items").owlCarousel({
            autoplay:true,
            loop:true,
            nav:true,
            dots:false,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
    
   
    
     
    
    $(".search-btn li a").on("click",function(){
$(".search-button").addClass("active");
return false;
});
$(".close-button").on("click", function(){
$(".search-button").removeClass("active");
return false;
});
    
    
    
    jQuery(window).on('scroll', function() {
if ($(this).scrollTop() > 1) {
$('.header').addClass("sticky");
} else {
$('.header').removeClass("sticky");
}
});
    });
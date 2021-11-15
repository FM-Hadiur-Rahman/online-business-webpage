// external js: isotope.pkgd.js



    $(document).ready(function(){
        // init Isotope
$(".protfolio_list").isotope({
itemSelector: '.single_portfolio',
layoutMode: 'fitRows'
});

// Add isotope click function

$('.portfolio_filter li').click(function () {
$(".portfolio_filter li").removeClass("active");
$(this).addClass("active");

var selector = $(this).attr('data-filter');
$(".protfolio_list").isotope({
filter: selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false,
}
});
return false;
    
        
    });
         });

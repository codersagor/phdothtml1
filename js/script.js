$(document).ready(function(){
    
    $(".slider-category").owlCarousel({
        loop: true,
        items: 4,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'> </i> Next","Previous <i class='fa fa-arrow-right'></i>"],
        responsive:{
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            576:{
                items:2
            },
            991:{
                items:3
            },
            992: {
                items: 4
            }
        }
    });


	
})
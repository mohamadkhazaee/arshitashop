$('.document').ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    //get user device width:

    let deviceWidth = window.innerWidth;
    console.log(deviceWidth);
    
    //remove text in header buttons for mobile size
    window.addEventListener("resize", resizeFunctions);
    function resizeFunctions(){
        if(deviceWidth <= 992){
            $('.header-action .dropdown .dropdown-toggle').empty()
        }
    }
    if(deviceWidth <= 992){
        $('.header-action .dropdown .dropdown-toggle').empty()
    }



     //main nav js codes
     var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('#main-nav').addClass("hide-main-nav")
    $('.main-header').addClass('main-header-shadow')
   } else {
    $('#main-nav').removeClass("hide-main-nav")
    $('.main-header').removeClass('main-header-shadow')
   }
   lastScrollTop = st;
});

//responsive main nav

$(".main-nav-toggle").click(()=>{
    $('#main-nav').toggleClass('show-main-nav')
    $('.responsive-overlay').toggleClass('responsive-overlay-show')
})

$(".close-btn-res-menu").click(()=>{
    $('#main-nav').toggleClass('show-main-nav')
    $('.responsive-overlay').toggleClass('responsive-overlay-show')
})

$(".responsive-overlay").click(()=>{
    $('#main-nav').toggleClass('show-main-nav')
    $('.responsive-overlay').toggleClass('responsive-overlay-show')
})

$('.main-menu > li > a').click(function(){
    if(deviceWidth <= 992){
        $(this).parent().find('>ul').toggleClass('d-block')
        $(this).toggleClass('c-red')
    }
})
$('.main-menu > li > ul > li > a').click(function(){
    if(deviceWidth <= 992){
        $(this).toggleClass('c-red')
        $(this).parent().find('>ul').toggleClass('d-block')
    }
})



//////////// owls

$('.owl-main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,

    responsive:{
        0:{
            items:1
        },
        
    }
})
$('.owl-loop-slider-type-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    rtl:true,
    dots:false,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     450:{
    //         items:2
    //     },
    //     650:{
    //         items:1
    //     },
    //     900:{
    //         items:2
    //     },
    //     768:{
    //         items:1
    //     },
    //     992:{
    //         items:4
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
    responsive:{
        0:{
            items:1
        },
        560:{
            items:2
        },
        992:{
            items:3
        },
        1100:{
            items:4
        },
        1400:{
            items:5
        },
    }
})
$('.owl-loop-slider-type-2').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplayTimeout:2500,    
    autoplay:true,
    autoplayHoverPause:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        },
        1400:{
            items:8
        }
    }
})
$('.owl-loop-slider-brands').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplayTimeout:2500,    
    autoplay:true,
    dots:false,
    autoplayHoverPause:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:5
        },
        
    }
})

$('.owl-loop-slider-categories').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoplay:true,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        },
        1400:{
            items:8
        }
    }
})


$('.owl-loop-slider-type3-brands').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoplay:true,
    rtl:true,
    dots:true,
    responsive:{
        0:{
            items:3
        }
    }
})




$('#back-top-btn').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

})




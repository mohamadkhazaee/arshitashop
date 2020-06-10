$('.document').ready(function(){
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
    
   } else {
    $('#main-nav').removeClass("hide-main-nav")
   }
   lastScrollTop = st;
});
})
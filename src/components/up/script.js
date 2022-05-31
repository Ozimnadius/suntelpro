$(window).scroll(function(event){
    if ($(this).scrollTop() > $('header').outerHeight() ){
        $('.up').addClass('active');
    } else{
        $('.up').removeClass('active');
    }
});

$('.up').on('click', function () {
   window.scrollTo({
       top: 0,
       behavior: "smooth"
   });
});
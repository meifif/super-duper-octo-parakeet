//cover

$(window).on('load', function(){
    $('#loader').fadeOut(2000);
    $('#logo').slideDown(2500)
    $('#nav-icons').show(3500)
})

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
$(document).ready(function(){   
    $('.right-top .btn').click(function(){
        $('.right-top-sidebar').fadeIn(500);
        $(this).fadeOut(500);
        $('.right-top .cancel').fadeIn(500);
    });
    $('.right-top .cancel').click(function(){
        $('.right-top-sidebar').fadeOut(500);
        $(this).fadeOut(500);
        $('.right-top .btn').fadeIn(500);
    });


    $('.right-top-sidebar').mouseleave(function(){
        $(this).fadeOut(500);
        $('.right-top .cancel').fadeOut(500);
        $('.right-top .btn').fadeIn(500);
    });

    $('#left-middle-sidebar-btn').hover(function(){
        $('.left-middle-sidebar').animate({
            left : '0'
        });
        $(this).animate({
            left : '-125px'
        });
    })

    $('.left-middle-sidebar').mouseleave(function(){
        $(this).animate({
            left : '-250px'
        });
        $('#left-middle-sidebar-btn').animate({
            left : '-100px'
        });
    });

    $('#right-middle-sidebar-btn').hover(function(){
        $('.right-middle-sidebar').animate({
            right : '0'
        });
        $(this).animate({
            right : '-125px'
        });
    })

    $('.right-middle-sidebar').mouseleave(function(){
        $(this).animate({
            right : '-250px'
        });
        $('#right-middle-sidebar-btn').animate({
            right : '-100px'
        });
    });
});
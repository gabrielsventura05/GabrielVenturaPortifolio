$(document).ready(function() {

    $('nav a').click(function(e){

        e.preventDefault();

        var id = $(this).attr('href');
        targetOffset = $(id).offset().top;
        menuHeight = $('nav').innerHeight();

        console.log(menuHeight)

        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);

       
    });

});
//scrolling effect by using Jquery
$(document).ready(function(){
    $('.scrool-top').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop:$(linkHref).offset().top
        });
        e.preventDefault();
    });
});
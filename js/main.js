//scrolling effect by using Jquery
$(document).ready(function(){
    $('.scrool-top').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop:$(linkHref).offset().top
        },1000);
        e.preventDefault();
    });
});
//this script for scrollReveal

window.sr = ScrollReveal();
sr.reveal('.navbar-header', {
    duration: 1000,
    origin:'top'
});

sr.reveal('.left', {
    duration: 1000,
    origin: 'left'
});
sr.reveal('.right',{
    duration:1000,
    delay: 1000,
    origin: 'right'
});
sr.reveal('#service-body', {
    duration: 1000,
    origin: 'top'
});
sr.reveal('.port', {
    duration: 1000,
    origin: 'top'
});
sr.reveal('.contact', {
    duration: 1000,
    origin: 'top'
});
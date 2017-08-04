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
//typing effect
$('#typing').typeIt({
   strings:["Hello World!",
            "Iam Mithun Reddy Tunga",
            "I am a Front End Developer."
           ],
    speed:70,
    loop:true,
    backLoop:2000,
    breakLines: false
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
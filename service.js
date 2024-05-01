$(function () {
'use strict'; 
var
winH = $(window).height(),
navH = $('.navbar').innerHeight();

    $('.my-slider , .carousel-item').innerHeight(winH - navH);

});
var 
servNav               = document.getElementById('nav-s'),
servBody              = document.getElementsByClassName('serv-Body'),
navbarBrand           = document.getElementsByClassName('navbar-brand'),
links                 = document.getElementsByClassName('navbar-nav'),
myToggle              = document.querySelector('input');



myToggle.onclick = function () {
    'use strict';
    servNav.classList.toggle('colors');
    servBody[0].classList.toggle('night'); 
    navbarBrand[0].classList.toggle('white');
    links[0].classList.toggle('whitelinks')
}






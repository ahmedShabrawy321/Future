// Start Home Darm mode
var
        myBody            = document.getElementById('my-body'),
    navBar                = document.getElementById('nav'),
    links                 = document.getElementById('nav-links'),
    myIntro               = document.getElementById('introduction'),
    myToggle              = document.querySelector('input'),
    landingPage           = document.getElementById('landing'),
    image                 = document.getElementById('image'),
    mainText              = document.getElementsByClassName("main-text"),
    imgs                  = document.getElementsByClassName("img"),
    myBranches            = document.getElementsByClassName('branches'),
    fivediv1              = document.getElementById('five-div-1'),
    fivediv2              = document.getElementById('five-div-2'),
    fivediv3              = document.getElementById('five-div-3'),
    fivediv4              = document.getElementById('five-div-4'),
    fivediv5              = document.getElementById('five-div-5'),
    fiveRight             = document.getElementById('five-right'),
    speaker               = document.getElementById('speaker'),
    darkModeWord          = document.getElementById('Darkmode-word')


myToggle.onclick = function () {
    'use strict';
    myBody.classList.toggle('night');
    navBar.classList.toggle('colors');
    links.classList.toggle('whitelinks');
    myIntro.classList.toggle('whitelinks');
    landingPage.classList.toggle('dark');
    image.classList.toggle('blackback');
    mainText[0].classList.toggle('white');
    mainText[1].classList.toggle('white');
    mainText[2].classList.toggle('white');
    mainText[3].classList.toggle('white');
    mainText[4].classList.toggle('white');
    mainText[5].classList.toggle('white');
    mainText[6].classList.toggle('white');
    mainText[7].classList.toggle('white');
    mainText[8].classList.toggle('white');
    mainText[9].classList.toggle('white');
    imgs[0].classList.toggle("black-shadow");
    imgs[1].classList.toggle("black-shadow");
    imgs[2].classList.toggle("black-shadow");
    myBranches[0].classList.toggle('white-text');
    imgs[3].classList.toggle("black-shadow");
    imgs[4].classList.toggle("black-shadow");
    imgs[5].classList.toggle("black-shadow");
    imgs[6].classList.toggle("black-shadow");
    imgs[7].classList.toggle("black-shadow");
    imgs[8].classList.toggle("black-shadow");
    imgs[9].classList.toggle("black-shadow");
    imgs[10].classList.toggle("black-shadow");
    imgs[11].classList.toggle("black-shadow");
    imgs[12].classList.toggle("black-shadow");
}
// End Home Dark mode


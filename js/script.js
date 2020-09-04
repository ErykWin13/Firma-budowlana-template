// SHOWCONTACT FUNCTION 

const btnShowContact = document.querySelector('.contact button');
const showContact = document.querySelector('.show-contact');

btnShowContact.addEventListener('click', function () {
    showContact.classList.toggle('active');
})



// INTERVAL FUNCTIONS 

const firstPhotosAlbum = [{
        img: 'img/new-home-1664302_1920.jpg'
    },
    {
        img: 'img/new-home-2897352_1920.jpg'
    },
    {
        img: 'img/new-home-4083239_1920.jpg'
    }
];

const secondPhotosAlbum = [{
        img: 'img/chairs-2181977_1920.jpg'
    },
    {
        img: 'img/chairs-2181960_1920.jpg'
    },
    {
        img: 'img/bricks-2181920_1920.jpg'
    }
];

const firstPhotos = document.querySelector('.first-photos');
const secondPhotos = document.querySelector('.second-photos');

const time = 4000;
let active = 0;


const firstSlider = () => {
    active++;
    if (active === firstPhotosAlbum.length) {
        active = 0;
    }
    firstPhotos.src = firstPhotosAlbum[active].img;

}
setInterval(firstSlider, time)


const secondSlider = () => {
    active++;
    if (active === secondPhotosAlbum.length) {
        active = 0;
    }
    secondPhotos.src = secondPhotosAlbum[active].img;

}
setInterval(secondSlider, time)



// BACK TO TOP FUNCTION 

$('.back-to-top').on('click', function () {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 750)
})



// SCROLL FUNCTION 

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();



    const $firstIcon = $('.first-advantage ');
    const $secondIcon = $('.second-advantage ');
    const $thirdIcon = $('.third-advantage ');
    const $fourthIcon = $('.fourth-advantage ');

    // const $firstP = $('.first-advantage ');
    // const $secondP = $('.second-advantage ');
    // const $thirdP = $('.third-advantage ');
    // const $fourthP = $('.fourth-advantage ');

    const $reviewsSection = $('.reviews');
    const $advantagesSection = $('.advantages');

    const $backToTop = $('.back-to-top');



    const firstIconFromTop = $firstIcon.offset().top;
    const secondIconFromTop = $secondIcon.offset().top;
    const thirdIconFromTop = $thirdIcon.offset().top;
    const fourthIconFromTop = $fourthIcon.offset().top;
    const reviewsSectionFromTop = $reviewsSection.offset().top;
    const advantagesSectionFromTop = $advantagesSection.offset().top;



    const firstIconHeight = $firstIcon.height();
    const secondIconHeight = $secondIcon.height();
    const thirdIconHeight = $thirdIcon.height();
    const fourthIconHeight = $fourthIcon.height();
    const reviewsSectionHeight = $reviewsSection.height();
    const advantagesSectionHeight = $advantagesSection.height();



    if (scrollValue > firstIconFromTop + firstIconHeight / 1.5 - windowHeight) {
        $firstIcon.addClass('active');
    }
    if (scrollValue > secondIconFromTop + secondIconHeight / 1.5 - windowHeight) {
        $secondIcon.addClass('active');
    }
    if (scrollValue > thirdIconFromTop + thirdIconHeight / 1.5 - windowHeight) {
        $thirdIcon.addClass('active');
    }
    if (scrollValue > fourthIconFromTop + fourthIconHeight / 1.5 - windowHeight) {
        $fourthIcon.addClass('active');
    }
    if (scrollValue > advantagesSectionFromTop + advantagesSectionHeight / 2 - windowHeight) {
        $backToTop.removeClass('active');
    }
    if (scrollValue > reviewsSectionFromTop + reviewsSectionHeight / 2 - windowHeight) {
        $backToTop.addClass('active');
    }
})
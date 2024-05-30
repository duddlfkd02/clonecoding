//gnb.js
$(function () {
    let depth1 = $('.mainmenu .mainmenu_list > li ');
    let header = $('header');

    depth1.mouseenter(function () {
        header.stop().animate({ height: '500px' });
    }).mouseleave(function () {
        header.stop().animate({ height: '120px' });
    })
});

// swiper slide
$(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})










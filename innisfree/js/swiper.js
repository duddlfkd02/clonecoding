/* main swiper js*/
$(function () {
    var swiper = new Swiper(".pdtslideThumb", {
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".pdtslide", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
})

// sec02 slide swiper
$(function () {
    var swiper = new Swiper(".review_slide01", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesOffsetBefore: 100,
        slidesOffsetAfter: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });
})

// sec03 slide swiper
$(function () {
    var swiper = new Swiper(".review_slide02", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesOffsetBefore: 100,
        slidesOffsetAfter: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
})
/*검색창 롤링*/
$(document).ready(function () {
    let height = $('.scroll_text').height(); // 스크롤 li 전체 높이 변수에 저장
    let listNum = $('.scrollRoll > li').length; //li 개수 저장
    let maxHeight = height * listNum; // 롤링 되어야하는 리스트 전체 높이
    let move = 0;

    function schRolling() {
        move = move + height; //move의 높이값
        $('.scrollRoll').animate({ 'top': -move }, 600, function () { //높이값 만큼 부드럽게 올려주고
            if (move >= maxHeight) { //만약에 전체 높이가 move 값과 같거나 move가 더 크면
                $(this).css('top', 0); //top값을 0으로 만들고
                move = 0; //move값도 초기화!
            };
        });
    };

    setInterval(schRolling, 1500) //1500ms마다 자동롤링
});
/*서브카테고리 슬라이드*/
$(function () {
    let cateMain = $('.sub_category_list > li');
    let cateSub = $('.sub_category_list > li > .sub_category_inner >li');

    $(cateMain).on('mouseover', function () {
        $(this).children(cateSub).stop().slideDown()
    })

    $(cateMain).on('mouseleave', function () {
        $(this).children(cateSub).stop().slideUp()
    })
})

/* swiper js*/
$(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
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

/* 구매 수량 증가 */

let plus = document.querySelector('.plusBtn');
let minus = document.querySelector('.minusBtn');
let result = document.querySelector('.pdtcalc');
let totalCost = document.querySelector('.pdtTot_Sum');
let i = 1;

plus.addEventListener('click', function () {
    i++
    result.value = i;
    let totalPrice = i * 9000;
    totalCost.textContent = totalPrice.toLocaleString();
});

minus.addEventListener('click', function () {
    if (i > 0) {
        i--
        result.value = i;
        let totalPrice = i * 9000;
        totalCost.textContent = totalPrice.toLocaleString();
    } else {
        totalCost.textContent = 9000;
    }

});
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

/* main swiper js*/
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
function changeCount(type) {
    const result = document.getElementById('result');

    let number = result.value;

    if (type === 'plus') {
        number = parseInt(number) + 1;
    } else if (type === 'minus') {
        if (number > 0) {
            number = parseInt(number) - 1;
        } else {
            number = 0;
        }
    }
    result.value = number;

    let totalPrice = number * 9000;
    let totalCost = document.getElementById('pdtTot_Sum');
    totalCost.textContent = totalPrice.toLocaleString();
}

// tabmenu

/* sec02 review 숫자 자동 증가 */

const counter = (counter, max) => {
    let now = max;

    const handle = setInterval(() => {
        counter.innerHTML = Math.ceil(max - now);

        // 목표수치에 도달하면 정지
        if (now < 1) {
            clearInterval(handle);
        }

        // 증가되는 값이 계속하여 작아짐
        const step = now / 10;

        // 값을 적용시키면서 다음 차례에 영향을 끼침
        now -= step;
    }, 50);
}

window.onload = () => {
    // 카운트를 적용시킬 요소
    const counter1 = document.getElementById('rv_count1');
    const counter2 = document.getElementById('rv_count2');
    const counter3 = document.getElementById('rv_count3');
    const counter4 = document.getElementById('rv_count4');

    // 목표 수치
    const max1 = 100;
    const max2 = 96;
    const max3 = 93;
    const max4 = 81.2;

    setTimeout(() => counter(counter1, max1), 2000);
    setTimeout(() => counter(counter2, max2), 2000);
    setTimeout(() => counter(counter3, max3), 2000);
    setTimeout(() => counter(counter4, max4), 2000);
}


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
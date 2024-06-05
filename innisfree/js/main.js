/*검색창 롤링*/
$(document).ready(function () {
    let height = $('.scroll_text').height();
    let listNum = $('.scrollRoll > li').length;
    let maxHeight = height * listNum;
    let move = 0;

    function schRolling() {
        move = move + height;
        $('.scrollRoll').animate({ 'top': -move }, 600, function () {
            if (move >= maxHeight) {
                $(this).css('top', 0);
                move = 0;
            };
        });
    };

    setInterval(schRolling, 1500);
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

/* 탭 이동 pdt_tabmenu */
$(function () {
    $('ul.tabmenu_inner li').click(function () {
        let activeTab = $(this).attr('data-tab');
        $('ul.tabmenu_inner li').removeClass('active');
        $('.tabcon').removeClass('active');

        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    })

});

// 리뷰 탭 클릭시 이동 구현중
function secMove(sec) {
    let offset = $('#tab' + sec).offset();
    $('html, body').animate({ scrollTop: offset.top }, 300);
}
$(function () {
    secMove(sec);
})


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


/* 문의 모달창 */
$(function () {
    $('.qna_modal').hide();
    $('.qnaList').click(function () {
        $('.qna_modal').show();
    })
    $('.modal_close').click(function () {
        $('.qna_modal').hide();
    })

    $('.modal_btn').click(function () {
        alert('문의사항이 등록되었습니다.');
    })
})


/* 고정형 nav 스크롤 */

$(window).scroll(function () {
    let scrollV = $(window).scrollTop();

    if (scrollV > 148) {
        $('.fixedNav').show();
    } else {
        $('.fixedNav').hide();
    }
})



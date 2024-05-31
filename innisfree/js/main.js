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
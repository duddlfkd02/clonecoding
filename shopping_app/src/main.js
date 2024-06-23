// JSON 파일에서 동적으로 items 받아오기
function loadItems() {
    return fetch('data/data.json') // fetch로 json 데이터 받기
        .then(reponse => reponse.json()) // 받아온 데이터가 성공적이면 json 으로 변환
        .then(json => json.items); //json 안에 있는 items 를 return
}

// items 리스트 업데이트 하기
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//받아온 데이터 item들을 HTML로 만들기
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// 버튼이 클릭되었을 때 이벤트 실행
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key === null || value === null) { // 필터링 할 수 있는 정보가 없다면 함수 끝낸다.
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
    // updateItems(items, key, value);
}
// {key : value} 매칭시켜서 invisible 하게 수정하기
// function updateItems(items, key, value) {
//     items.forEach(item => {
//         if (item.dataset[key] === value) {
//             item.classList.remove('invisible');
//         } else {
//             item.classList.add('invisible');
//         }
//     })
// }

//버튼 필터링
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons')

    logo.addEventListener('click', () => {
        displayItems(items);
    });

    buttons.addEventListener('click', event => onButtonClick(event, items));
    //event가 발생한 걸 인자로 전달
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log)




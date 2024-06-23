// JSON 파일에서 동적으로 items 받아오기
function loadItems() {
    return fetch('data/data.json') // fetch로 json 데이터 받기
        .then(reponse => reponse.json()) // 받아온 데이터가 성공적이면 json 으로 변환
        .then(json => json.items); //json 안에 있는 items 를 return
}



// main
loadItems()
    .then(items => {
        console.log(items);
        // displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log)




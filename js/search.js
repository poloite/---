document.getElementById("search_btn").addEventListener('click',search_message);

function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
}

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
}
//문자 길이가 0이거나 null인지 확인하는 함수 사용, 배열로 욕설 입력하고 일치하는 함수가 있으면 함수 중단.

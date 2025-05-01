document.getElementById("search_button_msg").addEventListener('click',search_message);

function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
    alert("공백과 비속어를 검사합니다.");
}

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정

    const forbiddenWords = ["바보", "멍청이", "욕1", "욕2", "욕3"]; //배열로 비속어 목록 만들기

        // 공백 검사
        if (searchTerm === "") {
            alert("검색어를 입력하시오.");
            return false;
        }
    
        // 비속어 포함 검사 배열로 만들었기 때문에 for반복문으로 비속어를 순차적으로 검사한다.
        for (let word of forbiddenWords) {
            if (searchTerm.includes(word)) {
                alert("비속어는 검색이 되지 않습니다.");
                return false;
            }
        }
    
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
}
//문자 길이가 0이거나 null인지 확인하는 함수 사용, 배열로 욕설 입력하고 일치하는 함수가 있으면 함수 중단.

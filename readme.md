🗓️ 3주차 학습 내용
📝 지난 주 내용 살펴보기
문서 시작 태그
<html>
타이틀 제목
<title> </title>
문서 몸체
<body>
문장 정렬
CSS 스타일로 display: flex; justify-content: center;를 사용합니다.
display: flex를 통해 flexbox 컨테이너로 지정하고, justify-content: center로 flex 아이템들을 가운데로 정렬하는 역할을 합니다.
CSS

style="display: flex; justify-content: center;"
문장 크기
HTML에서는 <h1>부터 <h6> 태그를 사용하거나, CSS의 font-size 속성을 사용합니다.
이미지 삽입
<img src="이미지 파일 경로">
밑줄 (수평선)
<hr> (수평선을 삽입하여 내용을 구분합니다.)
✏️ 3주차 연습문제
드랍다운 메뉴에서 비어있는 href의 자리에 링크 삽입하기
<li><a class="dropdown-item" href="https://events.fconline.nexon.com/250424/Both">피파 홈페이지</a></li>
<li><a class="dropdown-item" href="https://shop.fconline.nexon.com/">피파 웹상점</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="https://fconline.nexon.com/datacenter/dailysquad">데이터센터</a></li>
네비게이션 바에 색상 추가하기

<nav class="navbar navbar-expand-lg"> 태그 다음에 bg-primary" data-bs-theme="dark" 코드를 추가합니다.
bg-primary는 배경을 파란색 계열로, data-bs-theme="dark"는 어두운 테마를 적용하여 글씨 색상을 흰색으로 만듭니다.
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">

테이블에 색상 추가하기

테이블의 색상은 테이블 전체, 특정 행 또는 특정 셀에 각각 추가할 수 있습니다. 아래는 테이블 전체에 table-primary 클래스를 적용하여 파란색 계열의 배경색을 추가한 예시입니다.


<table class="table caption-top table-primary" border="5">
🗓️ 4주차 학습 내용
📝 지난 주 내용 살펴보기
<meta> 태그의 추가 위치는?
<meta> 태그는 <head> 태그 내부에 추가합니다.
하이퍼링크
<a href="파일 경로">텍스트</a>
<link>와 하이퍼링크의 차이점은?
<link> 태그: <head> 태그 내부에 추가하며, 주로 현재 문서와 외부 자원(예: CSS 파일)을 연결할 때 사용됩니다.
하이퍼링크 (<a> 태그): <body> 태그 내부에 추가하며, 클릭 시 다른 문서나 페이지의 특정 위치로 이동하는 상호작용을 위해 사용됩니다.
부트스트랩 연동에 추가된 태그 3가지
부트스트랩을 사용하기 위해 HTML 문서에 다음 3가지 태그가 일반적으로 추가됩니다:
CSS 링크:
HTML

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
Viewport 설정 메타 태그 (반응형 디자인을 위해):
HTML

<meta name="viewport" content="width=device-width, initial-scale=1">
JavaScript 번들 (드롭다운, 모달 등 부트스트랩의 동적 기능 사용을 위해):
HTML

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
기본 레이아웃 영역을 무엇이라 하는가?
(답변으로 "테이블?"이라고 하셨는데, 웹 페이지의 주요 레이아웃 영역은 보통 <div> 태그와 함께 시맨틱 태그인 <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> 등을 사용하여 구성합니다. 테이블은 주로 표 형식의 데이터를 나타내는 데 사용됩니다.)
디자인 템플릿 지정에 필요한 것은?
CSS (스타일 정의), JavaScript (동적 기능 추가), 그리고 부트스트랩과 같은 프레임워크/라이브러리가 사용될 수 있습니다.
표 병합을 위한 속성 2가지는?
rowspan: 행(세로)을 병합합니다. (예: <td rowspan="2">)
colspan: 열(가로)을 병합합니다. (예: <td colspan="2">)
✏️ 4주차 연습문제
검색 창 search.js를 수정하여 직접 실행해봅니다.

자바스크립트의 클릭 이벤트 식별자 수정하기

현재 식별자의 값은?
"search_btn"
식별자 값을 search_button_msg로 수정합니다.
JavaScript

document.getElementById("search_button_msg").addEventListener('click', search_message);
Index.html의 버튼 클릭 id 식별자를 수정합니다.

수정된 식별자 값과 일치해야 합니다.
HTML

<button class="btn btn-outline-success" id="search_button_msg" type="submit">검색하기</button>
함수 search_message()를 2개 이상 추가합니다.

JavaScript

function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
}

function search_message(){
    let a = "검색을 수행한다."; // 동일 이름으로 함수를 다시 선언
    alert(a);
}
같은 이름의 함수가 중첩하면 에러가 나는가?
에러는 나지 않습니다. JavaScript에서는 동일한 이름으로 함수를 여러 번 선언하면, 가장 마지막에 선언된 함수가 이전 선언을 덮어쓰게 됩니다.
실행하는 경우 어떤 함수가 우선 순위가 높은가?
가장 마지막에 정의된 "아래에 쓴 검색을 수행한다."가 포함된 함수가 실행되어 해당 메시지가 출력됩니다.
함수 search_message()에 변수를 추가합니다.

let 변수 활용하여 문자열 “검색을 수행합니다”를 저장합니다.
변수를 출력하는 형태로 수정합니다.
JavaScript

function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
}
🗓️ 5주차 학습 내용
📝 지난 주 내용 살펴보기
자바스크립트를 추가하는 태그는?
<script> 태그
파일로 작성된 자바스크립트는 어디에 추가되는가?
<script src="파일경로.js"></script> 태그를 사용하여 HTML 문서의 <head> 또는 <body> 끝부분에 추가됩니다.
자바스크립트가 제어하는 트리구조 문서를 무엇이라 하는가?
DOM (Document Object Model)
자바스크립트 변수 선언 방식 3가지
var, let, const
ES6 표준 이후 안전성을 위해 추가된 변수 선언 방식은?
let, const
문서의 최상위 문서 객체의 이름은?
document
문서의 객체 식별자를 인식하는 메서드는?
document.getElementById("아이디명")
마우스 이벤트 중 더블 클릭의 이름은?
dblclick (예: element.addEventListener('dblclick', function() { ... });)
✏️ 5주차 연습문제
검색 창에 문자열을 검사합니다.

검사할 항목 : 공백, 비속어 5개
JavaScript

// 알림 메시지 함수 (예시)
function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
    alert("공백과 비속어를 검사합니다.");
}

// 검색어 유효성 검사 및 구글 검색 함수
function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어 가져오기

    // 비속어 목록 배열
    const forbiddenWords = ["바보", "멍청이", "욕1", "욕2", "욕3"]; 

    // 공백 검사
    if (searchTerm.trim() === "") { // trim()으로 앞뒤 공백 제거 후 검사
        alert("검색어를 입력하시오.");
        return false; // 함수 종료
    }

    // 비속어 포함 검사 (배열 순회)
    for (let word of forbiddenWords) {
        if (searchTerm.includes(word)) {
            alert("'" + word + "'와(과) 같은 비속어는 검색할 수 없습니다.");
            return false; // 함수 종료
        }
    }

    // 모든 검사를 통과하면 구글 검색 URL 생성 및 새 창에서 열기
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank"); // 새 창에서 구글 검색 결과 페이지 열기
    return true; // 성공적으로 검색 실행 (폼 제출 시 기본 동작 방지용으로 false를 반환할 수도 있음)
}
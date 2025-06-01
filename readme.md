# 웹 프로그래밍 학습 정리

## 3주차 내용

### 지난 주 내용 살펴보기

**문서 시작 태그**
- A) `<html>`

**타이틀 제목**
- A) `<title> </title>`

**문서 몸체**
- A) `<body>`

**문장 정렬**
- A) `style="display: flex; justify-content: center;"`
  - `display: flex`를 통해 flexbox 컨테이너로 지정하고 `justify-content: center`로 flex 아이템들을 가운데로 정렬하는 역할을 한다.

**문장 크기**
- A) `<h1>` ~ `<h6>` 또는 font size

**이미지 삽입**
- A) `<img src="이미지 파일 경로">`

**밑줄**
- A) `<hr>`

### 연습문제

**1. 드랍다운 메뉴에서 비어있는 href의 자리에 링크 삽입하기**

<li><a class="dropdown-item" href="https://events.fconline.nexon.com/250424/Both">피파 홈페이지</a></li> <li><a class="dropdown-item" href="https://shop.fconline.nexon.com/">피파 웹상점</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="https://fconline.nexon.com/datacenter/dailysquad">데이터센터</a></li> ```
2. 네비게이션 바에 색상 추가하기

bg-primary" data-bs-theme="dark"

위의 코드를 <nav class="navbar navbar-expand-lg 다음에 추가하여 배경은 파란색이며, 어두운 테마이기 때문에 글씨의 색깔은 흰색이다.

3. 테이블에 색상 추가하기

테이블의 색상은 테이블 전체에 색상을 추가할 수도 있고, 행과 셀에 각각 추가할 수도 있다.

나는 테이블 전체에 색상을 추가하였다.

<table class="table caption-top table-primary" border="5">

4주차 내용
지난주 내용 살펴보기
<meta> 태그의 추가 위치는?

A) <meta>태그는 <head>태그에 추가한다.

하이퍼링크

A) <a href="파일 경로">

Link와 하이퍼링크의 차이점은

A) link 태그는 <head>태그에 추가하고 하이퍼링크는 <body>태그에 추가한다.

그리고 link태그는 <head>태그 안에 외부 자원(css)을 추가할 때 쓰인다.

하이퍼링크는 상호작용을 하면 링크로 이동할 때 쓰인다.

부트스트랩 연동에 추가된 태그 3가지

text
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
위의 3개의 <link>, <meta>, <script>태그가 추가되었다.

기본 레이아웃 영역을 무엇이라 하는가?

A) 테이블

디자인 템플릿 지정에 필요한 것은?

A) CSS, 자바스크립트, 부트스트랩

표 병합을 위한 속성 2가지는?

A) rowspan: 행 병합, colspan: 열 병합

4주차 연습문제
검색 창 search.js를 수정하여 직접 실행해본다.

자바스크립트의 클릭 이벤트 식별자 수정하기

현재 식별자의 값은?

A) ("search_btn")

식별자 값을 search_button_msg로 수정한다.

A) document.getElementById("search_button_msg").addEventListener('click',search_message);

Index.html의 버튼 클릭 id 식별자를 수정한다.

수정된 식별자 값과 일치해야 한다.

A) <button class="btn btn-outline-success" id="search_button_msg" type="submit">검색하기</button>

함수 search_message()를 2개 이상 추가한다.

text
function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
}

function search_message(){
    let a = "검색을 수행한다.";
    alert(a);
}
같은 이름의 함수가 중첩하면 에러가 나는가? : 에러는 나지 않는다.

실행하는 경우 어떤 함수가 우선 순위가 높은가? : "아래에 쓴 검색을 수행한다."가 출력된다.

함수 search_message()에 변수를 추가한다.

Let 변수 활용하여 문자열 "검색을 수행합니다"를 저장한다.

변수를 출력하는 형태로 수정한다.

text
function search_message(){
    let a = "검색을 수행합니다.";
    alert(a);
}
5주차 내용
지난주 내용 살펴보기
자바스크립트를 추가하는 태그는?

A) <script>태그

파일로 작성된 자바스크립트는 어디에 추가되는가?

A) <script>태그로 html 문서에 추가된다.

자바스크립트가 제어하는 트리구조 문서를 무엇이라 하는가?

A) DOM(Document Object Model)

자바스크립트 변수 선언 방식 3가지

A) var, let, const

ES6 표준 이후 안전성을 위해 추가된 변수 선언 방식은?

A) let, const

문서의 최상위 문서의객체의 이름은?

A) document

문서의 객체 식별자를인식하는 메서드는?

A) getElementById

마우스 이벤트 중 더블 클릭의 이름은

A) dblclick

5주차 연습문제
검색 창에 문자열을 검사한다.

검사할 항목: 공백, 비속어 5개

text
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
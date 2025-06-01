# 📚 자바웹 학습 정리



---

## 📖 목차

- [3주차 - 메타데이터와 하이퍼링크]
- [4주차 - JavaScript 기초-1]
- [5주차 - JavaScript 기초-2]
- [6주차 - FORM을 통한 데이터 전송]
- [9주차 - 입력필터링 및 데이터 저장장]
- [10주차 - 쿠키와 세션션]
- [11주차 - 암호화와 보안 토큰큰]
- [12주차 - 모듈화 및 클래스스]
- [13주차 - 웹 오픈 API]


---

## 🎯 3주차 - 메타데이터와 하이퍼링크

### 💡 지난 주 내용 살펴보기

| 질문 | 답변 |
|------|------|
| **1. 문서 시작 태그** | `<html>` |
| **2. 타이틀 제목** | `<title> </title>` |
| **3. 문서 몸체** | `<body>` |
| **4. 이미지 삽입** | `<img src="이미지 파일 경로">` |
| **5. 밑줄** | `<hr>` |
|**6. 문장 정렬**|`style="display: flex; justify-content: center;"`|
|**설명:** `display: flex`를 통해 flexbox 컨테이너로 지정하고 `justify-content: center`로 flex 아이템들을 가운데로 정렬하는 역할을 한다.|
|**7. 문장 크기**|`<h1>` ~ `<h6>` 또는 font size|

### 🛠️ 3주차 연습문제

### 1️⃣ 드랍다운 메뉴에서 비어있는 href의 자리에 링크 삽입하기

**답변:** ` <li><a class="dropdown-item" href="https://events.fconline.nexon.com/250424/Both">피파 홈페이지</a></li>`<br>
`<li><a class="dropdown-item" href="https://shop.fconline.nexon.com/">피파 웹상점</a></li>`<br> 
`<li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="https://fconline.nexon.com/datacenter/ dailysquad">데이터센터</a></li> ` <br>

### 2️⃣ 네비게이션 바에 색상 추가하기

**추가할 코드:** `bg-primary" data-bs-theme="dark"`

**적용 방법:** 위의 코드를 아래와 같이 추가<br>
`<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">`

**결과:** 배경은 파란색이며, 어두운 테마이기 때문에 글씨의 색깔은 흰색이다.

### 3️⃣ 테이블에 색상 추가하기
**설명:** 테이블의 색상은 테이블 전체에 색상을 추가할 수도 있고, 행과 셀에 각각 추가할 수도 있다.

**적용한 방법:** 테이블 전체에 색상을 추가<br>
`<table class="table caption-top table-primary" border="5">`



---
## 🎯 4주차 - JavaScript 기초-1

### 💡 지난주 내용 살펴보기


| 질문 | 답변 |
|------|------|
| **`<meta>` 태그의 추가 위치는?** | `<meta>`태그는 `<head>`태그에 추가한다. |
| **하이퍼링크** | `<a href="파일 경로">` |
| **기본 레이아웃 영역을 무엇이라 하는가?** | 테이블 | 
|**🔗 Link와 하이퍼링크의 차이점**| **Link 태그:** `<head>`태그에 추가하고 외부 자원(CSS)을 추가할 때 사용 |
|  | **하이퍼링크:** `<body>`태그에 추가하고 상호작용을 하면 링크로 이동할 때 사용|
#### 📦 부트스트랩 연동에 추가된 태그 3가지

`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">` <br>

`<meta name="viewport" content="width=device-width, initial-scale=1">` <br>

`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`

**구성:** `<link>`, `<meta>`, `<script>` 태그를 추가하였다.

#### 🎨 디자인 관련

| 질문 | 답변 |
|------|------|
| **디자인 템플릿 지정에 필요한 것은?** | CSS, 자바스크립트, 부트스트랩 |
| **표 병합을 위한 속성 2가지는?** | `rowspan`: 행 병합, `colspan`: 열 병합 |


### 🛠️ 4주차 연습문제

#### 🔍 검색 창 search.js를 수정하여 직접 실행해보기

**자바스크립트의 클릭 이벤트 식별자 수정하기**

- **현재 식별자의 값:** `("search_btn")`
- **수정된 식별자:** 
`document.getElementById("search_button_msg").addEventListener('click',search_message);`

**Index.html의 버튼 클릭 id 식별자 수정**

**수정된 식별자 값과 일치해야 합니다:**

`<button class="btn btn-outline-success" id="search_button_msg" type="submit">검색하기</button>`


#### 🔄 함수 search_message()를 2개 이상 추가

function search_message(){

    let a = "검색을 수행합니다.";
    alert(a);

}

function search_message(){

    let a = "검색을 수행한다.";
    alert(a);

}

**실험 결과:**
- ❓ **같은 이름의 함수가 중첩하면 에러가 나는가?** → 에러는 나지 않는다.
- ❓ **실행하는 경우 어떤 함수가 우선 순위가 높은가?** → "아래에 쓴 검색을 수행한다."가 출력된다.

#### 📝 함수 search_message()에 변수 추가

**요구사항:**
- Let 변수 활용하여 문자열 "검색을 수행합니다"를 저장
- 변수를 출력하는 형태로 수정

function search_message(){

    let a = "검색을 수행합니다.";
    alert(a);

}



---
## 🎯 5주차 - JavaScript 기초 -2

### 💡 지난주 내용 살펴보기

| 질문 | 답변 |
|------|------|
| **자바스크립트를 추가하는 태그는?** | `<script>`태그 |
| **파일로 작성된 자바스크립트는 어디에 추가되는가?** | `<script>`태그로 html 문서에 추가된다. |
| **자바스크립트가 제어하는 트리구조 문서를 무엇이라 하는가?** | DOM(Document Object Model) |

#### 🔧 변수 선언 방식

| 질문 | 답변 |
|------|------|
| **자바스크립트 변수 선언 방식 3가지** | var, let, const |
| **ES6 표준 이후 안전성을 위해 추가된 변수 선언 방식은?** | let, const |

#### 🌐 DOM 관련

| 질문 | 답변 |
|------|------|
| **문서의 최상위 문서 객체의 이름은?** | document |
| **문서의 객체 식별자를 인식하는 메서드는?** | getElementById |
| **마우스 이벤트 중 더블 클릭의 이름은** | dblclick |

### 🛠️ 5주차 연습문제

#### 🔍 검색 창에 문자열 검사 기능 추가

**검사할 항목:** 공백, 비속어 5개

function search_message(){

    let a = "검색을 수행합니다.";
    alert(a);
    alert("공백과 비속어를 검사합니다.");

}

function googleSearch() {
    
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const forbiddenWords = ["바보", "멍청이", "욕1", "욕2", "욕3"]; //배열로 비속어 목록 만들기

    // 공백 검사<br>
    if (searchTerm === "") {
        alert("검색어를 입력하시오.");
        return false;<br>
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

#### 📝 구현 설명

**공백 검사**
- `searchTerm === ""` 조건으로 빈 문자열 확인
- 공백이면 경고 메시지 출력 후 함수 종료

**비속어 검사**
- 배열로 금지어 목록 생성: `["바보", "멍청이", "욕1", "욕2", "욕3"]`
- `for...of` 반복문으로 각 금지어를 순차적으로 검사
- `includes()` 메서드로 검색어에 금지어 포함 여부 확인

**구글 검색 연동**
- `encodeURIComponent()` 함수로 UTF-8 인코딩 처리
- `window.open()` 메서드로 새 창에서 구글 검색 실행



---
## 🎯 6주차 - FORM을 통한 데이터 전송

### 💡 지난주 내용 살펴보기

#### 📊 JavaScript 데이터 타입

| 질문 | 답변 |
|------|------|
| **JS의 참조 데이터 타입은? 2개 이상** | 객체, 배열, 함수, 자료구조(MAP, SET) |
| **Undefined 데이터 타입의 특징은?** | Undefined는 원시 타입으로 선언 후 값을 할당하지 않은 변수를 말합니다. 그리고 반드시 값을 직접 확인해야 한다. |
| **문자열과 변수를 조합하여 출력하는 방법을 무엇이라 하는가?** | 템플릿 리터럴 |

#### 🌐 HTTP 전송 방식

| 질문 | 답변 |
|------|------|
| **Get / post 2가지 전송방식의 핵심 차이점은?** | Get방식은 URL에 정보가 노출되어 보안이 취약하고 Post방식은 URL에 정보가 노출되지 않아 보안에 용이하다. |
| **페이지 요청에 Utf-8 인코딩 처리 전용 함수는?** | `encodeURIComponent` 함수이다. |

#### ⚙️ JavaScript 기능

| 질문 | 답변 |
|------|------|
| **페이지 로딩과 동시에 js를 호출하는 속성은?** | `defer` 속성이다. |
| **상대경로를 지정하는 경우 상위 폴더를 지정하는 방법은?** | `../`를 사용한다. |
| **자바스크립트의 핵심 타이머 함수는?** | `setTimeout` 함수 |

### 🛠️ 6주차 응용 문제

#### 📄 login 폴더에 logout.html 파일 작성

**요구사항:**
- 기존 login.html 전체 소스코드를 가져온다
- Head 및 body부터 footer 등 기본 소스 코드를 유지한다
- 로그아웃 화면으로 수정한다
- 로그아웃 버튼 기능: 클릭하면 index.html로 연결한다

**구현 과정:**
login.html의 전체 소스코드를 가져와서 logout.html에 필요한 스크립트를 제외한 나머지를 주석처리 하거나 삭제했다.<br>
그리고 원래의 로그인 버튼을 제외한 이메일과 비밀번호 입력창등의 기능들은 삭제했다.

**문제점 및 해결:**
하지만 이 로그아웃 기능은 10주차까지 잘 실행되지 않았다. 그 이유는 `logout_form`과 `logout_btn`이라는 변수가 선언되지 않았고 로그아웃 기능을 하는 함수가 선언되지 않았기 때문이다.<br>
(로그아웃 페이지를 처음 만든 시기가 9주차에서 10주차 사이일 때 만들었다.)<br>
따라서 11주차에 교수님의 솔루션을 받아 `session_del.js`라는 자바스크립트 파일을 따로 만들어서 로그아웃 기능과 세션을 삭제하는 기능을 하는 코드를 만들었다.

#### 💻 logout.html 코드

`<!DOCTYPE html>`

`<html lang="ko">`

     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
         <link rel="stylesheet" href="../css/login.css">
         <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>;         
         <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js" integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <!-- <script type="text/javascript" defer src="../js/session.js" defer></script> -->
          <script type="text/javascript" defer src="../js/session_del.js" defer></script>
          <!-- <script type="text/javascript" defer src="../js/login.js" defer></script> -->
     
     <body>
         <section class="vh-100 gradient-custom">
             <div class="container py-5 h-100">
                 <div class="row d-flex justify-content-center align-items-center h-100">
                     <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                         <div class="card bg-dark text-white" style="border-radius: 1rem;">
                             <div class="card-body p-5 text-center">
                                 <div class="mb-md-5 mt-md-4 pb-5">
                                     <form id="logout_form" method="get" action="../Web_main 20220987/Index.html"> 
                                        <h2 class="fw-bold mb-2 text-uppercase">로그아웃 메인화면</h2>
                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id="logout_btn" type="button">로그아웃</button> //타입을 button이라 하지 않으면 자바 스크립트를 실행하지 않고 그냥 form을 실행시킨다.
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>           
         </section>
     </body>

`</html>` 


#### 📝 session_del.js 코드

function session_del() {

    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } 
    else {
        alert("세션 스토리지 지원 x");
    }

}

const check = () => {

    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
    session_del(); // 세션 삭제
    logoutForm.submit();

}    

document.getElementById("logout_btn").addEventListener('click', check);

#### 🔧 중요한 구현 포인트
- session_del.js를 logout_html에 연동하기.
- 정확한 ID명(logout_btn)를 logout.html에 `<form>`에 입력하기



### 🛠️ 6주차 연습문제
#### 📋 JS 및 HTML 정리하기
- 완료 사항: 들여쓰기 및 head 태그에 자바스크립트 정리 완료
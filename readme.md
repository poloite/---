**Readme.md를 정리할 때는 AI의 힘을 많이 빌렸지만 "자습" 폴더에서 "자바웹 자습"을 보시면 AI의 힘을 빌리지 않은 내용을 볼 수 있습니다.**

# 📚 자바웹 학습 정리



---

## 📖 목차

- [3주차 - 메타데이터와 하이퍼링크]
- [4주차 - JavaScript 기초-1]
- [5주차 - JavaScript 기초-2]
- [6주차 - FORM을 통한 데이터 전송]
- [9주차 - 입력필터링 및 데이터 저장]
- [10주차 - 쿠키와 세션]
- [11주차 - 암호화와 보안 토큰]
- [12주차 - 모듈화 및 클래스]
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



---
## 🎯 9주차 - 입력필터링 및 데이터 저장

### 💡 지난주 내용 살펴보기

#### 🚀 ES6 화살표 함수

| 질문 | 답변 |
|------|------|
| **ES6 버전 화살표 함수에서 사용 제한된 함수는?** | 생성자 함수, yield 키워드 |
| **기존 function이나 var등 선언 위치에 상관없이 인식하는 기능은?** | 호이스팅(Hoisting) |

#### 📝 Form 처리

| 질문 | 답변 |
|------|------|
| **Form 전송 시에 get 방식으로 url에 파라미터를 전송하기 위한 추가 속성은?** | `<input>` 태그의 name속성을 추가한다. |
| **Label 태그의 주요 기능은 무엇인가?** | `<form>`요소에 의미를 부여하고 사용성을 향상시키며 웹 접근성을 높이는 중요한 역할을 한다. |
| **Form도 이름을 지정하여 하나의 식별자로 정의할 수 있는가?** | form도 하나의 고유 식별자로 지정할 수 있다. |

#### 🔧 JavaScript 기능

| 질문 | 답변 |
|------|------|
| **입력 값의 공백을 제거하는 함수 이름은?** | `trim()` |
| **자바스크립트 내부에서 submit 하는데 html에서 버튼의 type은?** | button, 타입을 버튼으로 지정하고 id로 식별하여 `loginForm.submit()`을 호출한다. |
| **값 비교에 ===는 무엇을 더 검사하는가?** | `==`는 값만 비교하고 `===`는 값과 데이터 타입을 추가로 비교한다. |

### 🛠️ 9주차 응용 문제

#### 📏 로그인 입력 길이 제한

**이메일 10글자 이하, 패스워드 15글자 이하 수정**

이메일은 도메인까지 포함해서 10글자 이하가 될 수도 있겠지만 대부분 10글자 이상이 될 수밖에 없다.<br>
그래서 `@`부터 끝까지 인식하지 못하게 하여 아이디 부분만 10글자 이하로 조건을 걸어 구현했다.

**login.js의 check_input함수에 추가한다.** <br>
if (!emailValue.includes('@')) {

    alert('올바른 이메일 형식이 아닙니다.'); //이메일 입력칸이기 때문에 @라는 문자가 들어가지 않으면 로그인 되지 않게 추가로 구현을 했다.
    return false;

}

// 로컬 파트(@ 앞부분)만 추출하여 길이 검사<br>
const localPart = emailValue.split('@');<br> 
//@를 기준으로 앞 뒤로 배열을 생성하여 첫 번째 인덱스(아이디 부분)을 localPart에 저장한다.

    if (localPart.length > 10) {
    alert('이메일의 @ 앞부분은 10글자 이하로 입력해야 합니다.');
    return false;

}

if (localPart.length < 3) {

    alert('이메일의 @ 앞부분은 최소 3글자 이상 입력해야 합니다.');
    return false;

}

if (passwordValue.length > 15) {

    alert('비밀번호는 15글자 이하로 입력해야 합니다.');
    return false;

}


#### 🔒 로그인 입력 제한(패턴식 활용)

**1. 3글자 이상 반복 입력 x**

**login.js의 check_input함수에 추가한다.** <br>
// 3글자 이상 반복 입력 검사<br>
글자 반복에 대해서는 아이디부분만 인식해서 검사할 필요가 없다고 생각해서 아이디 부분만 인식하라는 조건을 추가하진 않았다.<br>

const repeatedPattern = /(.{3,})\1/; <br>
// {3,} - 수량자로 바로 앞의 패턴이 3번 이상 반복되어야 함을 의미<br>
// \1 - 백레퍼런스로 첫 번째 캡처 그룹에서 매칭된 내용과 동일한 텍스트를 다시 찾는 역할

if (repeatedPattern.test(emailValue)) {

    alert('이메일에 3글자 이상 반복되는 패턴은 사용할 수 없습니다.');
    return false;

}

if (repeatedPattern.test(passwordValue)) {

    alert('패스워드에 3글자 이상 반복되는 패턴은 사용할 수 없습니다.');
    return false;

}

**2. 연속되는 숫자 2개 이상 반복 입력 x**

// 연속되는 숫자 2개 이상 반복 검사<br>
const consecutiveNumbers = /(\d{2,})/g;<br>
// \d - 숫자 문자(0-9)를 의미하는 메타문자. [0-9]와 동일한 의미<br>
// {2,} - 수량자로, 바로 앞의 패턴이 2번 이상 반복되어야 함을 의미<br>
// g - 전역 플래그로, 문자열에서 첫 번째 매치만 찾는 것이 아니라 모든 매치를 찾는 역할<br>

const emailMatches = emailValue.match(consecutiveNumbers);<br>

if (emailMatches) {

    for (let match of emailMatches) {
        const regex = new RegExp(match.replace(/\d/g, '\d'), 'g');
        const occurrences = (emailValue.match(regex) || []).length;
        if (occurrences > 1) {
            alert('이메일에 연속되는 숫자 2개 이상이 반복될 수 없습니다.');
            return false;
        }
    }

}

const passwordMatches = passwordValue.match(consecutiveNumbers);

if (passwordMatches) {

    for (let match of passwordMatches) {
        const regex = new RegExp(match.replace(/\d/g, '\d'), 'g');
        const occurrences = (passwordValue.match(regex) || []).length;
        
        if (occurrences > 1) {
        alert('패스워드에 연속되는 숫자 2개 이상이 반복될 수 없습니다.');
        return false;
        }
    }

}


### 💡 지난주 내용 살펴보기2

#### 🔍 정규표현식 및 보안

| 질문 | 답변 |
|------|------|
| **정규표현식의 문자열을 검사하는 함수는?** | `match` 함수 |
| **정규표현식에서 한 개이상을 나타내는 기호표현은?** | `+` |
| **특수문자를 필터링 해야 하는 이유는?** | 서버 내부 시스템 명령을 악의적으로 수행 가능하기 때문이다. |
| **DOMPurify 라이브러리의 핵심 검사 함수는?** | `sanitized` 함수 |

#### 🛠️ 쉘 스크립팅

| 질문 | 답변 |
|------|------|
| **쉘 스크립팅에서 명령 실행 순서를 나타내는 특수 문자는?** | 파이프 (`|`) |
| **쉘 스크립팅에서 명령을 구분하는 특수 문자는?** | 세미콜론 (`;`) |



---
## 🎯 10주차 - 쿠키와 세션

### 💡 지난주 내용 살펴보기

#### 🍪 쿠키 관리

| 질문 | 답변 |
|------|------|
| **쿠키 저장소 대신 사용할 수 있는 영구적인 저장소는?** | 로컬 스토리지(Local storage) |
| **자바스크립트에서 지원하는 쿠키 객체의 이름은?** | document.cookie (document 객체의 cookie 속성) |
| **쿠키를 삭제하려면 무엇을 수정해야 하는가?** | 만료 날짜를 과거(-1)로 수정하거나 브라우저별로 방법이 다르지만 브라우저 자체에서 쿠키를 삭제하는 방법이 있습니다. |

#### 🔒 쿠키 보안

| 질문 | 답변 |
|------|------|
| **쿠키를 설정할 때 보안옵션 설정은?** | samesite속성을 사용합니다. |
| **다른 도메인에서 쿠키전송을 차단하는 정책을 무엇이라 하는가?** | CORS정책 |
| **쿠키 내부의 키(KEY)에 저장할 수 있는 데이터타입/자료구조는?** | 문자열로만 저장할 수 있습니다. 다른 데이터타입으로 저장하려면 직렬화(Serialization)를 통해 문자열로 변환해야 합니다. |

### 🛠️ 10주차 응용 문제

#### 🍪 쿠키 파트 응용 문제 (login.js에 추가)

#### 🍪 로그인/로그아웃 횟수 쿠키 저장하기

**login.js에 추가 구현**
- 로그인 `login_count()` 함수
- 쿠키 이름: `login_cnt`
- 로그아웃 `logout_count()` 함수  
- 쿠키 이름: `logout_cnt`

**기능 구현**
- 버튼을 클릭할 때마다 횟수(정수)를 증가
- 기존 쿠키의 카운트 값을 얻는다
- 쿠키의 값을 +1 업데이트 한다

**로그인 login_count() 함수, 쿠키 이름: login_cnt**

const login_count = () => {

    const cookieValue = getCookie("login_cnt");
    const currentCount = cookieValue && cookieValue !== "" ? parseInt(cookieValue) : 0;
    const newCount = currentCount + 1;

    setCookie("login_cnt", newCount.toString(), 30);

    console.log("로그인 횟수:", newCount);
    alert("로그인 횟수: " + newCount + "회");

};


**구현 포인트:** check_input 함수 마지막 부분에 `login_count();`를 추가합니다. 그 이유는 로그인 과정을 마친 뒤 마지막에 횟수를 추가하기 위해서이다.

**로그아웃 logout_count() 함수, 쿠키 이름: logout_cnt**

const logout_count = () => {

    const cookieValue = getCookie("logout_cnt");
    const currentCount = cookieValue && cookieValue !== "" ? parseInt(cookieValue) : 0;
    const newCount = currentCount + 1;

    setCookie("logout_cnt", newCount.toString(), 30);

    console.log("로그아웃 횟수:", newCount);
    alert("로그아웃 횟수: " + newCount + "회");

};


**전역 함수 등록**

// 8. 전역 함수 등록 (session_del에 사용할 수 있도록 전역 변수로 등록했다.)<br>
export { login_count, logout_count };


#### 🚪 로그아웃 기능 구현 문제 해결

**초기 구현 시도**

**session_del.js에 다음과 같이 추가**

import { logout_count } from './login.js';

const check = () => {

    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
    logout_count(); //로그아웃 횟수
    session_del(); // 세션 삭제
    logoutForm.submit();

};


**문제점 발견**
logout.html에서 session_del.js를 로드할 때 login.js에서 임포트한 session.js의 `session_check()` 함수가 실행되어 로그아웃 페이지로 갈 때 "이미 로그인 되었습니다."라고 메세지가 뜨면서 index_login.html파일로 다시 돌아가는 문제 발생.


**최종 해결책**

여러러 방법으로도 로그아웃 버튼 클릭 시 아무 반응이 없어서 **모든 함수를 session_del.js에 직접 구현**:

// 쿠키 함수들을 직접 구현<br>
const getCookie = (name) => {

    const cookie = document.cookie;,
    if (cookie != "") {
        const cookie_array = cookie.split("; ");
        for (const index in cookie_array) {
            const cookie_name = cookie_array[index].split("=");
            if (cookie_name == name) {
                return unescape(cookie_name);
            }
        }
    }
    return "";
};

const setCookie = (name, value, expiredays) => {

    const date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";

};

const logout_count = () => {

    console.log('logout_count 함수 실행됨');
    const cookieValue = getCookie("logout_cnt");
    const currentCount = cookieValue && cookieValue !== "" ? parseInt(cookieValue) : 0;
    const newCount = currentCount + 1;

    setCookie("logout_cnt", newCount.toString(), 30);

    console.log("로그아웃 횟수:", newCount);
    alert("로그아웃 횟수: " + newCount + "회");

};

const check = () => {
    
    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
        logout_count(); //추가된 부분
        session_del(); // 세션 삭제
      
    logoutForm.submit();

}   

### 🛠️ 10주차 응용문제2

#### 🚫 세션 삭제 기능 추가

**10주차 수업 시간에 구현을 하였지만 기능이 제대로 작동하지 않았다.**<br>
**11주차에서 교수님의 솔루션을 받아 session_del.js를 따로 만들어 로그아웃 기능과 세션 삭제 기능을 구현하였고 코드는 6주차에 나와있다.**


### 🛠️ 10주차 연습문제

#### 🚫 로그인 실패 횟수 제한 기능

**로그인 실패 및 제한하는 함수들 구현**

아래의 코드들을 login.js에서 login_count 위에 추가


// 분 단위 쿠키 설정 함수(원래 login.js에 있는 setCookie는 일(day)단위로 쿠키를 저장하기 때문에 분 단위로 저장하기 위해 따로 쿠키를 저장하는 함수를 만들었다.)<br>
const setCookieMinutes = (name, value, expireMinutes) => {

    const date = new Date();
    date.setTime(date.getTime() + (expireMinutes * 60 * 1000));
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";

};

// 로그인 실패 횟수 관리 함수<br>
const login_failed = () => {

    const cookieValue = getCookie("login_failed_cnt");
    const currentCount = cookieValue && cookieValue !== "" ? parseInt(cookieValue) : 0;
    const newCount = currentCount + 1;

    setCookie("login_failed_cnt", newCount.toString(), 1); // 1분 동안 유지

    console.log("로그인 실패 횟수:", newCount);
    if (newCount >= 3) {
        alert("로그인 실패 횟수가 3회에 도달했습니다. 로그인이 제한됩니다.");
        setCookie("login_blocked", "true", 1);
        return true; // 제한 상태 반환
    } else {
        alert(`로그인 실패 횟수: ${newCount}회 (3회 도달 시 로그인 제한)`);
        return false; // 아직 제한되지 않음
    }

};

// 로그인 제한 상태 확인 함수<br>
const check_login_blocked = () => {

    const blockedStatus = getCookie("login_blocked");
    const failedCount = getCookie("login_failed_cnt");

    if (blockedStatus === "true" || parseInt(failedCount) >= 3) {
        return true;
    }
    return false;

};

// 로그인 실패 횟수 초기화 함수 (로그인 성공 시 사용)<br>
const reset_login_failed = () => {

    setCookie("login_failed_cnt", "", -1); // 쿠키 삭제
    setCookie("login_blocked", "", -1); // 제한 상태 쿠키 삭제

};


#### 📺 로그인 제한 상태 화면 출력

**로그인이 제한된 상태를 화면에 출력하기 위해서 login.js에 init함수를 수정한다.**

function init(){
    
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");

    if(get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }

    // 로그인 제한 상태 확인 및 표시
    if (check_login_blocked()) {
        const failedCount = getCookie("login_failed_cnt") || 0;
        
        // 경고 메시지 표시<br>
        const warningDiv = document.createElement('div');
        warningDiv.style.color = 'red';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.textAlign = 'center';
        warningDiv.style.marginBottom = '10px';
        warningDiv.innerHTML = `⚠️ 로그인이 1분간 제한되었습니다<br>실패 횟수: ${failedCount}회`;
        
        // 로그인 폼 위에 경고 메시지 삽입
        const loginForm = document.getElementById('login_form');
        loginForm.parentNode.insertBefore(warningDiv, loginForm);
        
        // 입력 필드 비활성화
        document.getElementById('typeEmailX').disabled = true;
        document.getElementById('typePasswordX').disabled = true;
        document.getElementById('login_btn').disabled = true;
    } else {
        // 현재 실패 횟수 표시 (있는 경우)
        const failedCount = getCookie("login_failed_cnt");
        if (failedCount && parseInt(failedCount) > 0) {
            const infoDiv = document.createElement('div');
            infoDiv.style.color = 'orange';
            infoDiv.style.textAlign = 'center';
            infoDiv.style.marginBottom = '10px';
            infoDiv.innerHTML = `⚠️ 로그인 실패 횟수: ${failedCount}회 (3회 도달 시 제한)`;
            
            const loginForm = document.getElementById('login_form');
            loginForm.parentNode.insertBefore(infoDiv, loginForm);
        }
    }

session_check();

}


#### 🔧 중요한 구현 포인트

**쿠키 만료 시간 설정**
- `setCookie("login_failed_cnt", newCount.toString(), 1)` - 1분 동안만 유지
- 시간이 지나면 자동으로 제한이 해제되는 보안 메커니즘

**로그인 실패 조건 설정**
- 여태까지 만들었던 로그인이 되기 위한 조건문(if문) 안에 login_failed()를 추가해줘야 한다.
- EX) if (passwordValue.length > 15) {

         alert('비밀번호는 15글자 이하로 입력해야 합니다.');
         login_failed(); // 실패 카운트 증가
        return false;
      
      }

**동적 UI 생성**
- `document.createElement('div')`로 경고 메시지를 동적으로 생성
- `insertBefore()`로 기존 폼 위에 메시지 삽입

**입력 필드 비활성화**
- `disabled = true`로 로그인 제한 시 모든 입력을 차단
- 사용자가 우회할 수 없도록 완전 차단

**보안 쿠키 설정 예시**
document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";



---

## 🎯 11주차 - 암호화와 보안 토큰

### 💡 지난주 내용 살펴보기

#### 🔍 DOM 조작 및 스토리지

| 질문 | 답변 |
|------|------|
| **getElementById를 대체할 수 있는 이 함수는?** | querySelector 함수 |
| **세션 스토리지 객체의 이름은?** | sessionStorage |
| **세션 스토리지에 저장된 모든 정보를 삭제하는 함수는?** | clear() |
| **세션 스토리지의 자료구조의 구성은?** | 키-값 쌍 Key-Value |

#### 🔐 쿠키 vs 세션 스토리지

**기존 쿠키와 세션의 저장 유지하는 방법에 차이점**
- **쿠키**: 유효기간이 정해져 있어 유효기간이 지나면 삭제되고, 쿠키는 모든 탭에 공유된다
- **세션**: 윈도우나 브라우저 탭을 닫으면 삭제되고, 세션은 하나의 탭에만 공유된다(범위제한)

**세션 스토리지는 쿠키에 비해 안전한가?**
- **쿠키**: 로컬에 저장하기 때문에 해킹 위험이 존재하고 장시간 신뢰할 수 없다
- **세션**: 서버에서 처리 및 저장하기 때문에 비교적 안전하다

### 🛠️ 11주차 응용 문제

#### 🔒 세션 암호화 관련 문제

**구현 조건**
1. 웹 브라우저 내장 라이브러리
2. Web Crypto API 활용하기
3. 참고: HTTPS 전용이지만 수행 가능

#### 🔐 AES-256-GCM 대칭 암호 알고리즘 구현

**crypto2.js를 생성하고 암/복호화 함수를 정의한다**

import { session_set, session_get, session_get_web ,session_check } from './session.js'; //session_get_web 가져오기

// Web Crypto API로 암호화하는 함수<br>
export async function encrypt_text_web(password) {

    try {

        const key = "web_crypto_key"; // 클라이언트 키
        const rk = key.padEnd(32, " "); // AES256은 key 길이가 32

        // 키를 CryptoKey 객체로 변환
        const cryptoKey = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(rk),
            { name: "AES-GCM" },  //AES-256-GCM 대칭 암호 알고리즘 구현
            false,
            ["encrypt"]
        );
        
        // 랜덤 IV 생성 (12바이트)
        const iv = crypto.getRandomValues(new Uint8Array(12));
        
        // 암호화 수행
        const encrypted = await crypto.subtle.encrypt(
            {
                name: "AES-GCM",  //AES-256-GCM 대칭 암호 알고리즘 구현
                iv: iv
            },
            cryptoKey,
            new TextEncoder().encode(password)
        );
        
        // IV + 암호화된 데이터를 Base64로 인코딩
        const combined = new Uint8Array(iv.length + encrypted.byteLength);
        combined.set(iv);
        combined.set(new Uint8Array(encrypted), iv.length);
        
        return btoa(String.fromCharCode.apply(null, combined));
    } catch (error) {
        console.error('Web Crypto 암호화 오류:', error);
        return null;
     }

}

// Web Crypto API로 복호화하는 함수<br>
export async function decrypt_text_web() {

    try {
            const key = "web_crypto_key"; // 서버의 키
            const rk = key.padEnd(32, " "); // AES256은 key 길이가 32

            // 세션에서 암호화된 데이터 가져오기
            const encryptedData = await session_get_web();
            if (!encryptedData) {
                console.log("암호화된 데이터가 없습니다.");
                return;
            }
            
            // Base64 디코딩
            const combined = new Uint8Array(
                atob(encryptedData).split('').map(char => char.charCodeAt(0))
            );
            
            // IV와 암호화된 데이터 분리
            const iv = combined.slice(0, 12);
            const encrypted = combined.slice(12);
            
            // 키를 CryptoKey 객체로 변환
            const cryptoKey = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(rk),
                { name: "AES-GCM" },  //AES-256-GCM 대칭 암호 알고리즘 구현
                false,
                ["decrypt"]
            );
            
            // 복호화 수행
            const decrypted = await crypto.subtle.decrypt(
                {
                    name: "AES-GCM",  //AES-256-GCM 대칭 암호 알고리즘 구현
                    iv: iv
                },
                cryptoKey,
                encrypted
            );
            
            const result = new TextDecoder().decode(decrypted);
            console.log("Web Crypto 복호화 결과:", result);
            return result;
        } catch (error) {
            console.error('Web Crypto 복호화 오류:', error);
            return null;
         }

}


#### 🔗 로그인, 로그인 후 페이지에 연결

**session.js에서 수정한 코드**

import { encrypt_text_web, decrypt_text_web } from './crypto2.js'; // 새로운 Web Crypto, 맨 위에 추가

//session_set 함수 수정
export async function session_set(){ //세션 저장(객체), async추가

    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
    const obj = { // 객체 선언
        id : id.value,
        otp : random
    }
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        let en_text = await encrypt_text(objString); // 암호화 11주차 문제 풀 시 await 추가
        const encryptedText = await encrypt_text_web(objString); //11주차 문제를 통해 추가한 내용
        sessionStorage.setItem("Session_Storage_id", id.value);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
        sessionStorage.setItem("Session_Storage_pass2",encryptedText ); // 새로운 Web Crypto, 세션에 Session_Storage_pass2로 저장
    } else {
        alert("세션 스토리지 지원 x");
    }

}

//기존 session_get() 함수 아래에다가 추가
export async function session_get_web() {

    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass2");
    } else {
        alert("세션 스토리지 지원 x");
    }

}


**login.js 수정사항**
- session_set 함수에 새로운 crypto를 추가하였기 때문에 login.js에서는 그대로 session_set함수만 불러오면 된다
- 추가한 점이라고 하면 login.js에 check_input 함수에서 `session_set()` 앞에다가 `await`을 붙인다

**로그인 후 페이지는 login2.js와 연동이 되기 때문에 첫 번째 줄에 아래의 코드를 추가하였다**

**login2.js 수정사항**

**첫 번째 줄에 아래의 코드를 추가한다:**

import { decrypt_text_web } from './crypto2.js';


**그리고 login2.js에 init_logined()함수를 수정한다:**

function init_logined(){

    if(sessionStorage){
        decrypt_text(); // 복호화 함수
        decrypt_text_web();//pass2 복호화 함수, 수정한 부분
    }
    else{
        alert("세션 스토리지 지원 x");
    }

}


**주의할 점**: 관련된 html파일에서 스크립트 태그 타입이 module로 변경이 되었는지 확인한다.

### 🛠️ 11주차 연습문제

#### 🚪 로그아웃 처리

**로그아웃 기능 추가**
- JWT 토큰(jwt_token)을 삭제하는 함수 구현하기
- 기존에는 로그아웃과 동시에 쿠키, 세션을 삭제
- 로그인 이후 로컬스토리지의 토큰을 삭제한다
- 참고: `.removeItem` 메소드를 활용한다

**session_del.js 수정**

**로그아웃 기능을 하는 파일은 session_del.js이다. 따라서 세션과 JWT토큰을 한번에 지울 수 있도록 session_del()함수를 수정한다:**

function session_del() {

    if (sessionStorage) {
        // 모든 세션 스토리지 데이터를 한 번에 삭제
        sessionStorage.clear();
        // JWT 토큰 삭제 추가
        localStorage.removeItem('jwt_token'); //추가된 부분, 조건에 맞는 .removeItem 메소드를 활용

        console.log('세션 스토리지와 JWT 토큰이 삭제되었습니다.');
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지와 JWT 토큰을 삭제합니다.');
    } 
    else {
        alert("세션 스토리지 지원 x");
    }

}


#### 🔧응용문제, 연습문제 중요한 구현 포인트

**Web Crypto API 특징**
- AES-256-GCM 알고리즘으로 기존 CBC보다 강화된 보안을 제공한다
- 랜덤 IV를 매번 생성하여 패턴 분석을 방지한다
- HTTPS 환경에서만 작동하므로 보안이 강화된다

**비동기 처리**
- Web Crypto API는 모든 함수가 Promise를 반환하므로 `async/await` 사용이 필수다
- 기존 동기 함수들과 혼용 시 적절한 비동기 처리가 중요하다

**완전한 로그아웃**
- 세션 스토리지 삭제 (sessionStorage.clear())
- JWT 토큰 삭제 (localStorage.removeItem())
- 쿠키 삭제 (기존 기능 유지)

---

## 🎯 12주차 - 모듈화 및 클래스

### 🛠️ 12주차 연습문제

#### 🔐 회원가입 후 암호화된 객체 저장하기

**구현 조건**
1. 회원가입 후 암호화된 객체 저장하기
2. 세션에 암호화하여 저장

**join.js를 수정하고 암호화 저장 기능을 추가한다**

import { encrypt_text } from './crypto.js'; // 맨 위에 추가

function join(){ // 회원가입 기능

    let form = document.querySelector("#join_form"); // 로그인 폼 식별자
    let name = document.querySelector("#form3Example1c");
    let email = document.querySelector("#form3Example3c");
    let password = document.querySelector("#form3Example4c");
    let re_password = document.querySelector("#form3Example4cd");
    let agree = document.querySelector("#form2Example3c");

    form.action = "../Web_main 20220987/index.html"; // 로그인 성공 시 이동
    form.method = "get"; // 전송 방식

    if(name.value.length === 0 || email.value.length === 0 || password.value.length === 0 || re_password.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
    }
    else{
        const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입 정보 객체 생성
        
        [추가] 회원가입 객체를 JSON 문자열로 변환 암호화 함수에 전달하기 위한 직렬화 과정, crypto.js의 암호화 함수 호출
        const encrypted = encrypt_text(JSON.stringify(newSignUp.getUserInfo()));
        [추가] 암호화된 회원가입 정보를 세션 스토리지에 저장, 키: 'encryptedSignupData', 값: 암호화된 문자열
        sessionStorage.setItem('encryptedSignupData', encrypted);
        
        session_set2(newSignUp); // 세션 저장 및 객체 전달
        form.submit(); // 폼 실행
    }

}


#### 🔓 로그인 후 복호화된 객체 내용 출력하기

**구현 조건**
1. 암호화된 회원가입 정보를 복호화
2. 콘솔에 출력

**로그인 후 복호화된 객체 내용을 출력하기 위해서 crypto.js와 로그인 후 페이지이기 때문에 index_login.html과 연결된 login2.js를 수정하였다.**

**crypto.js에서 복호화 함수를 수정한다**

**crypto.js 수정사항**

// 기존 함수에 매개변수만 추가 - 기본값으로 기존 동작 유지<br>
export function decrypt_text(sessionKey = null){
    
    const k = "key";
    const rk = k.padEnd(32, " ");


    // 매개변수가 있으면 해당 세션키 사용, 없으면 기존 방식 유지
    const eb = sessionKey ? sessionStorage.getItem(sessionKey) : session_get();

    if (!eb) {
        console.log("암호화된 데이터 없음");
        return null;
    }
    const b = decodeByAES256(rk, eb);
    return b;

}

**login2.js 수정사항**

**login2.js에 init_logined()함수를 수정한다:**

function init_logined(){
    if(sessionStorage){
        // 기존 로그인 데이터 복호화 (그대로 유지)
        const decrypted = decrypt_text();
        if (decrypted) {
            try {
                const userInfo = JSON.parse(decrypted);
                console.log("복호화된 로그인 정보:", userInfo);
            } catch (e) {
                console.log("로그인 데이터 파싱 오류:", e);
            }
        }

        // 회원가입 데이터 복호화 (새로 추가)
        const signupDecrypted = decrypt_text('encryptedSignupData'); //회원가입 시 암호화 된 데이터를 복호화하는 역활을 한다.
        if (signupDecrypted) {
            try {
                const signupInfo = JSON.parse(signupDecrypted);
                console.log("복호화된 회원가입 정보:", signupInfo);  //console.log로 복호화된 회원가입 정보를 콘솔에 출력
            } catch (e) {
                console.log("회원가입 데이터 파싱 오류:", e);
            }
        } else {
            console.log("세션에 회원가입 데이터가 없어 복호화하지 않음");
        }

        decrypt_text_web();
    } else {
        alert("세션 스토리지 지원 x");
    }
}


#### 🔒 세션에 회원가입 세션이 없다면 복호화 x, 출력하지 않음

**조건부 복호화 처리**
- 세션에 회원가입 세션이 없다면 복호화 x, 출력하지 않음
- if 조건문을 활용하여 데이터 존재 여부를 확인한다

**위의 login2.js의 init_logined() 함수를 보면 if (signupDecrypted) 조건문을 통해 회원가입 데이터가 없으면 아래의 코드가 실행되도록 하였다:**

// 데이터가 없을 때 메시지 출력
console.log("세션에 회원가입 데이터가 없어 복호화하지 않음");


#### 🔧연습문제 중요한 구현 포인트

**회원가입 정보 암호화**
- JSON.stringify()로 객체를 문자열로 직렬화한다
- encrypt_text() 함수로 AES-256-CBC 방식 암호화를 수행한다
- sessionStorage.setItem()으로 암호화된 데이터를 저장한다

**조건부 복호화**
- 매개변수를 활용하여 기존 함수의 호환성을 유지한다
- 세션 데이터 존재 여부를 확인하여 안전한 복호화를 수행한다
- try-catch 문으로 JSON 파싱 오류를 처리한다

**보안 강화**
- 회원가입 정보가 평문이 아닌 암호화된 형태로 저장된다
- 로그인 후에만 복호화가 수행되어 접근을 제한한다
- 데이터 부재 시 복호화를 시도하지 않아 시스템 안정성을 확보한다

---


## 🎯 13주차 - 웹 오픈 API

### 💡 지난주 내용 살펴보기

#### 🔍 JS 모듈 시스템 및 OOP

| 질문 | 답변 |
|------|------|
| **JS 모듈 시스템의 함수에 대한 접근 제한의 특징은?** | 외부에서 사용하려면 무조건 함수 앞에 export를 붙여서 공개해야 하고, 공개된 함수를 접근하려면 import를 통해 접근한다 |
| **JS의 OOP 기법의 생성자의 역할은?** | 객체 생성 시에 자동 초기화를 담당하고, this 키워드를 사용하여 현재 생성되는 객체의 속성을 설정한다 |
| **모듈 시스템에서 HTML코드 내 직접 함수 호출 방법은?** | 이벤트 리스너를 통해 직접 함수를 호출하는 방법이 있다 |
| **복잡한 문자 조합을 위한 조합식을 무엇이라 하는가?** | 정규표현식이라고 한다 |

#### 🔧 DOM 및 이벤트 처리

| 질문 | 답변 |
|------|------|
| **리스너에 등록된 DOMContentLoaded의 호출 시점은?** | DOM 요소(DOM tree)들이 완성된 후 실행된다 |
| **특정 객체로 마우스 포인터를 자동으로 이동하는 함수는?** | focus() 함수 |

### 🛠️ 13주차 응용 문제 - 1

#### 🖼️ 개인 사진, 기술 스택 - 원하는 사진으로 수정, 개인 스킬로 수정

**프로필 사진 수정**

**profile.html에 프로필 사진이 나오는 img태그를 아래와 같이 수정하였다:**

`<img src="../Web_main 20220987/image/profile.png" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;"> `

**기술 스택 수정**

- 기술 스택은 아래와 같이 수정하였다.

- 게임 수학능력: 벡터, 행렬, 선형대수학, 선형 변환, 기하학

- 게임 엔진 숙련도: 유니티, 언리얼 엔진, Native, Godot, Construct

- 숙련도도 퍼센트는 본인의 생각으로 알맞은 숙련도 값을 넣었다.

#### 🔒 프로필 페이지 접근 제한하기

**구현 조건**

- 세션에 로그인된 정보 검사

- 세션이 있으면 메인 페이지 이동

- 원래는 session.js에서 session_check 함수를 이용해 세션을 검사해서 접근을 막으려고 했지만 다른 html에도 그 기능이 연동되어 꼬이는 경우가 발생해서 profile_access.   js라는 자바스크립트를 따로 만들어서 진행하였다.

**profile_access.js 생성**

    function checkProfileAccess() {

        // 세션 스토리지 지원 여부 확인
        if (!sessionStorage) { // 브라우저 세션 스토리지 지원 확인
            alert("로그인이 필요합니다.");
            window.location.href = "../login/login.html"; // 로그인 페이지로 돌아가기
            return false;
        }

        // 로그인 세션 정보 확인
        const sessionId = sessionStorage.getItem("Session_Storage_id"); // 로그인 ID 가져오기

        if (!sessionId) { // 로그인 정보가 없는 경우
            alert("로그인이 필요합니다.");
            window.location.href = "../login/login.html"; // 로그인 페이지로 돌아가기
            return false;
        }

        return true; // 접근 허용

    }

    // 페이지 로드 즉시 실행
    document.addEventListener('DOMContentLoaded', function() { // DOM 로드 완료 시 실행
        checkProfileAccess(); // 프로필 접근 권한 검사 함수 호출
    });

- 그 다음에 profile.html에 연동하여 마무리를 했다.

### 🛠️ 13주차 응용 문제 - 2

#### 🗺️ 카카오 맵 - 좌표로 주소 출력하기

**구현 조건**

- 자바스크립트 수정하기

- HTML코드 수정하기

- CSS 스타일 추가하기

**1. 자바스크립트 수정하기**

- 아래의 코드를 제외한 가이드에 있는 코드를 그대로 복사하였다.
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 

    mapOption = {

        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    
    };  

    // 지도를 생성합니다<br>  
    var map = new kakao.maps.Map(mapContainer, mapOption)

**2. HTML코드 수정하기**

- 아래의 코드를 `<div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>` 아래에 추가하였다.

    `<div class="hAddr">`

        <span class="title">지도중심기준 행정동 주소정보</span>
        <span id="centerAddr"></span>
    
    `</div>`

**3. CSS 스타일 추가하기(profile.css 수정하기)**

- 아래의 코드를 profile.css 마지막에 추가하였다. (원래는 왼쪽 위에 출력되게 되어있는데 오른쪽 아래에 출력되게 수정하였다.)


.map_wrap {position:relative;width:100%;height:350px;}<br>
.title {font-weight:bold;display:block;}<br>
.hAddr {position:absolute;right:10px;bottom:10px;border-radius: 2px;background:#fff;background:rgba(255,255,255,0.8);z-index:1;padding:5px;}<br>
#centerAddr {display:block;margin-top:2px;font-weight: normal;}<br>
.bAddr {padding:5px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}

#### 🔧응용문제 중요한 구현 포인트

**개인화 요소**

- 프로필 이미지와 기술 스택을 개인 특성에 맞게 수정한다.

- 게임 개발 관련 기술 스택으로 전문성을 표현한다.

**프로필 페이지 접근 제한**

- 별도의 JavaScript 파일로 분리하여 다른 페이지와의 충돌을 방지한다.

- sessionStorage를 활용하여 로그인 상태를 검증한다.

- DOMContentLoaded 이벤트로 페이지 로드 즉시 접근 권한을 검사한다.

**카카오맵 연동**

- 카카오맵 API를 활용하여 지도 기능을 구현한다.

- 좌표를 통해 실시간으로 주소 정보를 출력한다.

- CSS를 통해 주소 정보 표시 위치를 사용자 정의한다.


---

## 🔧 추가 구현 포인트 - 회원가입 정보 기반 로그인 검증

### 💡 구현 목표
- 회원가입한 정보와 일치하는 경우에만 로그인 허용
- 미가입 사용자 또는 잘못된 정보 입력 시 적절한 피드백 제공
- 로그인 실패 횟수 관리 시스템과 연동

### 🛠️ 구현 내용

#### 🔐 회원가입 정보 검증 함수 추가

**login.js의 check_input 함수 위에 다음 함수(validateLoginCredentials)를 추가한다:**

    function validateLoginCredentials(inputEmail, inputPassword) {
        
        // 세션에서 회원가입 정보 가져오기
        const signupData = sessionStorage.getItem("Session_Storage_join");

        
        if (!signupData) {
            alert("회원가입 정보가 없습니다. 먼저 회원가입을 해주세요.");
            return false;
        }

        try {
            const signupInfo = JSON.parse(signupData);
            
            // 이메일과 비밀번호 비교
            if (signupInfo._email === inputEmail && signupInfo._password === inputPassword) {
                console.log("로그인 성공: 회원가입 정보와 일치");
                alert("로그인 성공")
                return true;
            } else {
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
                return false;
            }
        } catch (error) {
            console.error("회원가입 정보 파싱 오류:", error);
            alert("회원가입 정보를 확인할 수 없습니다.");
            return false;
        }
    }



#### 🔗 check_input 함수에 검증 로직 연동

**login.js의 check_input 함수 안에 다음 코드를 추가한다:**

    // 회원가입 정보와 비교 검증 추가
    if (!validateLoginCredentials(emailValue, passwordValue)) {

        login_failed(); // 로그인 실패 횟수 증가
        return false;
    
    }



### 🎯 동작 시나리오

#### ✅ 회원가입된 사용자의 경우
1. **올바른 이메일과 비밀번호 입력**
2. **세션에서 회원가입 정보 확인**
3. **입력 정보와 저장된 정보 비교**
4. **일치 시**: "로그인 성공" 메시지 출력 후 로그인 진행
5. **로그인 실패 횟수 초기화**

#### ❌ 미가입 사용자의 경우
1. **임의의 이메일과 비밀번호 입력**
2. **세션에 회원가입 정보 없음 확인**
3. **"회원가입 정보가 없습니다. 먼저 회원가입을 해주세요." 메시지 출력**
4. **로그인 실패 횟수 증가**
5. **로그인 진행 중단**

#### ⚠️ 잘못된 정보 입력 시
1. **회원가입은 했지만 틀린 이메일 또는 비밀번호 입력**
2. **세션의 회원가입 정보와 비교**
3. **불일치 시**: "아이디 또는 비밀번호가 일치하지 않습니다." 메시지 출력**
4. **로그인 실패 횟수 증가**
5. **로그인 진행 중단**

### 🔧 핵심 구현 포인트

**세션 기반 인증**
- sessionStorage에 저장된 회원가입 정보를 활용한다
- JSON.parse()를 통해 저장된 객체 데이터를 복원한다
- 클라이언트 사이드에서 즉시 검증이 가능하다

**실패 횟수 연동**
- 기존 login_failed() 함수와 연동하여 일관된 실패 관리를 수행한다
- 3회 실패 시 1분간 로그인 제한 기능과 자동 연계된다
- 성공 시 reset_login_failed()로 실패 횟수를 초기화한다

**사용자 경험 개선**
- 명확한 피드백 메시지로 사용자가 상황을 쉽게 파악할 수 있다
- 회원가입 유도를 통해 서비스 가입률을 향상시킨다
- 보안성과 사용성을 동시에 확보한다

**에러 처리**
- try-catch 구문으로 JSON 파싱 오류를 안전하게 처리한다
- 예외 상황에 대한 적절한 사용자 안내를 제공한다
- 시스템 안정성을 보장한다

---



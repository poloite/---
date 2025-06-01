1~6주차 응용 문제 및 연습 문제 및 지난주 내용 복기 완료 (2025.05.02)

3주차


지난 주 내용 살펴보기

문서 시작 태그
A)<html>

타이틀 제목
A)<tiltle> </tiltle>

문서 몸체
A)<body>

문장 정렬 
A)style="display: flex; justify-content: center ; 
  display: flex를 통해 flexbox 컨테이너로 지정하고  justify-content: center로 flex 아이템들을 가운데로 정렬하는 역활을 한다.  

문장 크기
A)<h1~<h6> or font size?

이미지 삽입
A)<img src="이미지 파일 경로" >

밑줄
A)<hr>

연습문제
1. 드랍다운 메뉴에서 비어있는 href의 자리에 링크 삽입하기 

<li><a class="dropdown-item" href="https://events.fconline.nexon.com/250424/Both">피파 홈페이지</a></li>
       <li><a class="dropdown-item" href="https://shop.fconline.nexon.com/">피파 웹상점</a></li>
       <li><hr class="dropdown-divider"></li>
       <li><a class="dropdown-item" href="https://fconline.nexon.com/datacenter/dailysquad">데이터센터</a></li>

2. 네이게이션 바에 색상 추가하기
   A) bg-primary" data-bs-theme="dark"
      위의 코드를 <nav class="navbar navbar-expand-lg 다음에 추가하여 배경은 파란색이며, 
      어두운 테마이기 때문에 글씨의 색깔은 흰색이다.

3.테이블에 색상 추가하기
  A)테이블의 색상은 테이블 전체에 색상을 추가할 수도 있고, 행과 셀에 각각 추가할 수도 있다.
    나는 테이블 전체에 색상을 추가하였다.  
    <table class="table caption-top table-primary"  border="5"> -->


4주차


지난주 내용 살펴보기

<meta> 태그의 추가 위치는? 
A)<meta>태그는 <head>태그에 추가 한다.

하이퍼링크
A)<a href = "파일 경로" >

Link와 하이퍼링크의 차이점은
A)link 태그는 <head>태그에 추가하고 하이퍼링크는 <body>태그에 추가한다.
  그리고 link태그는 <head>태그 안에 외부 자원(css)을 추가할 때 쓰인다.
  하이퍼링크는 상호작용을 하면 링크로 이동할 때 쓰인다.

부트스트랩 연동에 추가된 태그 3가지
A)<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"                 integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

   <meta name="viewport" content="width=device-width, initial-scale=1">

   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
   위의 3개의 <link>, <meta>, <script>태그가 추가되었다.

기본 레이아웃 영역을 무엇이라 하는가? 
A)테이블?

디자인 템플릿 지정에 필요한 것은?
A) css, 자바스크립트, 부트스트랩?

표 병합을 위한 속성 2가지는?
A) <rowspan> : 행 병합, <colspan>: 열 병합


4주차 연습문제

검색 창 search.js를 수정하여 직접 실행해본다.

• 자바스크립트의 클릭 이벤트 식별자 수정하기

현재 식별자의 값은?  
A) ("search_btn")

식별자 값을 search_button_msg 로 수정한다.
A) document.getElementById("search_button_msg").addEventListener('click',search_message);

• Index.html의 버튼 클릭 id 식별자를 수정한다.

• 수정된 식별자 값과 일치해야 한다.
  A) <button class="btn btn-outline-success" id = "search_button_msg" type="submit">검색하기</button>

함수 search_message()를 2개 이상 추가한다.
A)  function search_message(){
        let a = "검색을 수행합니다.";
        alert(a);
    }

    function search_message(){
        let a = "검색을 수행한다.";
        alert(a);
    }

• 같은 이름의 함수가 중첩하면 에러가 나는가? 
  A)에러는 나지 않는다.
• 실행하는 경우 어떤 함수가 우선 순위가 높은가?
  A)"아래에 쓴 검색을 수행한다."가 출력된다. 

함수 search_message()에 변수를 추가한다.
• Let 변수 활용하여 문자열 “검색을 수행합니다”를 저장한다.
• 변수를 출력하는 형태로 수정한다.

  A) function search_message(){
        let a = "검색을 수행합니다.";
        alert(a);
     } 


5주차


지난주 내용 살펴보기

자바스크립트를 추가하는 태그는?
A)<script>태그

파일로 작성된 자바스크립트는 어디에 추가되는가? 
A)<script>태그로 html 문서에 추가된다.

자바스크립트가 제어하는 트리구조 문서를 무엇이라 하는가?
A)DOM(Document Object Model)

자바스크립트 변수 선언 방식 3가지
A)var, let, const

ES6 표준 이후 안전성을 위해 추가된 변수 선언 방식은?
A)let, const

문서의 최상위 문서의객체의 이름은?
A)document

문서의 객체 식별자를인식하는 메서드는? 
A)getElementById

마우스 이벤트 중 더블 클릭의 이름은
A)dbclick


5주차 연습문제 

검색 창에 문자열을 검사한다.
• 검사할 항목 : 공백, 비속어 5개

A) function search_message(){
      let a = "검색을 수행합니다.";
      alert(a); -->
      alert("공백과 비속어를 검사합니다.");
    }

    function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정

    <mark>const forbiddenWords = ["바보", "멍청이", "욕1", "욕2", "욕3"]; //배열로 비속어 목록 만들기</mark>

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



<!--6주차-->


<!--지난주 내용 살펴보기 -->

<!-- JS의 참조 데이터 타입은? 2개 이상  -->
     A) 객체, 배열, 함수, 자료구조(MAP, SET)

<!-- Undefied 데이터 타입의 특징은?:  -->
     A)Undefied는 원시 타입으로 선언 후 값을 할당하지 않은 변수를 말한다. 그리고 반드시 값을 직접 확인해야 한다.

<!-- 문자열과 변수를 조합하여 출력하는 방법을무엇이라 하는가? -->
     A)템플릿 리터럴

<!-- Get / post 2가지 전송방식의 핵심 차이점은? -->
     A)Get방식은 URL에 정보가 노출되어 보안이 취약하고 
       Post방식은 URL에 정보가 노출되지 않아 보안에 용이하다.


<!-- 페이지 요청에 Utf-8 인코딩 처리 전용 함수는? -->
     A)encodeURIComponent 함수이다.

<!-- 페이지 로딩과 동시에js를 호출하는 속성은? -->
     A)defer 속성이다.

<!-- 상대경로를 지정하는경우 상위 폴더를 지정하는 방법은? -->
     A)../를 사용한다.

<!-- 자바스크립트의 핵심타이머 함수는? -->
     A)setTimeout 함수


<!-- 6주차 응용 문제 -->

<!-- • login 폴더에 logout.html 파일을 작성한다. -->
<!-- • 기존 login.html 전체 소스코드를 가져온다. -->
; • Head 및 body부터 footer 등 기본 소스 코드를 유지한다.
; • 그림과 같은 로그아웃 화면으로 수정한다.
; • 로그아웃 버튼 기능
; • 클릭하면 index.html로 연결한다. 
; • 원래 사이트 메인으로 돌아온다.

A)login.html의 전체 소스코드를 가져와서 logout.html에 필요한 스크립트를 제외한 나머지를 주석처리 하거나 삭제했다.
  그리고 원래의 로그인 버튼을 제외한 이메일과 비밀번호 입력창등의 기능들은 삭제하였다. 
  하지만 이 로그아웃 기능은 10주차까지 잘 실행되지 않았다. 
  그 이유는 logout_form과 logout_btn이라는 변수가 선언되지 않았고 로그아웃 기능을 하는 함수가 선언되지 않았기 때문이다.
  (10주차에서는 변수와 함수를 선언했지만 그 방식(session.js에 추가했지만 복잡하고 꼬이는 점들도 많았음)이 이상해서 기능이 제대로 실행되지 않았다.)
  따라서 11주차에 교수님의 솔루션을 받아 session_del.js라는 자바스크립트 파일을 따로로 만들어서 로그아웃 기능과 세션을 삭제하는 기능을 하는 코드를 만들었다.  
; <logout.html 코드>

; <!DOCTYPE html> 
; <html lang="ko">
;     <head>
;         <meta charset="UTF-8">
;         <meta name="viewport" content="width=device-width, initial-scale=1">
;         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
;         <link rel="stylesheet" href="../css/login.css">
;         <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
;         <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js" integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <!-- <script type="text/javascript" defer src="../js/session.js" defer></script> -->
          <script type="text/javascript" defer src="../js/session_del.js" defer></script>
          <!-- <script type="text/javascript" defer src="../js/login.js" defer></script> -->
;     <body>

;         <section class="vh-100 gradient-custom">
;             <div class="container py-5 h-100">
;                 <div class="row d-flex justify-content-center align-items-center h-100">
;                     <div class="col-12 col-md-8 col-lg-6 col-xl-5">
;                         <div class="card bg-dark text-white" style="border-radius: 1rem;">
;                             <div class="card-body p-5 text-center">

;                                 <div class="mb-md-5 mt-md-4 pb-5">
;                                     <form id="logout_form" method="get" action="../Web_main 20220987/Index.html"> 
                                        <h2 class="fw-bold mb-2 text-uppercase">로그아웃 메인화면</h2>
                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id="logout_btn" type="button">로그아웃</button> //타입을 button이라 하지 않으면 자바 스크립트를 실행하지 않고 그냥 form을 실행시킨다.
;                                     </form>
                                  
;                                 </div>

                               
                                
;                             </div>

;                         </div>
;                     </div>
;                 </div>
;             </div>
            
;         </section>
;     </body>
; </html> 

<session_del.js>

function session_del() {//세션 삭제
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


; 6주차 연습문제

; JS 및 HTML 정리하기: 들여쓰기 및 head 태그에 자바스크립트 정리 완료-->
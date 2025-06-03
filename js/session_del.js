// 쿠키 함수들을 직접 구현
const getCookie = (name) => {
    const cookie = document.cookie;
    if (cookie != "") {
        const cookie_array = cookie.split("; ");
        for (const index in cookie_array) {
            const cookie_name = cookie_array[index].split("=");
            if (cookie_name[0] == name) {
                return unescape(cookie_name[1]);
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

function session_del() {//세션 삭제
        if (sessionStorage) {
            // 모든 세션 스토리지 데이터를 한 번에 삭제
            sessionStorage.clear();
             // JWT 토큰 삭제 추가
            localStorage.removeItem('jwt_token');
            
            console.log('세션 스토리지와 JWT 토큰이 삭제되었습니다.');
            alert('로그아웃 버튼 클릭 확인 : 세션 스토리지와 JWT 토큰을 삭제합니다.');
        } 
        else {
            alert("세션 스토리지 지원 x");
        }
}


const check = () => {
    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
        logout_count();
        session_del(); // 세션 삭제 + jwt 토큰 삭제
      
    logoutForm.submit();
}    
document.getElementById("logout_btn").addEventListener('click', check);
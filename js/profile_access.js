function checkProfileAccess() {
    // 세션 스토리지 지원 여부 확인
    if (!sessionStorage) { // 브라우저 세션 스토리지 지원 확인
        alert("로그인이 필요합니다.");
        window.location.href = "../login/login.html"; // 로그인 페이지로 리다이렉트
        return false;
    }
    
    // 로그인 세션 정보 확인
    const sessionId = sessionStorage.getItem("Session_Storage_id"); // 로그인 ID 가져오기
    
    if (!sessionId) { // 로그인 정보가 없는 경우
        alert("로그인이 필요합니다.");
        window.location.href = "../login/login.html"; // 로그인 페이지로 리다이렉트
        return false;
    }

    return true; // 접근 허용
}

// 페이지 로드 즉시 실행
document.addEventListener('DOMContentLoaded', function() { // DOM 로드 완료 시 실행
    checkProfileAccess(); // 프로필 접근 권한 검사 함수 호출
});

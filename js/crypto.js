import { session_set, session_get, session_check } from './session.js';

function encodeByAES256(key, data){ //
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""), // IV 초기화 벡터
        padding: CryptoJS.pad.Pkcs7, // 패딩
        mode: CryptoJS.mode.CBC // 운영 모드
    });
    return cipher.toString();
}
function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

export function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = encodeByAES256(rk, b); // 실제 암호화
    return eb;
    console.log(eb);
}

export function decrypt_text(){
    const k = "key";
    const rk = k.padEnd(32, " ");
    const eb = sessionKey ? sessionStorage.getItem(sessionKey) : session_get();
    if (!eb) {
        console.log("암호화된 회원가입 데이터 없음");
        return null;
    }
    const b = decodeByAES256(rk, eb);
    return b; // 콘솔 출력 대신 반환
}
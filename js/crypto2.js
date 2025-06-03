import { session_set, session_get, session_get_web ,session_check } from './session.js';

// Web Crypto API로 암호화하는 함수
export async function encrypt_text_web(password) {
    try {
        const key = "web_crypto_key"; // 클라이언트 키
        const rk = key.padEnd(32, " "); // AES256은 key 길이가 32
        
        // 키를 CryptoKey 객체로 변환
        const cryptoKey = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(rk),
            { name: "AES-GCM" },
            false,
            ["encrypt"]
        );
        
        // 랜덤 IV 생성 (12바이트)
        const iv = crypto.getRandomValues(new Uint8Array(12));
        
        // 암호화 수행
        const encrypted = await crypto.subtle.encrypt(
            {
                name: "AES-GCM",
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

// Web Crypto API로 복호화하는 함수
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
            { name: "AES-GCM" },
            false,
            ["decrypt"]
        );
        
        // 복호화 수행
        const decrypted = await crypto.subtle.decrypt(
            {
                name: "AES-GCM",
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
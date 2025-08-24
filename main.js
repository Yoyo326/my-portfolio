document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMsg = document.getElementById('responseMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 입력 값 가져오기
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // 간단한 유효성 검사
        if (!name || !email || !message) {
            responseMsg.style.color = 'red';
            responseMsg.textContent = '모든 필드를 채워주세요.';
            return;
        }
        // 이메일 형식 검사 (간단히 @ 포함 여부)
        if (!email.includes('@')) {
            responseMsg.style.color = 'red';
            responseMsg.textContent = '올바른 이메일 주소를 입력해주세요.';
            return;
        }

        // 성공 메시지 출력
        responseMsg.style.colo

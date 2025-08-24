document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMsg = document.getElementById('responseMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 여기서 실제 서버 요청은 하지 않고
        // 그냥 사용자에게 성공 메시지만 보여줌

        // 데이터 가져오기 (필요시)
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // TODO: 여기서 원한다면 클라이언트에서 로컬스토리지에 저장하거나,
        // 외부 서비스에 API 호출도 가능하지만 지금은 생략

        // 성공 메시지 출력
        responseMsg.style.color = 'green';
        responseMsg.textContent = `Thanks ${name}! Your message has been sent.`;

        form.reset();
    });
});

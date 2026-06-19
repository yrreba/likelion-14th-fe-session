
const routines = [
    { time: "아침 | 08:00", title: "스트레칭하기", desc: "기분 좋게 하루를 시작해요!", isLunch: false },
    { time: "점심 | 13:00", title: "친구랑 점심 먹기", desc: "오늘은 제육덮밥!", isLunch: true },
    { time: "저녁 | 20:00", title: "React 공부하기", desc: "프론트엔드 개발자로 성공하자!", isLunch: false }
];


const container = document.getElementById('routine-container');

routines.forEach(item => {
    
    const card = document.createElement('div');
    card.className = 'card';

    
    card.onclick = function() {
        completeRoutine(item.title);
    };

    
    let content = `
        <h3>${item.time}</h3>
        <p><strong>${item.title}</strong></p>
        <p>${item.desc}</p>
    `;

    
    if (item.isLunch) {
        content += `<p class="lunch-special">⭐ 점심은 꼭 챙겨 먹어요!</p>`;
    }

    card.innerHTML = content;
    container.appendChild(card);
});


function completeRoutine(title) {
    alert(`🎉 [${title}] 루틴을 완료하셨군요! 멋져요!`);
}


const dateBox = document.getElementById('today-date');
const today = new Date();
dateBox.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일의 계획`;


document.getElementById('cheer-btn').addEventListener('click', function() {
    alert("오늘도 멋진 하루를 보내고 있군요! 화이팅! 💪");
});
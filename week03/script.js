const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');
const messageBox = document.querySelector('#message-box');
const todoCount = document.querySelector('#todo-count');
const clearAllBtn = document.querySelector('#clear-all-btn');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 기능 1: 남은 할 일 카운트 업데이트 > 오른쪽 상단에 표시
const updateCount = () => {
    const uncompletedTasks = document.querySelectorAll('li:not(.completed)').length;
    todoCount.innerText = uncompletedTasks;
};

// 기능 2: 로컬 스토리지에 데이터 저장
const saveToStorage = () => {
    const todos = [];
    document.querySelectorAll('li').forEach(li => {
        todos.push({
            text: li.querySelector('span').innerText,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('myTodoListData', JSON.stringify(todos));
};

// 기능 3: 전체 삭제
clearAllBtn.addEventListener('click', () => {
    if (confirm("정말 모든 목록을 삭제할까요?")) {
        todoList.innerHTML = "";
        updateCount();
        saveToStorage();
        messageBox.innerText = "💥 전체 삭제되었습니다.";
        setTimeout(() => messageBox.innerText = "", 2000);
    }
});

// 리스트 아이템 생성 함수
const createTodoElement = (text, isCompleted = false) => {
    const li = document.createElement('li');
    if (isCompleted) li.classList.add('completed');
    
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">삭제</button>
    `;

    // 항목 클릭 시 완료 처리
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateCount();
        saveToStorage();
    });

    // 삭제 버튼 클릭: 1초 후 삭제
    li.querySelector('.delete-btn').addEventListener('click', async (e) => {
        e.stopPropagation();
        await delay(1000);
        li.remove();
        updateCount();
        saveToStorage();
        messageBox.innerText = "🗑️ 삭제가 완료되었습니다.";
        setTimeout(() => messageBox.innerText = "", 2000);
    });

    todoList.appendChild(li);
};

// 할 일 추가: 2초 후 알림
const handleAdd = async () => {
    const text = input.value.trim();
    if (!text) return;

    createTodoElement(text);
    input.value = "";
    updateCount();
    saveToStorage();

    await delay(2000);
    messageBox.innerText = "✅ 할 일 추가 완료!";
    setTimeout(() => {
        if(messageBox.innerText === "✅ 할 일 추가 완료!") messageBox.innerText = "";
    }, 2000);
};

// 초기 로드 시 저장된 데이터 불러오기
window.onload = () => {
    const saved = JSON.parse(localStorage.getItem('myTodoListData')) || [];
    saved.forEach(todo => createTodoElement(todo.text, todo.completed));
    updateCount();
};

addBtn.addEventListener('click', handleAdd);
input.addEventListener('keypress', (e) => e.key === 'Enter' && handleAdd());
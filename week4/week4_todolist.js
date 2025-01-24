function enterCheck() {
    if(window.event.keyCode === 13){
        todoAdd();
    }
}

function todoAdd() {
    const todoList = document.getElementById("todoList");
    const todoInput = document.getElementById("todoInput");

    if(todoInput.value == '')   return;

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newInput = document.createElement("input");
    const newButton = document.createElement("button");

    newInput.type = 'checkbox';
    newButton.innerText = '✖';
    newInput.addEventListener('click', () => {
        newSpan.classList.toggle('check');
    });
    newButton.addEventListener('click', () => {
        newLi.remove();
    });

    newLi.appendChild(newInput);
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);

    newSpan.textContent = todoInput.value;

    todoList.prepend(newLi);

    todoInput.value = '';
}

function todoDeleteAll() {
    const liList = document.querySelectorAll('#todoList li');
    for(let i=0;i<liList.length;i++){
        liList[i].remove();
    }
}

function todoDeleteCheck() {
    const liList = document.querySelectorAll('#todoList li');
    for(let i=0;i<liList.length;i++){
        if(liList[i].firstChild.checked) liList[i].remove();
    }
}
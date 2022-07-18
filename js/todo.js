
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = []; 

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    //id의 기본값은 string! 
    //삭제: 우리가 선택한 toDo와 id가 다른 toDo는 남겨둔다
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); 
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function hanldeToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //비우기 전 저장
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //id 부여해서 각각의 li item 구분
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //string으로 newTodo를 주는 대신 newTodoObj 객체 전달 
    saveToDos();
}

toDoForm.addEventListener("submit", hanldeToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//null일 때
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //배열로 만듬 
    toDos = parsedToDos; //null일때 parsed로 덮어씌움 
    parsedToDos.forEach(paintToDo);
    //해당배열의 각각 item에 대해 paintToDo 실행 
}


const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  listCheck();
}

function deleteToDO(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function listCheck() {
  const todoList = document.querySelector("#todo-list");
  if (toDos.length == "0") {
    todoList.className = "hidden";
  } else {
    todoList.className = "";
  }
}

function paintToDo(newToDO) {
  const li = document.createElement("li");
  li.id = newToDO.id;
  const span = document.createElement("span");
  span.innerText = newToDO.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDO);

  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);

  // 세이브할때. 새로 시작 후 스토리지 자료를 읽어올때
  // 자료가 없을 경우 hidden class를 추가하여 숨긴다.
  listCheck();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

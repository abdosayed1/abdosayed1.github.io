const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");

const localTodos = JSON.parse(localStorage.getItem('todos')) || [];


let todoData = [];

localTodos.forEach(todo => {
    addTodo(todo);
});
function addTodo(todoText){
    todoData.push(todoText);
}

function removeTodo(e){
    let x = todoData.filter(todoItem => {
        return todoItem != e.target.dataset.todotext;
    });
    todoData = x;
    displayTodos();
}
form.addEventListener("submit", e => {
    e.preventDefault();

    addTodo(input.value);
    displayTodos();
});

function displayTodos() {
    todoList.innerHTML = ""
    todoData.forEach(todoItem => {
        const todoElement = document.createElement("li");
        todoElement.textContent = todoItem;
        todoElement.setAttribute("data-todoText", todoItem);
        todoElement.addEventListener("click", removeTodo)
        todoList.appendChild(todoElement)
    })
    localStorage.setItem('todos', JSON.stringify(todoData));
}

displayTodos()
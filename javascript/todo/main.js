import './style.css'

// Selectors
const todo_form = document.querySelector('.todo_form')
const todo_submit_btn = document.querySelector('.todo_submit_btn')
const todo_list = document.querySelector('.todo_list')
const filter_input = document.querySelector('.filter_input')
const todo_input_field = document.querySelector('.todo_input_field')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todo_submit_btn.addEventListener('click', addTodo)
todo_list.addEventListener('click', buttonActions)
filter_input.addEventListener('click', filterTodos)

// Functions
function addTodo(event) {
    event.preventDefault()

    // Check if actual value entered in the input, then inform the user.
    if (todo_input_field.value === '' || null || undefined) {
        todo_form.classList.add('error')
        return
    } else {
        todo_form.classList.remove('error')
    }

    const todo_item = document.createElement('li')
    todo_item.classList.add('todo_item', 'uncompleted')
    todo_item.innerText = todo_input_field.value
    todo_list.appendChild(todo_item)

    // Add todo to local storage
    saveToLocalStorage(todo_input_field.value)

    // Reset input field to nothing.
    todo_input_field.value = ''

    // Add buttons
    const check_btn = document.createElement('button')
    check_btn.classList.add('btn_check')
    check_btn.innerHTML = '<i class="lni lni-checkmark-circle"></i>'
    todo_item.appendChild(check_btn)

    const delete_btn = document.createElement('button')
    delete_btn.classList.add('btn_trash')
    delete_btn.innerHTML = '<i class="lni lni-trash-can"></i>'
    todo_item.appendChild(delete_btn)

}

function buttonActions(event) {
    let current_todo = event.target.parentElement

    if (event.target.classList.contains('btn_trash')) {
        current_todo.remove()
        deleteTodo(current_todo)
    }

    if (event.target.classList.contains('btn_check')) {
        current_todo.classList.toggle('line-through')
        current_todo.classList.toggle('opacity-50')
        current_todo.classList.add('completed')
        current_todo.classList.remove('uncompleted')
    }
}

function filterTodos(event) {
    const todos = todo_list.childNodes
    todos.forEach((todo) => {
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break
            case "uncompleted":
                if (todo.classList.contains('uncompleted')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
        }
    })
}

function saveToLocalStorage(todo) {
    // Check if there are todos already and set them.
    let todos = setLocalStorageTodos()

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    // Check if there are todos already and set them.
    let todos = setLocalStorageTodos()

    todos.forEach((item) => {
        const todo_item = document.createElement('li')
        todo_item.classList.add('todo_item', 'uncompleted')
        todo_item.innerText = item
        todo_list.appendChild(todo_item)

        // Add todo action buttons.
        const check_btn = document.createElement('button')
        check_btn.classList.add('btn_check')
        check_btn.innerHTML = '<i class="lni lni-checkmark-circle"></i>'
        todo_item.appendChild(check_btn)

        const delete_btn = document.createElement('button')
        delete_btn.classList.add('btn_trash')
        delete_btn.innerHTML = '<i class="lni lni-trash-can"></i>'
        todo_item.appendChild(delete_btn)
    })
}

function deleteTodo(todo) {
    // Check if there are todos already and set them.
    let todos = setLocalStorageTodos()
    const todoIndex = todo.innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function setLocalStorageTodos() {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
}
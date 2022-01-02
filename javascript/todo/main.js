import './style.css'


// Selectors
const todo_form = document.querySelector('.todo_form')
const todo_submit_btn = document.querySelector('.todo_submit_btn')
const todo_list = document.querySelector('.todo_list')
let todo_input_field = document.querySelector('.todo_input_field')

// Event Listeners
todo_submit_btn.addEventListener('click', addTodo)

// Functions
function addTodo(event) {
    event.preventDefault()

    const list_item_element = document.createElement('li')

    list_item_element.classList.add('todo_item')
    list_item_element.innerText = todo_input_field.value

    todo_list.appendChild(list_item_element)

    todo_input_field.value = ''
}





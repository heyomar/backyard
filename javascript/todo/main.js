import './style.css'


// Selectors
const todo_form = document.querySelector('.todo_form')
const todo_submit_btn = document.querySelector('.todo_submit_btn')
const todo_list = document.querySelector('.todo_list')
let todo_input_field = document.querySelector('.todo_input_field')

// Event Listeners
todo_submit_btn.addEventListener('click', addTodo)
todo_list.addEventListener('click', buttonActions)

// Functions
function addTodo(event) {
    event.preventDefault()

    if (todo_input_field.value === '' || null || undefined) {
        return
    }

    const todo_item = document.createElement('li')

    todo_item.classList.add('todo_item')
    todo_item.innerText = todo_input_field.value

    todo_list.appendChild(todo_item)

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
    }

    if (event.target.classList.contains('btn_check')) {
        current_todo.classList.toggle('line-through')
        current_todo.classList.toggle('opacity-50')
    }
}



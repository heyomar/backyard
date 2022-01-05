import './style.css'


// Selectors
const todo_form = document.querySelector('.todo_form')
const todo_submit_btn = document.querySelector('.todo_submit_btn')
const todo_list = document.querySelector('.todo_list')
const filter_input = document.querySelector('.filter_input')
let todo_input_field = document.querySelector('.todo_input_field')

// Event Listeners
todo_submit_btn.addEventListener('click', addTodo)
todo_list.addEventListener('click', buttonActions)
filter_input.addEventListener('click', filterTodos)

// Functions
function addTodo(event) {
    event.preventDefault()

    if (todo_input_field.value === '' || null || undefined) {
        return
    }

    const todo_item = document.createElement('li')

    todo_item.classList.add('todo_item', 'uncompleted')
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


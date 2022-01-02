import './style.css'


let todo_form = document.querySelector('.todo_form')
let todo_input_value = document.querySelector('.todo_input_field').value
let todo_submit_btn = document.querySelector('.todo_submit_btn')

todo_submit_btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked submit', todo_input_value);
})

console.log(todo_form, todo_submit_btn);
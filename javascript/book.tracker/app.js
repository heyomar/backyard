// Book Class Represents a Book
class Book {
  constructor(title,author,isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// UI Class: To Handle UI Tasks
class UI {
  static displayBooks(){
    const books = Store.getBooks()
    
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list')

    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="button is-danger is-small delete">X</a></td>
    `

    list.appendChild(row)
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove()
    }
  }

  static showAlert(msg, className){
    const div = document.createElement('div')

    div.className = `notification is-${className}`
    div.appendChild(document.createTextNode(msg))
    const area = document.querySelector('.area')
    const form = document.querySelector('#bookform')

    area.insertBefore(div, form)

    // vanish in 3 seconds
    setTimeout(()=>{
      document.querySelector('.notification').remove()
    }, 3000)
  }

  static clearFields(){
    document.querySelector('#title').value = ''
    document.querySelector('#author').value =''
    document.querySelector('#isbn').value = ''
  }
}


// Store Class: Handles Storage Locally
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}


// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks)

// Event: Add a Book
document.querySelector('#bookform').addEventListener('submit', (e)=>{
  e.preventDefault()

  // Get values of form
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value

  // Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger')  
  }else {
    // Instantiate Book
    const book = new Book(title,author,isbn)
  
    // Add to booklist and display
    UI.addBookToList(book)

    // Add book to storage
    Store.addBook(book)

    // Alert on add a book
    UI.showAlert('Book Added!', 'success')

    // Clear Fields
    UI.clearFields()
  }
})

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e)=>{
  e.preventDefault()
  // remove book from ui
  UI.deleteBook(e.target)

  // Remove book from localstorage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  UI.showAlert('Book Removed!', 'warning')
})
// Get elements
let filterInput = document.getElementById('filterInput')

// Add event listener
filterInput.addEventListener('keyup', filterNames)

// Funtions
function filterNames() {
  let inputValue = document.getElementById('filterInput').value.toUpperCase()
  let ul = document.getElementById('names')

  let li = ul.querySelectorAll('li.collection-item')

  // Loop through collection items
  for(let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0]

    if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1){
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

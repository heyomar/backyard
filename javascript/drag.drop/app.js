// Get Elements
const FILLED_BOX = document.querySelector('.fill')
const EMPTY_BOXES = document.querySelectorAll('.empty')

// Fill Listeners
FILLED_BOX.addEventListener('dragstart', dragStart)
FILLED_BOX.addEventListener('dragend', dragEnd)

// Loop Through Empties
for(const EMPTY of EMPTY_BOXES){
  EMPTY.addEventListener('dragover', dragOver)
  EMPTY.addEventListener('dragenter', dragEnter)
  EMPTY.addEventListener('dragleave', dragLeave)
  EMPTY.addEventListener('drop', dragDrop)
}

// Drag Functions
function dragStart(){
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible',0)
}

function dragEnd(){
  this.className = 'fill'
}

// Empty boxes drag functions
function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(FILLED_BOX)
}
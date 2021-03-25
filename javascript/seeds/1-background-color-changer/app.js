const colorButton = document.querySelector('.button')
const page = document.querySelector('html')

function randomHex() {
	let hex = '#'
	for (let index = 0; index < 3; index++) {
		hex += `${Math.floor(Math.random() * 10)}`
	}
	return hex
}

colorButton.addEventListener('click', () => {
	page.style.backgroundColor = randomHex()
})

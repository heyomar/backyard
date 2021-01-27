const gallery = document.querySelector('.image')
const name = document.querySelector('.name')
const quote = document.querySelector('.quote')

const buttons = document.querySelectorAll('.btn')

const customersData = [
	{
		name: 'Hassan',
		quote: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.',
		image: 'customer-0.jpg',
	},
	{
		name: 'Emily',
		quote: 'Donec sed odio dui. lacinia bibendum nulla sed consectetur.',
		image: 'customer-1.jpg',
	},
	{
		name: 'Mary',
		quote: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.',
		image: 'customer-2.jpg',
	},
	{
		name: 'Raj',
		quote:
			'Donec sed odio dui.Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.',
		image: 'customer-3.jpg',
	},
	{
		name: 'Gazi',
		quote: 'Donec Aenean lacinia bibendum nulla sed consectetur.sed odio dui.',
		image: 'customer-4.jpg',
	},
]

let counter = 0
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.classList.contains('prev')) {
			counter--
			if (counter < 0) {
				counter = customersData.length - 1
			}
			gallery.src = customersData[counter]['image']
			name.innerHTML = customersData[counter]['name']
			quote.innerHTML = customersData[counter]['quote']
		} else if (button.classList.contains('next')) {
			counter++
			if (counter > customersData.length - 1) {
				counter = 0
			}
			gallery.src = customersData[counter]['image']
			name.innerHTML = customersData[counter]['name']
			quote.innerHTML = customersData[counter]['quote']
		}
	})
})

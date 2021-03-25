const POUNDS_INPUT = document.querySelector('.pounds-input')

POUNDS_INPUT.addEventListener('input', convertPounds)

function convertPounds(e) {
	const LBS = e.target.value

	// Convert to Grams
	const OZ = LBS / 16
	const G = Math.floor(LBS / 0.0022).toFixed(2)
	const KG = Math.floor(LBS / 2.2046).toFixed(2)

	// Show values to user
	document.querySelector('.ounces').innerHTML = OZ
	document.querySelector('.grams').innerHTML = G
	document.querySelector('.kilograms').innerHTML = KG
}

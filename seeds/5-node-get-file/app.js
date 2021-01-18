'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

async function downloadImage(index) {
	const url = `https://vss2.coursehunter.net/s/8fee0114c512150606448008088590ee/wb-bjsnew/lesson${index}.mp4`
	const path = Path.resolve(__dirname, 'images', `lesson${index}.mp4`)
	const writer = Fs.createWriteStream(path)

	const response = await Axios({
		url,
		method: 'GET',
		responseType: 'stream',
	})

	response.data.pipe(writer)

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve)
		writer.on('error', reject)
	})
}

for (let index = 51; index <= 85; index++) {
	downloadImage(index).then(() => {
		console.log(`done with ${index}`)
	})
}

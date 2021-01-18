'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

async function downloadFile(index) {
	const url = `https://vss2.coursehunter.net/s/8fee0114c512150606448008088590ee/wb-bjsnew/lesson${index}.mp4`
	const path = Path.resolve(__dirname, 'downloads', `lesson${index}.mp4`)
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

for (let index = 1; index <= 85; index++) {
	downloadFile(index).then(() => {
		console.log(`done with ${index}`)
	})
}

const PORT = 3002;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const url = "https://wp.pl";

axios(url).then((response) => {
	const html = response.data;
	const imagesURL = [];
	const $ = cheerio.load(html);
	let images = $("img");

	images.each(function () {
		let imageURL = $(this).attr("src");
		console.log(imageURL);
	});
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

const PORT = 3000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const myURL = "https://www.wp.pl";

const getAllImagesURL = async (url) => {
	const imagesURL = [];
	try {
		const response = await axios(url);
		const html = await response.data;
		const $ = cheerio.load(html);
		let images = $("img");
		images.each(function () {
			let currentURL = $(this).attr("src");
			imagesURL.push(currentURL);
		});
	} catch (error) {
		console.log(error);
	} finally {
		if (imagesURL.length > 0) {
			console.log(imagesURL);
		} else {
			console.log("No data");
		}
	}
};

getAllImagesURL(myURL);

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

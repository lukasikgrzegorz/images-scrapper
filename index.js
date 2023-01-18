const PORT = 3000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const myURL = "https://www.wp.pl";

const getAllImagesURL = async (url) => {
	const imagesURL = [];
	try {
		const response = await axios(`http://${url}`);
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
			return imagesURL;
		} else {
			return "No data";
		}
	}
};

const app = express();

app.get("/:pageURL", async (req, res) => {
	const images = await getAllImagesURL(req.params["pageURL"]);
	res.send(images.map((image) => `<img src="${image}"></img>`).join(" "));
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

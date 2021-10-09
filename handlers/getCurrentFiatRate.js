const cheerio = require('cheerio');

function getCurrentFiatRate(content) {
	try {
		const $ = cheerio.load(content);
		const currentP2pRate = $('.showPrice').text();

		return currentP2pRate;
	} catch (error) {
		throw error;
	}
}

module.exports = getCurrentFiatRate;

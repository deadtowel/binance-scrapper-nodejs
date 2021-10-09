const chalk = require('chalk');
const getPageContent = require('./common/puppeteer');
const getCurrentFiatRate = require('./handlers/getCurrentFiatRate');
const getCurrentP2pRate = require('./handlers/getCurrentP2pRate');
const output = require('./common/output');

const URL_FIAT = 'https://www.binance.com/en/trade/USDT_UAH?layout=pro';
const URL_P2P =
	'https://p2p.binance.com/en/trade/sell/USDT?fiat=UAH&payment=ALL';

async function main() {
	try {
		const pageFiatContent = await getPageContent(URL_FIAT);
		const pageP2pContent = await getPageContent(URL_P2P);

		const fiatRateCurrent = getCurrentFiatRate(pageFiatContent); //num
		const p2pRateCurrent = getCurrentP2pRate(pageP2pContent, 'AnyCashBot'); // array of objects

		output(fiatRateCurrent, '', p2pRateCurrent.rate);
	} catch (error) {
		console.log(chalk.bgRed.black('Error has occured!'));
		console.log(error);
	}
}

setInterval(() => {
	main();
}, 15000);

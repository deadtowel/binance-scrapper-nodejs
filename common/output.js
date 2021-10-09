const chalk = require('chalk');

function output(fiatRate, p2pMerchantName, p2pRate) {
	try {
		const difference = (p2pRate - fiatRate).toFixed(2);
		console.log(
			'FIAT RATE:',
			chalk.bgBlue.black(fiatRate),
			'|',
			'P2P RATE("AnyCashBot"):',
			chalk.bgGray.white(p2pRate),
			'|',
			'DIFFERENCE:',
			chalk.bgCyan.black(difference),
		);
	} catch (error) {
		throw error;
	}
}

module.exports = output;

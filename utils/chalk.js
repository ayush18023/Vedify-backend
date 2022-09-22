const chalk = require('chalk');

exports.E = chalk.bold.red;
exports.L = chalk.keyword('orange').bold;
exports.D = chalk.red.bold.bgBlackBright;
exports.C = chalk.red.bold.bgAnsi256(255);

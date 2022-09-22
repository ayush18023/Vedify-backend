const chalk = require('chalk');

global.log = console.log;

global.L = chalk.keyword('orange').bold;
global.D = chalk.red.bold.bgBlackBright;
global.C = chalk.red.bold.bgAnsi256(255);
global.E = chalk.bold.red;
global.W = chalk.bold.yellow;
global.O = chalk.bold.green;

const chalkLog = (data, fn) => {
  if (typeof data === 'string') {
    return console.log(fn(data));
  } else if (typeof data === 'object') {
    return console.log(fn(util.inspect(data, { colors: true, depth: null })));
  }
};

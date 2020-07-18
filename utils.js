const chalk = require('chalk');

const getFixedNumber = number => Number(number.toFixed(0));

const printResults = (calculations, depreciation) => {
  console.log(chalk.green('Calculations'));
  console.table(calculations);
  console.log(chalk.green('Accumulated Depreciation'));
  console.table(depreciation);
};

module.exports ={
  getFixedNumber,
  printResults
}

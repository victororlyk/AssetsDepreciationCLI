const yargs = require('yargs');
const chalk = require('chalk');
const calculations = require('./calculations');

yargs
  .command({
    command: ['calculate', '$0'],
    describe: 'cli app to calculate assets depreciation',
    builder: {
      period: {
        describe: 'Depreciation Period',
        demandOption: true,
        type: 'string'
      },
      openAssets: {
        describe: 'Opening Asset Balance',
        demandOption: true,
        type: 'number'
      },
      assetsYear: {
        describe: 'Asset Purchases For Year 1',
        demandOption: true,
        type: 'number'
      },
      growthRate: {
        describe: 'Purchased Growth Rate in %',
        demandOption: true,
        type: 'number'
      },
      openDepreciation: {
        describe: 'Opening Depreciation Balance',
        type: 'number'
      }
    },
    handler({ period, openAssets, assetsYear, growthRate, openDepreciation }) {
      calculations(
        period,
        openAssets,
        assetsYear,
        growthRate,
        openDepreciation
      );
    }
  })
  .check(({ openAssets, assetsYear, growthRate }) => {
    if (isNaN(openAssets) || isNaN(assetsYear) || isNaN(growthRate)) {
      throw new Error(
        chalk.red(
          'Next arguments: openAssets, assetsYear, growthRate must be numbers'
        )
      );
    } else {
      return true;
    }
  });

yargs.parse();

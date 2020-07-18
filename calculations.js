const { getFixedNumber, printResults } = require('./utils');

const calculations = (period, openAssets, assetsYear, growthRate, openDepreciation=0) => {
  const calculationsResult = {};
  const depreciationResult = {};
  const years = parseInt(period);

  let closingBalanceAssets = openAssets;
  let purchases = assetsYear;
  let closingBalanceDepreciation = openDepreciation;

  for (let i = 0; i < years; i++) {
    const year = `YEAR ${i + 1}`;

    calculationsResult[year] = {
      ['Opening Balance']: getFixedNumber(closingBalanceAssets),
      ['add: Purchases']: getFixedNumber(purchases),
    };
    depreciationResult[year] = {
      ['Opening Balance']: getFixedNumber(closingBalanceDepreciation),
    };

    if (!i) {
      closingBalanceAssets += purchases;
      closingBalanceDepreciation += getFixedNumber((openAssets + purchases) / years);
    } else {
      closingBalanceDepreciation += getFixedNumber((closingBalanceAssets + purchases) / years);
      closingBalanceAssets += purchases;
    }
    depreciationResult[year]['Closing Balance'] = closingBalanceDepreciation;
    calculationsResult[year]['Closing Balance'] = getFixedNumber(closingBalanceAssets);
    depreciationResult[year]['Net Asset Balance'] = getFixedNumber(closingBalanceAssets - closingBalanceDepreciation);

    purchases += purchases * (growthRate / 100);

  }
  printResults(calculationsResult, depreciationResult);
};

module.exports = calculations;

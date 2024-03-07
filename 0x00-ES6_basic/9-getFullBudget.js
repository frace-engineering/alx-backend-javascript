import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
	const budget = getBudgetObject(income, gdp, capita);
	const fullBudget = {
		...budget,
		getIncomeInDollars: function (income) {
			return `$${fullBudget.income}`;
		},
		getIncomeInEuros: function (income) {
			return `${fullBudget.income} euros`;
		},
	};

	return fullBudget;
}

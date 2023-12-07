const mealCost = 20;
const tipPersentage = 20;

const tipAmount = mealCost * (tipPersentage / 100);
const totalCost = mealCost + tipAmount;

console.log(`The total cost of your bill is: ${totalCost} euros`);

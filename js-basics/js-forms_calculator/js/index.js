console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const numberA = parseInt(form.querySelector('[data-js="numberA"]').value);
  const numberB = parseInt(form.querySelector('[data-js="numberB"]').value);
  const operator = form.querySelector('[data-js="operator"]').value;
  switch (operator) {
    case "add":
      result = add(numberA, numberB);
      break;
    case "subtract":
      result = subtract(numberA, numberB);
      break;
    case "multiply":
      result = multiply(numberA, numberB);
      break;
    case "divide":
      result = divide(numberA, numberB);
      break;
    default:
      result = "Invalid operator";
  }

  resultOutput.textContent = result;
});

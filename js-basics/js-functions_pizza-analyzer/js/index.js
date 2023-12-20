console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  const area2 = Math.PI * Math.pow(diameter2 / 2, 2);

  const pizzaGain = ((area2 - area1) / area1) * 100;

  const roundedPizzaGain = Math.round(pizzaGain);

  output.textContent = roundedPizzaGain;
}

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // Save the current values of both pizza inputs
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);

  // Call the calculatePizzaGain function with the pizza sizes as arguments
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplaySize}px`;
}

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size2 < size1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}

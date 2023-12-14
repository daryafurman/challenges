console.clear();

const form = document.querySelector('[data-js="form"]');
const age = document.querySelector('[data-js="age"]');
const badness = document.querySelector('[data-js="badness"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //BONUS
  const calculateAgePlusBadness = parseInt(data.age) + parseInt(data.badness);
  console.log(`The age-badness-sum is ${calculateAgePlusBadness}`);
  console.log(data);
});

// ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

// The formula is: `age + badness`

// Log to the console _(replace the values between the quotes)_:

// > The age-badness-sum of "firstName" is "age-badness-sum"

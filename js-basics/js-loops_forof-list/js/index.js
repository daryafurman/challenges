console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

let ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (ol of programmingLanguages) {
  console.log(ol);
}

document.body.append(ol);
document.body.append(programmingLanguages);
// --^-- write/change code here --^--

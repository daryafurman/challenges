console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let star = 1; star <= 5; star++) {
    console.log(`iteration ${star}`);
    const starElement = document.createElement("img");
    starElement.src = "assets/star-empty.svg";
    starContainer.append(starElement);
  }

  //--^-- your code here --^--
}

renderStars();

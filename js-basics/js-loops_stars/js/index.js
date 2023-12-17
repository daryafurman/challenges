console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let star = 1; star <= 5; star++) {
    console.log(`iteration ${star}`);
    const starElement = document.createElement("img");
    starElement.src =
      star <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";
    starElement.addEventListener("click", function () {
      renderStars(star);
    });
    starContainer.append(starElement);
  }

  //--^-- your code here --^--
}

renderStars(0);

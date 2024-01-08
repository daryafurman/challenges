console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the Star Wars API.");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    console.log("Name:", data.name);
    console.log("Height:", data.height);

    //Bonus
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    if (r2d2) {
      console.log("R2-D2's eye color:", r2d2.eye_color);
    } else {
      console.log("R2-D2 not found in the fetched data.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(url);

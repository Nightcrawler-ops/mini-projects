// Array containing data for various musical instruments,
// including their category, name, and price.
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

// Selects the HTML <select> element (dropdown menu) for filtering categories.
const selectContainer = document.querySelector("select");
// Selects the HTML element where instrument cards will be displayed.
const productsContainer = document.querySelector(".products-container");

/**
 * Generates HTML cards for instruments based on their category.
 * If the category is "all", it returns cards for all instruments.
 * Otherwise, it filters instruments by the specified category.
 *
 * @param {string} instrumentCategory - The category to filter by (e.g., "woodwinds", "brass", "percussion", or "all").
 * @returns {string} A single string of concatenated HTML, representing the instrument cards.
 */
function instrumentCards(instrumentCategory) {
  // Determine which instruments to display: all or filtered by category.
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr // If "all" is selected, use the entire instruments array.
      : instrumentsArr.filter( // Otherwise, filter by the selected category.
          ({ category }) => category === instrumentCategory
        );

  // Map the chosen instruments to an array of HTML card strings.
  return instruments
    .map(({ instrument, price }) => {
      return `
            <div class="card">
              <h2>${instrument}</h2>
              <p>$${price}</p>
            </div>
        `;
    })
    .join(""); // Joins the array of HTML strings into a single string with no commas.
}

// Add an event listener to the dropdown menu.
// This function will execute every time the selected option changes.
selectContainer.addEventListener("change", () => {
  // Update the inner HTML of the productsContainer.
  // Call instrumentCards with the current value of the dropdown (the selected category).
  // The result (a single HTML string) is then set as the content of productsContainer.
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});

// Initial page load: Display all instruments when the page first loads.
// This ensures that content is visible to the user immediately.
productsContainer.innerHTML = instrumentCards("all").join("");

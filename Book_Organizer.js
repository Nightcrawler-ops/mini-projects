// Step 1: Array of book objects
const books = [
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "Brave New World",
    authorName: "Aldous Huxley",
    releaseYear: 1932,
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
];

// Step 2: Callback function to sort by releaseYear
function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) return -1;
  if (bookA.releaseYear > bookB.releaseYear) return 1;
  return 0;
}

// Step 3: Filter books released before or in 1950
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// Step 4: Sort the filtered books in ascending order by releaseYear
filteredBooks.sort(sortByYear);

// Final output (optional log to see result)
console.log("Filtered and Sorted Books:");
console.log(filteredBooks);
// Output will be an array of book objects sorted by releaseYear
// and filtered to include only those released before or in 1950.
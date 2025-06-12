const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

function displayBooks(catalog) {
  let output = 'Books in the Library:\n';

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}

  // Assuming your functions and `library` array are already defined...

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

// Logging the results
console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);
// Example output
// Books in the Library:
// - Your Next Five Moves: Master the Art of Business Strategy by Patrick Bet-David and Greg Dinkin (320 pages)
// - Atomic Habits by James Clear (320 pages)
// - Choose Your Enemies Wisely: Business Planning for the Audacious Few by Patrick Bet-David (304 pages)
// - The Embedded Entrepreneur by Arvid Kahl (308 pages)
// - How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change by Jon Gordon (256 pages)
// - The Creative Mindset: Mastering the Six Skills That Empower Innovation by Jeff DeGraff and Staney DeGraff (168 pages)
// - Rich Dad Poor Dad by Robert Kiyosaki and Sharon Lechter (336 pages)
// - Zero to Sold by Arvid Kahl (500 pages)
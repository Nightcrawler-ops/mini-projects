// Function to generate a pyramid or reversed pyramid pattern
function pyramid(char, rows, isReversed) {
  let result = "\n";
  let maxWidth = rows * 2 - 1; // Calculate the maximum width of the pyramid

  // Loop through each row
  for (let i = 1; i <= rows; i++) {
    // Determine the number of characters for the current row
    let numChars = isReversed ? maxWidth - (i - 1) * 2 : i * 2 - 1;
    // Calculate the number of leading spaces for alignment
    let spaces = (maxWidth - numChars) / 2;

    // Add spaces and characters to the result string
    result += " ".repeat(spaces) + char.repeat(numChars) + "\n";
  }

  return result;
}

// Example usage:
let char = "*";         // Character to build the pyramid
let rows = 5;           // Number of rows in the pyramid
let isReversed = false; // Set to true for reversed pyramid

console.log(pyramid(char, rows, isReversed)); // Output the pyramid
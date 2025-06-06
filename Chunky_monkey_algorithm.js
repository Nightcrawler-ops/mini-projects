function chunkyMonkey(inputString) {
    // Split the input string into an array of words
    let words = inputString.split(' ');

    // Create a new array to hold the modified words
    let modifiedWords = [];

    // Loop through each word in the original array
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        // Apply the "chunky monkey" transformation
        let modifiedWord = currentWord + '-chunky-monkey';

        // Add the modified word to the new array
        modifiedWords.push(modifiedWord);
    }

    // Join the modified words back into a single string
    let result = modifiedWords.join(' ');

    // Return the final result
    return result;
}

// Example usage:
let originalString = "hello world";
let transformedString = chunkyMonkey(originalString);
console.log(transformedString); // Output: "hello-chunky-monkey world-chunky-monkey"
// This function takes your input string, appends "-chunky-monkey" to each word, and returns the result.
// You can modify the transformation step to personalize how each word is changed.
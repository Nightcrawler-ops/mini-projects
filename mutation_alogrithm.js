function mutationAlgorithm(inputString) {
    // Convert the input string into an array of characters
    let charArray = Array.from(inputString);

    // Create a new array to store the mutated characters
    let mutatedArray = [];

    // Loop through each character in the original array
    for (let i = 0; i < charArray.length; i++) {
        let currentChar = charArray[i];

        // Mutate the character by converting it to uppercase
        let mutatedChar = currentChar.toUpperCase();

        // Add the mutated character to the new array
        mutatedArray.push(mutatedChar);
    }

    // Join the mutated characters back into a single string
    let mutatedString = mutatedArray.join('');

    // Return the mutated string
    return mutatedString;
}

// Example usage:
let originalString = "hello world";
let mutatedString = mutationAlgorithm(originalString);
console.log(mutatedString); // Output: "HELLO WORLD"
// This function takes your input string, changes every character to uppercase, and returns the result.
// You can update the mutation step to personalize how each character is transformed.
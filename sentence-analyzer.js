// Function to count the number of vowels in a sentence
function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;

    // Convert sentence to lowercase and iterate through each character
    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++; // Increment count if character is a vowel
        }
    }
    return count;
}

// Example usage of getVowelCount
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

// Function to count the number of consonants in a sentence
function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;

    // Convert sentence to lowercase and iterate through each character
    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) {
            count++; // Increment count if character is a consonant
        }
    }
    return count;
}

// Example usage of getConsonantCount
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

// Function to count the number of punctuation marks in a sentence
function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;

    // Iterate through each character in the sentence
    for (const char of sentence) {
        if (punctuations.includes(char)) {
            count++; // Increment count if character is a punctuation mark
        }
    }
    return count;
}

// Example usage of getPunctuationCount
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

// Function to count the number of words in a sentence
function getWordCount(sentence) {
    if (sentence.trim() === '') {
        return 0; // Return 0 if sentence is empty or only whitespace
    }
    
    // Split sentence by whitespace and count the resulting words
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

// Example usage of getWordCount
const wordCount = getWordCount("Hello, world! This is a test.");
console.log(`Word Count: ${wordCount}`);
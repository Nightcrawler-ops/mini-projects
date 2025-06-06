// Set the number to calculate the factorial for (between 1 and 20)
let num = 5; // Change this value to test different inputs

// Calculates the factorial of a given number
function factorialCalculator(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Calculate the factorial and display the result
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg); // Output: Factorial of 5 is 120

function sumAll(arr) {
  // Destructure and sort the array to find the min and max values
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  
  // Initialize sum
  let total = 0;

  // Loop from min to max and add each number to total
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}
// Example usage:
const numbers = [1, 4]; // Example input array
console.log(sumAll(numbers)); // Output: 10
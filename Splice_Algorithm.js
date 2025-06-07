function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 to avoid modifying the original array
  const newArr = arr2.slice();
  
  // Use splice to insert arr1 into newArr at index n
  newArr.splice(n, 0, ...arr1);
  
  // Return the modified array
  return newArr;
}
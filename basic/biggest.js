function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first element is the largest
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update 'largest' if a larger number is found
      }
    }
    
    return largest;
  }
  
  // Example usage
  const numbers = [3, 6, 2, 8, 5];
  console.log("The largest number is: " + findLargestNumber(numbers)); // Output: "The largest number is: 8"
  
// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to print even numbers in the array
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

// Call the function with the sample array
printEvenNumbers(numbers);

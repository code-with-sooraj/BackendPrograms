function sumWithCallback(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
  function callbackFunction(result) {
    console.log("The sum is: " + result);
  }
  
  // Example usage
  sumWithCallback(5, 3, callbackFunction);
  
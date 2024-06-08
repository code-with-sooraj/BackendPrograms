// Prompt the user to enter their name and gender
let name1 = "Sooraj";
let gender = "Male";

// Greet the person based on their gender
if (gender.toLowerCase() === 'male') {
  console.log("Hello Mr. " + name1);
} else if (gender.toLowerCase() === 'female') {
  console.log("Hello Ms. " + name1);
} else {
  console.log("Hello " + name1);
}

// Sample complex object containing people's information
let peopleData = [
    { firstName: 'John', gender: 'male' },
    { firstName: 'Emily', gender: 'female' },
    { firstName: 'Michael', gender: 'male' },
    // ... (other people)
  ];
  
  // Function to print male first names
  function printMaleFirstNames(people) {
    for (let person of people) {
      if (person.gender === 'male') {
        console.log(person.firstName);
      }
    }
  }
  
  // Call the function with the given complex object
  printMaleFirstNames(peopleData);
  
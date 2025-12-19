function greet(name, callback) {
  console.log("hello", name);
  
  // Calling back the callback function
  callback();
}

// Callback function
function sayGoodbye() {
  console.log('Goodbye!');
}

// Using the main function with a callback
greet('Alice', sayGoodbye);

// Output:
// hello Alice
//Goodbye!
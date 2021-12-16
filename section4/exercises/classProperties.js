/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class DogPrompt1 {}

var poodle = new DogPrompt1();
console.log(poodle);

var pug = new DogPrompt1();
console.log(pug);

// Prompt 2: Snack
class SnackPrompt1 {}

var apple = new SnackPrompt1();
console.log(apple);

var bowlOfChips = new SnackPrompt1();
console.log(bowlOfChips);

// Prompt 3: Shirt
class ShirtPrompt1 {}

var longSleeve = new ShirtPrompt1();
console.log(longSleeve);

var shortSleeve = new ShirtPrompt1();
console.log(shortSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogPrompt2 {
  constructor() {
    this.dogName = "Sam";
    this.dogColor = "black";
    this.dogAge = 3;
  }
}

var pug = new DogPrompt2();
console.log(pug);


// Prompt 2: Snack
class SnackPrompt2 {
  constructor() {
    this.isHealthy = true;
    this.amt = 1;
    this.eatenWhen = "afternoon";
  }
}

var apple = new SnackPrompt2();
console.log(apple);

// Prompt 3: Shirt
class ShirtPrompt2 {
  constructor() {
    this.color = "black";
    this.isNew = false;
    this.isClean = true;
  }
}

var longSleeve = new ShirtPrompt2();
console.log(longSleeve);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogPrompt3 {
  constructor(name, color, age) {
    this.dogName = name;
    this.dogColor = color;
    this.dogAge = age;
  }
}

var bulldog = new DogPrompt3("Yoda", "Black", 2);
console.log(bulldog);

var pomeranian = new DogPrompt3("Sally", "white", 5);
console.log(pomeranian);

// Prompt 2: Snack
class SnackPrompt3 {
  constructor(healthy, amt, eaten) {
    this.isHealthy = healthy;
    this.amt = amt;
    this.eatenWhen = eaten;
  }
}

var bowlOfCherries = new SnackPrompt3(true, 15, "evening");
console.log(bowlOfCherries);

var candyBar = new SnackPrompt3(false, 2, "night");
console.log(candyBar);
// Prompt 3: Shirt
class ShirtPrompt3 {
  constructor(color, isNew, isClean) {
    this.color = color;
    this.isNew = isNew;
    this.isClean = isClean;
  }
}

var turtleNeck = new ShirtPrompt3("green", true, true);
console.log(turtleNeck);

var printedTee = new ShirtPrompt3("black", false, false);
console.log(printedTee);

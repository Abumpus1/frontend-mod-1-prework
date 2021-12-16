// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//create the function buildABear with 5 perameters
function buildABear(name, age, fur, clothes, specialPower) {
  //declare variable named greeting and assign a string that interpolates the perameter named name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare variable named demographics and assign it to an array with two dynamic elements
  var demographics = [name, age];
  //declare variable named powerSaying and assign it to a string that concatenates the parameter named specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare variable named builtBear and assign it to an object
  var builtBear = {
    //pair variable demographics to the key basicInfo
    basicInfo: demographics,
    //pair variable clothes to the key clothes
    clothes: clothes,
    //pair variable fur to the key exterior
    exterior: fur,
    //pair the number 49.99 to the key cost
    cost: 49.99,
    //pair array to the key sayings
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //pair boolean true to the key isCuddly
    isCuddly: true,
    //end of Object
  };
//returns builtBear object
  return builtBear
  //end of function
}
//calls buildABear function with new arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//calls buildABear function with new arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//create function fizzBuzz with 3 parameters for an if/else statement within a for loop
function fizzBuzz(num1, num2, range) {
  //create for loop that runs as long as variable i is less than or equal to perameter named range
  for (var i = 0; i <= range; i++) {
    //create if statement if BOTH variable i devided by parameter num1 gives a remainder strictly
    // equal to 0, AND variable i devided by parameter num2 is gives a remainder strictly equal to 0, then..
    if (i % num1 === 0 && i % num2 === 0) {
      //...log string 'fizzbuzz' to console
      console.log('fizzbuzz');
      //if EITHER conditions in above if statement not true, then, if variable i devided by parameter num1 gives a remainder strictly equal to 0, then...
    } else if (i % num1 === 0) {
      //...log string 'fizz' to console
      console.log('fizz');
      //if both if and else if statements above not true, therwise, if variable i devided by parameter num2 gives a remainder strictly equal to 0, then...
    } else if (i % num2 === 0) {
      //...log string 'buzz' to the console
      console.log('buzz');
      //if none of the above statements are true, then...
    } else {
      //log to console the value of variable i
      console.log(i);
      //end else statement
    }
  //end for loop
  }
//end function
}

//call fizzBuzz function passing 3 arguments through the perameters
fizzBuzz(3, 5, 100);
//call fizzBuzz function passing 3 arguments through the perameters
fizzBuzz(5, 8, 400);

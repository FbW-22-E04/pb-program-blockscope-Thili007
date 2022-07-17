// Exercise 01

let determiner = -90;

let x = determiner >= 0 ? "Greater or equal to 0" : "Less than 0";

console.log(x);

// Exercise 02

let updater;

if (determiner >= 0) {
  let updater = "Great or equal to 0";
  let message = "Positive integer";
  console.log("message", message);
} else {
  updater = "Less than 0";
}
console.log(updater);

// Exercise 03
// Its not possible to access message variable when its inside "If" statement it give an error.because its one of scope in if statement. when its define in globally we then we can access it.

// Exercise 04

// with Ternary operator can build arguments between two conditions.

let num = 80;

let count = num > 40 ? "Its over 40" : "Its not over 40";

console.log(count);

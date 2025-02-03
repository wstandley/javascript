// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//
var name1 = "Will";

const taxRate = 0.07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
  //fix the errors
  var firstName = "William",
    lastName = "Standley";
  document.getElementById("name").innerHTML = name1;
  document.getElementById("full-name").innerHTML = firstName + " " + lastName;
  var firstName = "Mister";
  var name = "Will";
  document.getElementById("first").innerHTML = name;
  document.getElementById("nick-name").innerHTML = firstName;
}

function scope() {
  //fix the errors
  const taxRate = 0.07; // This is a constant
  var firstName = "William",
    lastName = "Standley";
  document.getElementById("global").innerHTML = name;
  document.getElementById("local").innerHTML = firstName;
  document.getElementById("tax").innerHTML = taxRate;
  // taxRate = 0.08;
  document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
  // Fix the errors
  let dog1 = "Ollie";
  dog2 = "Nessie";
  // dog2 = "Nessie";
  var dog3 = "Paisley";
  var dog2;
  document.getElementById("dog1").innerHTML = dog1;
  document.getElementById("dog2").innerHTML = dog2;
  document.getElementById("dog3").innerHTML = dog3;
  var dog2 = "Bernie";
  document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
  // fix the errors
  const PI = 3.14;
  const dogs = ["Ollie", "Nessie", "Ory"];
  document.getElementById("doggos").innerHTML = dogs;
  dogs[0] = "Ollie Bear";
  document.getElementById("new-doggos").innerHTML = dogs;
  const breed = ["Shepherd", "Collie", "Bouvier"];
  document.getElementById("pi").innerHTML = PI;
  document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
  // create statements demonstrating the use of each operator
  let addition = 10 + 10;
  document.getElementById("addition").innerHTML = "10 + 10 = " + addition;
  let subtraction = 10 - 10;
  document.getElementById("subtraction").innerHTML = "10 - 10 = " + subtraction;
  let multiplication = 10 * 10;
  document.getElementById("multiplication").innerHTML =
    "10 * 10 = " + multiplication;
  let exponent = 10 ** 10;
  document.getElementById("exponent").innerHTML = "10 ** 10 = " + exponent;
  let division = 10 / 10;
  document.getElementById("division").innerHTML = "10 / 10 = " + division;
  let modulus = 10 % 10;
  document.getElementById("modulus").innerHTML = "10 % 10 = " + modulus;
  let num = 10;
  let increment = ++num;
  document.getElementById("increment").innerHTML = "++10 = " + increment;
  let decrement = num--;
  document.getElementById("decrement").innerHTML = "10-- = " + decrement;
}

function assignments() {
  // create statements demonstrating the use of each assignment type
  var x = 10;
  document.getElementById("equals").innerHTML = "x = 10 ," + "x = " + x;
  x += 1;
  document.getElementById("plus-equals").innerHTML = "x += 1 ," + "x = " + x;
  x -= 6;
  document.getElementById("minus-equals").innerHTML = "x -= 1 ," + "x = " + x;
  x *= 2;
  document.getElementById("times-equals").innerHTML = "x *= 1 ," + "x = " + x;
  x /= 2;
  document.getElementById("divide-equals").innerHTML = "x /= 2 ," + "x = " + x;
  x %= 5;
  document.getElementById("modulus-equals").innerHTML = "x %= 2 ," + "x = " + x;
}

function dataTypes() {
  // create samples of each of the data types from the
  // index page and display them in the Data Types section
  const cats = ["Siamese", "Maine Coon", "Tabby"];
  document.getElementById("array").innerHTML = cats;
  const clothes = { shirt: "Brown", pants: "grey", shoes: "beige" };
  document.getElementById("object").innerHTML =
    clothes.shirt + " " + clothes.pants + " " + clothes.shoes;
}

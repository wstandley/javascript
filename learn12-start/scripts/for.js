// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.
let bottles = "";

for (let beer = 99; beer > 2; beer--) {
  bottles +=
    beer +
    " bottles of beer on the wall, <br>" +
    beer +
    " bottles of beer. <br> Take one down, pass it around. <br>" +
    (beer - 1) +
    " bottles of beer on the wall.";
}

for (let beer = 2; beer > 1; beer--) {
  bottles +=
    beer +
    " bottles of beer on the wall, <br>" +
    beer +
    " bottles of beer. <br> Take one down, pass it around. <br>" +
    (beer - 1) +
    " bottle of beer on the wall.";
}

for (let beer = 1; beer > 0; beer--) {
  bottles +=
    beer +
    " bottle of beer on the wall, <br>" +
    beer +
    " bottle of beer. <br> Take one down, pass it around. <br>" +
    " No bottles of beer left on the wall.";
}

document.getElementById("beer").innerHTML = bottles;

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// command to print them to the for-in paragraph
let example = "";
for (let month in months) {
  example += months[month] + "<br>";
}

document.getElementById("for-in").innerHTML = example;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
let my_string = "Will Standley";
// print the results in the for-of paragraph
let example_2 = "";
for (let letters of my_string) {
  example_2 += letters + "<br>";
}

document.getElementById("for-of").innerHTML = example_2;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
let example_3 = "";
let number = 1;
while (number <= 50) {
  example_3 += number + "<br>";
  number++;
}
// print the results in the while paragraph
document.getElementById("while").innerHTML = example_3;

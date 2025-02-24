function start() {
  // Math: https://www.w3schools.com/js/js_math.asp
  // Demonstrate the use of round, ceil, floor, trunc, sign
  // pow, min, and random and display to the appropriate paragraph
  document.getElementById("round").innerHTML = Math.round(5.5);
  document.getElementById("ceil").innerHTML = Math.ceil(5.5);
  document.getElementById("floor").innerHTML = Math.floor(5.5);
  document.getElementById("trunc").innerHTML = Math.trunc(5.5);
  document.getElementById("sign").innerHTML = Math.sign(5.5);
  document.getElementById("pow").innerHTML = Math.pow(5, 2);
  document.getElementById("min").innerHTML = Math.min(1, 5, 20, -36, 110);
  document.getElementById("random").innerHTML = Math.random();

  // Random: https://www.w3schools.com/js/js_random.asp
  // create a random integer between 1 and 100 and display in the random2 paragraph
  document.getElementById("random2").innerHTML =
    Math.floor(Math.random() * 100) + 1;

  // Booleans: https://www.w3schools.com/js/js_booleans.asp
  // read the reference
  // I read it

  // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
  // demonstrate and explain the difference between == and === in the
  // comparisons paragraph
  document.getElementById("comparisons").innerHTML =
    "== allows JS to check to see if two objects are of equal value. For example the number '1' is equal to the word 'one' which would be written as 1 == one. JS returns it as true because it isn't specific and sees them as equal value. The === operator also is checking to see if they are of equal value. However, it is more strict as each part of the comparitors has to be the exact same down to the character. In the same example, it would return false because the number '1' isn't the same as the word 'one' because their characters are totally different. In order for it to be true it would be written as '1 === 1' or 'one === one' because they are exactly the same in every way.";

  // Conditions: https://www.w3schools.com/js/js_if_else.asp
  // Read the conditions page
  // I read it
}

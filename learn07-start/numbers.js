function start() {
  // print your name to the name heading
  document.getElementById("name").innerHTML = "William Standley";
  /*
            read/watch the associated reference and complete the directions in the comments.

        */

  /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

  /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
  let number = 12;
  let string = "34";
  let combo = number + string;
  document.getElementById("add").innerHTML = '12 + "34" = ' + combo;

  /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

  // Demonstrate the use of toString() and print to the to-string paragraph
  document.getElementById("to-string").innerHTML = number.toString();

  // Demonstrate the use of toExponential() and print to the exponent paragraph
  let deci = 3.14159265359;
  document.getElementById("exponent").innerHTML = deci.toExponential(5);

  // Demonstrate the use of toFixed() and print to the fixed paragraph
  document.getElementById("fixed").innerHTML = deci.toFixed(3);

  // Demonstrate the use of toPrecision() and print to the precision paragraph
  document.getElementById("precision").innerHTML = deci.toPrecision(3);

  // Demonstrate the use of parseFloat() and print to the float paragraph
  document.getElementById("float").innerHTML =
    parseFloat("-20.5656") + "<br>" + parseFloat("20 56 56");

  // Demonstrate the use of parseInt() and print to the int paragraph
  document.getElementById("int").innerHTML =
    parseInt("-20.5656") + "<br>" + parseInt("20 56 56");

  // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

  /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
  document.getElementById("equals").innerHTML =
    "The === operator is a very strict operator in the fact that everything has to be identical on the comparison in order for it to return the statement as true. In other words a 1:1 comparison for each character. The == operator is much less strict as the two things being compared just have to be technically the same. For example, in the LinkdIn Learning, they use the word 'one' and the number '1' as a string. Technically they are the same as both are one, however the characters are not a 1:1 ratio, so using the === operator would return it as false since the character set does not match.";

  // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
  // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // In the logic paragraph describe the order of precedence for and / or operators
  document.getElementById("logic").innerHTML =
    "When it comes to the order of precedence for and / or operators, the and operator always gets checked first no matter what order you type them in. The only time the and operator isn't checked first is if you put parenthesis around an or statement in which it would run whatever is in the parenthesis first and at that point is when it would check the and statement once whatever was done in the parenthesis is executed.";

  // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

  // Write code to demonstrate the use of the switch statement and display results to switch paragrah
  var test = window.prompt("Type TEST to try the switch");

  switch (test) {
    case "TEST":
      document.getElementById("switch").innerHTML =
        "Thank you for typing 'TEST'";
      break;
    default:
      document.getElementById("switch").innerHTML =
        "Why didn't you type 'TEST'.";
      break;
  }

  // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
  // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
  // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
  var testing = "test";

  testing === "test"
    ? (document.getElementById("ternary").innerHTML =
        "I just used a ternary operator")
    : (document.getElementById("ternary").innerHTML =
        "The testing variable didn't match the comparing operator.");
}

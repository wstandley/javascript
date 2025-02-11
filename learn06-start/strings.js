function start() {
  // follow the directions in the comments
  // print to the index page

  // print your name to the name heading
  document.getElementById("name").innerHTML = "Will Standley";

  // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp

  // String length: calculate the string length and print to the length paragraph
  let myString = "Be it ever so humble, there is no place like home.";

  let length = myString.length;
  document.getElementById("length").innerHTML = length;

  // Escape sequences
  // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
  let string1 =
    'This is for "a" double quote. \n This is for\'a single quote.\n This is for a \\ backslash';
  document.getElementById("escape").innerHTML = string1;

  // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

  // create a variable named 'name' and store your complete name in it
  var name = "William Joseph Standley";
  // Use the JavaScript slice function to display your first name to first paragraph
  let fname = name.slice(0, 7);
  document.getElementById("first").innerHTML = fname;

  // Use the Javascript substring Method to display your middle name to the middle paragraph
  let mname = name.substring(8, 14);
  document.getElementById("middle").innerHTML = mname;

  // Use the JavaScript subst Method to display your last name to the last paragraph
  let lname = name.substr(15, 8);
  document.getElementById("last").innerHTML = lname;

  // replacing string content - in the following variable use the replace method to put your major
  // in a new string and print to the major paragraph

  let major = "I'm majoring in Physical Therapy at McHenry County College";

  let newMajor = major.replace(
    "Physical Therapy",
    "Software Application Design and Development"
  );

  document.getElementById("major").innerHTML = newMajor;

  // convert the following variable to upper case then print to the upper paragraph
  let myText = "It's a great day to be alive!";

  let myText2 = myText.toUpperCase();

  document.getElementById("upper").innerHTML = myText2;

  // Use the trim() method to remove white spaces from the following variable and print to the
  // trim paragraph
  let trimText = "                  McHenry County College                ";
  let trimText2 = trimText.trim();
  document.getElementById("trim").innerHTML = trimText2;

  // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

  let months =
    "January, February, March, April, May, June, July, August, September, October, November, December";

  let months2 = months.indexOf("May");
  document.getElementById("index").innerHTML = months2;

  // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

  // create a template literals for both your first and last name (name the variables first and last)
  let first = "Will";
  let last = "Standley";

  // Use Variable substitutions to create a greeting that incorporates your first and last name and
  let greetings = `Hello, my name is ${first} ${last}.`;
  // print to the greeting paragraph
  document.getElementById("greeting").innerHTML = greetings;
}

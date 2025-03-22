const cars = [
  "Ford",
  "Chevrolet",
  "BMW",
  "Audi",
  "Toyota",
  "Jeep",
  "Subaru",
  "Mazda",
  "Ferrari",
  "Honda",
  "Jaguar",
  "Dodge",
  "Chrysler",
];

const foods = [
  "Burger King",
  "McDonald's",
  "Arby's",
  "Chick-Fil-A",
  "Chipotle",
  "KFC",
  "Taco Bell",
  "Wendy's",
  "Starbucks",
  "Panda Express",
  "Little Caesars",
];

const clothing = [
  "Nike",
  "Adidas",
  "Vans",
  "Chanel",
  "Ralph Lauren",
  "Louis Vuitton",
  "Gucci",
  "Reebok",
  "Levi's",
  "New Balance",
  "Puma",
];

const football = [
  "Packers",
  "Bears",
  "Vikings",
  "Lions",
  "49ers",
  "Seahawks",
  "Raiders",
  "Chargers",
  "Broncos",
  "Bills",
  "Bucannears",
  "Browns",
  "Texans",
  "Cowboys",
  "Jaguars",
  "Dolphins",
  "Patriots",
  "Falcons",
  "Cardinals",
  "Steelers",
  "Saints",
  "Ravens",
  "Jets",
  "Giants",
  "Eagles",
  "Commanders",
  "Colts",
  "Bengals",
  "Titans",
  "Cheifs",
  "Panthers",
  "Rams",
];

let txt = "";

function onClick(choiceCategory) {
  document.getElementById("content").style.display = "block"; // Changes the 'content' ID from none to block to display
  // This Else If statement should display different content depending on which category the uses picks
  txt = "";

  if (choiceCategory == "cars") {
    let length = cars.length;
    let randLogo = Math.floor(Math.random() * length);
    let answer = cars[randLogo]; // Assigns random logo every reload

    cars.forEach(devinMethod);
    document.getElementById("user-choices").innerHTML = txt;

    document.getElementById("correct-answer").innerHTML =
      "The correct answer is: " + answer; // Once Project is complete this won't show until correct answer is selected, keeping it showing for test purposes
  } else if (choiceCategory == "fast-food") {
    // Specifics
    let length = foods.length;
    let randLogo = Math.floor(Math.random() * length);
    let answer = foods[randLogo]; // Assigns random logo every reload

    foods.forEach(devinMethod);
    document.getElementById("user-choices").innerHTML = txt;

    document.getElementById("correct-answer").innerHTML =
      "The correct answer is: " + answer; // Once Project is complete this won't show until correct answer is selected, keeping it showing for test purposes
  } else if (choiceCategory == "clothing") {
    // Specifics
    let length = clothing.length;
    let randLogo = Math.floor(Math.random() * length);
    let answer = clothing[randLogo]; // Assigns random logo every reload

    clothing.forEach(devinMethod);
    document.getElementById("user-choices").innerHTML = txt;

    document.getElementById("correct-answer").innerHTML =
      "The correct answer is: " + answer; // Once Project is complete this won't show until correct answer is selected, keeping it showing for test purposes
  } else if (choiceCategory == "football") {
    // Specifics
    let length = football.length;
    let randLogo = Math.floor(Math.random() * length);
    let answer = football[randLogo]; // Assigns random logo every reload

    football.forEach(devinMethod);
    document.getElementById("user-choices").innerHTML = txt;

    document.getElementById("correct-answer").innerHTML =
      "The correct answer is: " + answer; // Once Project is complete this won't show until correct answer is selected, keeping it showing for test purposes
  }
}

// Allows for each array to have every item listed through when called in onClick function
function devinMethod(value) {
  txt += '<button onclick="theAnswer(${value})">' + value + "</button>";
}

function newButtons() {
  // This Function will be needed to have the devinMethod buttons be mapped to correct answers and images
}

function theAnswer() {
  // This function should be able to compare the new button that was clicked to the answer
  if (value == answer) {
    document.getElementById("correct-answer").innerHTML = "You Guessed it!";
  } else {
    document.getElementById("correct-answer").innerHTML = "Guess Again";
  }
}

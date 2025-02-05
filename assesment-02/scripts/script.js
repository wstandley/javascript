// Add JS to add total cost of what customer ordered //

// Drink Functions
function getDrink1() {
  document.getElementById("count_drink1").style.display = "inline-block";
}

function getDrink2() {
  document.getElementById("count_drink2").style.display = "inline-block";
}

function getDrink3() {
  document.getElementById("count_drink3").style.display = "inline-block";
}

function getDrink4() {
  document.getElementById("count_drink4").style.display = "inline-block";
}
function getDrink5() {
  document.getElementById("count_drink5").style.display = "inline-block";
}

// Sandwich Functions

function getSandwich1() {
  document.getElementById("count_sandwich1").style.display = "inline-block";
}

function getSandwich2() {
  document.getElementById("count_sandwich2").style.display = "inline-block";
}

function getSandwich3() {
  document.getElementById("count_sandwich3").style.display = "inline-block";
}

function getSandwich4() {
  document.getElementById("count_sandwich4").style.display = "inline-block";
}

function getSandwich5() {
  document.getElementById("count_sandwich5").style.display = "inline-block";
}

// Drinks Functions

function getSide1() {
  document.getElementById("count_side1").style.display = "inline-block";
}

function getSide2() {
  document.getElementById("count_side2").style.display = "inline-block";
}

function getSide3() {
  document.getElementById("count_side3").style.display = "inline-block";
}

function getSide4() {
  document.getElementById("count_side4").style.display = "inline-block";
}

function getSide5() {
  document.getElementById("count_side5").style.display = "inline-block";
}

// Total Cost

function totalCost() {
  let name = document.getElementById("name").value;

  let drink_1 = document.getElementById("how_many_drinks1").value * 2.99;

  let drink_2 = document.getElementById("how_many_drinks2").value * 2.99;

  let drink_3 = document.getElementById("how_many_drinks3").value * 2.99;

  let drink_4 = document.getElementById("how_many_drinks4").value * 2.99;

  let drink_5 = document.getElementById("how_many_drinks5").value * 2.99;

  let cost_drinks = drink_1 + drink_2 + drink_3 + drink_4 + drink_5;

  let sandwich_1 = document.getElementById("how_many_sandwiches1").value * 6.99;

  let sandwich_2 = document.getElementById("how_many_sandwiches2").value * 7.99;

  let sandwich_3 = document.getElementById("how_many_sandwiches3").value * 8.99;

  let sandwich_4 = document.getElementById("how_many_sandwiches4").value * 9.99;

  let sandwich_5 =
    document.getElementById("how_many_sandwiches5").value * 12.99;

  let cost_sandwiches =
    sandwich_1 + sandwich_2 + sandwich_3 + sandwich_4 + sandwich_5;

  let side_1 = document.getElementById("how_many_sides1").value * 2.99;

  let side_2 = document.getElementById("how_many_sides2").value * 4.99;

  let side_3 = document.getElementById("how_many_sides3").value * 4.99;

  let side_4 = document.getElementById("how_many_sides4").value * 3.99;

  let side_5 = document.getElementById("how_many_sides5").value * 1.99;

  let cost_sides = side_1 + side_2 + side_3 + side_4 + side_5;

  var totalCost = cost_drinks + cost_sandwiches + cost_sides;

  document.getElementById("order_total").innerHTML =
    name + ", your total is: $" + totalCost;
}

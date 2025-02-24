let randomNum = Math.floor(Math.random() * 1000) + 1;

function onClick() {
  let guessInput = document.getElementById("guess").value;
  let guess = parseInt(guessInput);

  if (guess === randomNum) {
    document.getElementById("hot_cold").innerHTML =
      "You Guessed It! Congratulations!";
    document.getElementById("bodies").style.backgroundColor = "red";
  } else if (Math.abs(randomNum - guess) <= 5) {
    document.getElementById("hot_cold").innerHTML = "You Are Extremely Warm!";
    document.getElementById("bodies").style.backgroundColor = "orangered";
  } else if (Math.abs(randomNum - guess) <= 10) {
    document.getElementById("hot_cold").innerHTML = "You Are Really Warm!";
    document.getElementById("bodies").style.backgroundColor = "orange";
  } else if (Math.abs(randomNum - guess) <= 20) {
    document.getElementById("hot_cold").innerHTML = "You Are Warmer!";
    document.getElementById("bodies").style.backgroundColor = "tomato";
  } else if (Math.abs(randomNum - guess) <= 50) {
    document.getElementById("hot_cold").innerHTML = "You Are Kind of Warm!";
    document.getElementById("bodies").style.backgroundColor = "yellow";
  } else if (Math.abs(randomNum - guess) <= 100) {
    document.getElementById("hot_cold").innerHTML = "You Are Cool";
    document.getElementById("bodies").style.backgroundColor = "aqua";
  } else if (Math.abs(randomNum - guess) <= 200) {
    document.getElementById("hot_cold").innerHTML = "You Are Colder.";
    document.getElementById("bodies").style.backgroundColor = "skyblue";
  } else {
    document.getElementById("hot_cold").innerHTML = "You are Very Cold.";
    document.getElementById("bodies").style.backgroundColor = "blue";
  }
}

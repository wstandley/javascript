function addDate() {
  let today = new Date();
  document.getElementById("myDate").innerHTML = today;
  document.getElementById("name").value = "";
  document.getElementById("rm1length").value = "";
  document.getElementById("rm1width").value = "";
  document.getElementById("rm1height").value = "";
  document.getElementById("rm1cost").value = "";
}

function estimate() {
  let name = document.getElementById("name").value;

  numRooms = document.getElementById("rooms").value;
  if (numRooms == 1) {
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = length * height * 2 + length * width * 2;
    let cost = totalSqFt * 0.65;
    document.getElementById("rm1cost").value = cost;
    var totalCost = cost;
    document.getElementById("estimate").innerHTML =
      name + ", your estimate is: $" + totalCost;
    var totalCost = cost;
    document.getElementById("estimate").innerHTML =
      name + ", your estimate is: $" + totalCost;
    var totalCost = cost;
    document.getElementById("estimate").innerHTML =
      name + ", your estimate is: $" + totalCost;
  } else if (numRooms == 2) {
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = length * height * 2 + length * width * 2;
    let cost = totalSqFt * 0.65;
    document.getElementById("rm1cost").value = cost;
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = length2 * height2 * 2 + length2 * width2 * 2;
    let cost2 = totalSqFt2 * 0.65;
    document.getElementById("rm2cost").value = cost2;
    var totalCost = cost + cost2;
    document.getElementById("estimate").innerHTML =
      name + ", your estimate is: $" + totalCost;
  } else if (numRooms == 3) {
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = length * height * 2 + length * width * 2;
    let cost = totalSqFt * 0.65;
    document.getElementById("rm1cost").value = cost;
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = length2 * height2 * 2 + length2 * width2 * 2;
    let cost2 = totalSqFt2 * 0.65;
    document.getElementById("rm2cost").value = cost2;
    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt3 = length3 * height3 * 2 + length3 * width3 * 2;
    let cost3 = totalSqFt3 * 0.65;
    document.getElementById("rm3cost").value = cost3;
    var totalCost = cost + cost2 + cost3;
    document.getElementById("estimate").innerHTML =
      name + ", your estimate is: $" + totalCost;
  }
}

function showScreen() {
  numRooms = document.getElementById("rooms").value;
  if (numRooms == 1) {
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
  } else if (numRooms == 2) {
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "none";
  } else if (numRooms == 3) {
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "block";
  }
}

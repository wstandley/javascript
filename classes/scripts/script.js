class Teams {
  constructor(color1, color2, city, state) {
    this.color1 = color1;
    this.color2 = color2;
    this.city = city;
    this.state = state;
  }

  teamColor1() {
    return `This teams primary color is ${this.color1}`;
  }
  teamColor2() {
    return `This teams secondary color is ${this.color2}`;
  }
  teamCity() {
    return `This teams city is ${this.city}`;
  }
  teamState() {
    return `This teams state is ${this.state}`;
  }
}

const packers = new Teams("green", "gold", "GreenBay", "Wisconsin");

document.getElementById("tc1").innerHTML = packers.teamColor1();
document.getElementById("tc2").innerHTML = packers.teamColor2();
document.getElementById("city").innerHTML = packers.teamCity();
document.getElementById("state").innerHTML = packers.teamState();

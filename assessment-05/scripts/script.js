// ---------------------- While Loop For Months ----------------- //

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

let button = "";

for (let month in months) {
  let holidays = "";

  switch (months[month]) {
    case "January":
      holidays =
        "<li>New Year's Day</li> <br> <li>Martin Luther King Jr. Day</li> <br>";
      break;
    case "February":
      holidays =
        "<li>Groundhog Day</li> <br> <li>Valentine's Day</li> <br> <li>Presidents' Day</li> <br>";
      break;
    case "March":
      holidays =
        "<li>St.Patrick's Day</li> <br> <li>Daylight Saving Time</li> <br>";
      break;
    case "April":
      holidays =
        "<li>April Fools' Day</li> <br> <li>Easter</li> <br> <li>Earth Day</li> <br>";
      break;
    case "May":
      holidays =
        "<li>Cinco de Mayo</li> <br> <li>Mother's Day</li> <br> <li>Memorial Day</li> <br>";
      break;
    case "June":
      holidays =
        "<li>Father's Day</li> <br> <li>Juneteenth</li> <br> <li>Independence Day</li> <br>";
      break;
    case "July":
      holidays =
        "<li>Independence Day</li> <br> <li>World Population Day</li> <br>";
      break;
    case "August":
      holidays =
        "<li>National Watermelon Day</li> <br> <li>First Day of School</li> <br>";
      break;
    case "September":
      holidays = "<li>Labor Day</li> <br> <li>Rosh Hashanah</li> <br>";
      break;
    case "October":
      holidays = "<li>Columbus Day</li> <br> <li>Halloween</li> <br>";
      break;
    case "November":
      holidays = "<li>Veterans Day</li> <br> <li>Thanksgiving Day</li> <br>";
      break;
    case "December":
      holidays = "<li>Christmas Day</li> <br> <li>New Year's Eve</li> <br>";
      break;
    default:
      holidays = "No Holidays Listed";
  }

  button += months[month] + "<br>" + holidays + "<br>";
}

document.getElementById("months").innerHTML = button;

// ---------------------------------------------------------------- //

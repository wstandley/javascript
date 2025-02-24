/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const testing = new Date();
document.getElementById("basic").innerHTML = testing;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const todaysDate = new Date("2025-02-24");
document.getElementById("today").innerHTML = todaysDate;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date(2003, 2, 13);
document.getElementById("birthday").innerHTML = birthday.toDateString();

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = todaysDate.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date("03/13/2003");
document.getElementById("date1").innerHTML = date1;

const date2 = new Date("2025");
document.getElementById("date2").innerHTML = date2;

const date3 = new Date("2025-02");
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const get1 = new Date("2003-04-14");
document.getElementById("get1").innerHTML = get1.getFullYear();
document.getElementById("get2").innerHTML = get1.getMonth();
document.getElementById("get3").innerHTML = get1.getDate();
document.getElementById("get4").innerHTML = get1.getDay();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const set1 = new Date("March 13, 2003");
set1.setFullYear(2010);
document.getElementById("set1").innerHTML = set1;

set1.setMonth(5);
document.getElementById("set2").innerHTML = set1;

set1.setDate(20);
document.getElementById("set3").innerHTML = set1;

set1.setSeconds(45);
document.getElementById("set4").innerHTML = set1;

// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}
/*
function scope() {
    //fix the errors
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    let dog2 = "Nessie";
    dog2 = "Nessie";
    var dog3 = "Paisley";
    let dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog1").innerHTML = dog3;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    dogs[0] = "Ollie Bear";
    dogs = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("doggos").innerHTML = dogs;
}

function myMath() {
    // create statements demonstrating the use of each operator
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    document.getElementById("plus_equals").innerHTML = "x += 1" + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    ;

}
*/
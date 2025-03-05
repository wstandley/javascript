/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = [
  "The Legend of Zelda",
  "Pokemon",
  "Super Smash Bros",
  "Stardew Valley",
  "Halo",
  "Monster Hunter",
  "Apex Legends",
  "Rocket League",
];

let game_list = "";
for (const game of games) {
  game_list += game + "<br>";
}

document.getElementById("list").innerHTML = game_list;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set([
  "Paint It Black",
  "Dr.Feelgood",
  "Seven Nation Army",
  "All the Small Things",
  "Piano Man",
  "Footloose",
]);

let song_list = "";
for (const song of songs) {
  song_list += song + "<br>";
}
document.getElementById("set1").innerHTML = song_list;

// add two more songs to the set then display in the set2 paragraph

songs.add("Are You Gonna Be My Girl");
songs.add("Killer Queen");

for (const song of songs) {
  song_list += song + "<br>";
}
document.getElementById("set1").innerHTML = song_list;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const names = new Map([
  ["Will", "wstandley@students.mchenry.edu"],
  ["Camren", "noemail@gmail.com"],
  ["Logan", "example@gmail.com"],
  ["Josh", "josh@yahoo.com"],
  ["Gerald", "guesswho@aol.com"],
]);

let names_list = "";
names.forEach(function (value, key) {
  names_list += key + ": " + value + "<br>";
});

document.getElementById("map1").innerHTML = names_list;

// add two new names and emails and display in map2 use the forEach() method

names.set("Jerry", "jerry@gmail.com");
names.set("Ali", "AliHasAnEmail@yahoo.com");

let new_names_list = "";
names.forEach(function (value, key) {
  new_names_list += key + ": " + value + "<br>";
});

document.getElementById("map2").innerHTML = new_names_list;
// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = names.get("Will");

// JSON formatted TV Shows
const tv_shows = [
  {
    "Name of Show": "The Office",
    "Main Character": "Michael Scott",
    "Streaming Service": "Peacock",
    "Start Date": "March 24, 2005",
  },
  {
    "Name of Show": "Parks and Recreation",
    "Main Character": "Leslie Knope",
    "Streaming Service": "Peacock",
    "Start Date": "April 9, 2009",
  },
  {
    "Name of Show": "Friends",
    "Main Character": "Rachel Green",
    "Streaming Service": "Prime Video",
    "Start Date": "September 22, 1994",
  },
  {
    "Name of Show": "You",
    "Main Character": "Joe Goldberg",
    "Streaming Service": "Netflix",
    "Start Date": "September 9, 2018",
  },
  {
    "Name of Show": "Wednesday",
    "Main Character": "Wednesday Addams",
    "Streaming Service": "Netflix",
    "Start Date": "November 23, 2022",
  },
];

const tvShowings = document.getElementById("tvShows");

if (tvShowings) {
  // Loops through each show
  tv_shows.forEach((show) => {
    let showName = show["Name of Show"];
    let mainChar = show["Main Character"];
    let streamServ = show["Streaming Service"];
    let startDay = show["Start Date"];

    tvShowings.innerHTML += `<b>${showName}</b><br><li>Main Character: ${mainChar}</li><br><li>Streaming On: ${streamServ}</li><br><li>First Aired: ${startDay}</li><br>`;
  });
}

// Above Code works

// jQuery 1 Below
$(document).ready(function () {
  $("#jay-quack1").animate({ left: "42%", right: "42%" }, "slow");

  $("#appear").click(function () {
    $("#stuff").show();
  });
});

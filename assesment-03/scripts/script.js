const car1 = {
  year: "1986",
  make: "Pontiac",
  model: "Fiero 2M6",
  image:
    "https://www.outmotorsports.com/wp-content/uploads/2020/05/fiero16-1-e1590964780637.jpg",
  description:
    "The Pontiac Fiero was introduced in 1984 as GMs way to compete with the more commonly known Toyota MR2. However, its production only last for 4 years due to early production flaws. These flaws were with an amp that powered speakers in their headrests, which would catch on fire and would quickly spread to the rest of the car.",
};

const car2 = {
  year: "2020",
  make: "Mazda",
  model: "CX-5",
  image: "https://i.gaw.to/content/photos/39/90/399037_2020_Mazda_CX-5.jpg",
  description:
    "The Mazda CX5 is one of Mazda's best selling models over the past few years. It is a comfortable 4-door SUV that averages around 26mpg. It also has similar family members in the CX-3, CX-9, CX-30, CX-50, and CX-90.",
};

const car3 = {
  year: "2002",
  make: "Subaru",
  model: "WRX",
  image:
    "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/KPvjaoPL-V-lm6tOi8O-(edit).jpg?t=165889328692",
  description:
    'The 2002 Subaru WRX was one of the first years that Subaru introduced the Impreza/WRX models to the North american market. It is most commonly known to be known as one of the best cars to use in rally races world wide. One was also featured in the movie "Baby Driver".',
};

const car4 = {
  year: "2014",
  make: "Cheverlot",
  model: "Camaro",
  image:
    "https://di-uploads-pod3.s3.amazonaws.com/chevyofhomewood/uploads/2013/10/2014_Chevy_Camaro_2SS.jpg",
  description:
    "As one of Cheverlot's most highly regarded models, the Camaro is a fan favorite. It is a 2 door coupe muscle car that packs a punch. It has been around for generations and its main competitors are the Ford Mustang and Dodge Charger/Challenger.",
};

const car5 = {
  year: "2008",
  make: "Ford",
  model: "Mustang GT",
  image:
    "https://cdn.dealeraccelerate.com/mankato/1/3275/231783/1920x1440/2008-ford-mustang-shelby-gt",
  description:
    "Like the Chevy Camaro, the Ford Mustang is Ford's highest regarded and fan favorited vehicle. However, it does have a higher power family member with the Shelby Cobra both the GT350 and GT500. They my have similar bodies but the Shelby Cobras are built for higher power and performance.",
};

function display() {
  // --------------------- Heading JS -------------------//
  let heading = "Functions, Objects, Events, and Strings";
  document.getElementById("heading").innerHTML = heading;

  // ---------------------- Main Body JS ------------------//
  let beep1 =
    `<h2>${car1.year} ${car1.make} ${car1.model}</h2>` +
    `<img src = ${car1.image}>` +
    `<h3>Description</h3>` +
    `<p>${car1.description}</p>`;
  document.getElementById("car1").innerHTML = beep1;

  let beep2 =
    `<h2>${car2.year} ${car2.make} ${car2.model}</h2>` +
    `<img src = ${car2.image}>` +
    `<h3>Description</h3>` +
    `<p>${car2.description}</p>`;
  document.getElementById("car2").innerHTML = beep2;

  let beep3 =
    `<h2>${car3.year} ${car3.make} ${car3.model}</h2>` +
    `<img src = ${car3.image}>` +
    `<h3>Description</h3>` +
    `<p>${car3.description}</p>`;
  document.getElementById("car3").innerHTML = beep3;

  let beep4 =
    `<h2>${car4.year} ${car4.make} ${car4.model}</h2>` +
    `<img src = ${car4.image}>` +
    `<h3>Description</h3>` +
    `<p>${car4.description}</p>`;
  document.getElementById("car4").innerHTML = beep4;

  let beep5 =
    `<h2>${car5.year} ${car5.make} ${car5.model}</h2>` +
    `<img src = ${car5.image}>` +
    `<h3>Description</h3>` +
    `<p>${car5.description}</p>`;
  document.getElementById("car5").innerHTML = beep5;

  // ----------------------- Foooter JS -------------------//
  let feet = "&copy 2025 Will Standley";
  document.getElementById("footing").innerHTML = feet;
}

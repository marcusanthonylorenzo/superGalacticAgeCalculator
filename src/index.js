import "./css/styles.css";
import { Planet, User } from "./../src/js/objects.js";

// const earth = new Planet("Earth", 1);
// const mercury = new Planet("Mercury", .24);
// const venus = new Planet("Venus", .62);
// const mars = new Planet("Mars", 1.88);
const jupiter = new Planet("Jupiter", 11.86);

/* Define Users here:
Note. For both scales: 100 = Perfect, 80 = Good, 60 = OK, 40 = Bad, 20 = Terrible, 0 = you don't eat at all.
("name", age, activity level scale 1-100, Diet scale 1-100) */
// const marcus = new User("Marcus", 100, 100, 50);
// const grace = new User("Grace", 31, 20, 10);
const heirani = new User("Heirani", 19, 70, 70);

//Output Logic
const getAgeOnPlanet = function(user, planet){
  let age = user.age;
  let newAge = planet.convertAge(age);
  return newAge;
};

export const relativeAges = function (user, planet){
  let display = document.querySelector(".display");
  let h2 = document.createElement("h2");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  const send = getAgeOnPlanet(user, planet);
  display.appendChild(h2);
  h2.textContent = `Hello, ${user.name}`;
  display.appendChild(h4);
  h4.textContent = `${user.age} years old on Earth, and ${send} years old, on the planet of ${planet.name}.`;
  display.appendChild(p);

  //official age remaining on earth, then on another planet.
  const lifeLeftEarth = user.lifeExpectancy(send);
  const lifeLeftBeyond = planet.convertAge(lifeLeftEarth);

  if (user.age > (user.age + lifeLeftEarth) || send > lifeLeftBeyond) {
    p.textContent = `${user.name} has lived ${Math.abs(lifeLeftEarth)} years longer than the life expectancy of ${user.age + lifeLeftEarth}. Congrats, you've managed to prolong the inevitable. Death is Tom and you are Jerry.`;
  } else {
    p.textContent = `${lifeLeftEarth} years of life remaining on Earth, and ${lifeLeftBeyond} years of life remaining on the planet ${planet.name}. ${user.name} has a life expectancy of ${user.age + lifeLeftEarth} years on Earth and on ${planet.name}, ${send + lifeLeftBeyond} years total.`;
  }
};

//Run Program
const submit = document.getElementById(`submit`);
submit.addEventListener('click', function(ev){
  ev.preventDefault();
  //Change user here, or modify new user objects above.
  let user = heirani;
  //Change planet here, select from new objects at top of code.
  let planet = jupiter;
  relativeAges(user, planet);
});
import { Planet, User, getAgeOnPlanet } from "./../src/js/objects.js";

//define planets
const earth = new Planet("Earth", 1);
const mercury = new Planet("Mercury", .24);
const venus = new Planet("Venus", .62);
const mars = new Planet("Mars", 1.88);
const jupiter = new Planet("Jupiter", 11.86);

//define users
const marcus = new User("Marcus", 34);
const grace = new User("Grace", 31);
const heirani = new User("Heirani", 19, 70, 70);
console.log(earth, mercury, venus, mars, jupiter, grace, heirani, marcus);

//triple check values
// console.log(`heiranis normal earth age`, heirani.age);
// let h = heirani.lifeExpectancy();
// console.log(`heirani's earth age remaining`, h);

// console.log(`heirani age on jupiter`, jupiter.convertAge(heirani.age));
// console.log(`heirani age remaining on jupiter`, jupiter.convertAge(h));

// console.log(`heirani age on earth`, earth.convertAge(heirani.age));
// console.log(`heirani age remaining on earth`, earth.convertAge(h));



const submit = document.getElementById(`submit`);
submit.addEventListener('click', function(ev){
  ev.preventDefault();

  console.log("clicky boi");
  let send = getAgeOnPlanet(heirani, venus);
  console.log(send);
  return send;
});
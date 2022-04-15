import { Planet, User, relativeAges } from "./../src/js/objects.js";

const earth = new Planet("Earth", 1);
const mercury = new Planet("Mercury", .24);
const venus = new Planet("Venus", .62);
const mars = new Planet("Mars", 1.88);
const jupiter = new Planet("Jupiter", 11.86);

/**
*Define Users here:
* ("name", age, activity level scale 1-100, Diet scale 1-100)
* Note. For both scales: 100 = Perfect, 80 = Good, 60 = OK, 40 = Bad, 20 = Terrible, 0 = you don't eat at all.
**/
const marcus = new User("Marcus", 90, 100, 50);
const grace = new User("Grace", 31);
const heirani = new User("Heirani", 19, 70, 70);

console.log(earth, mercury, venus, mars, jupiter, grace, heirani, marcus);
//click event to run planetary age conversions
const submit = document.getElementById(`submit`);
submit.addEventListener('click', function(ev){
  ev.preventDefault();

  //PRIMARY input, change values here to change output/conversion results.
  let user = marcus;
  let planet = venus;

  relativeAges(user, planet);
});
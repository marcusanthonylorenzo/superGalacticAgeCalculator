import { Planet, User, relativeAges } from "./../src/js/objects.js";

//define planets
const earth = new Planet("Earth", 1);
const mercury = new Planet("Mercury", .24);
const venus = new Planet("Venus", .62);
const mars = new Planet("Mars", 1.88);
const jupiter = new Planet("Jupiter", 11.86);

//define users
const marcus = new User("Marcus", 34, 100, 50);
const grace = new User("Grace", 31);
const heirani = new User("Heirani", 19, 70, 70);
console.log(earth, mercury, venus, mars, jupiter, grace, heirani, marcus);


//click event to run planetary age conversions
const submit = document.getElementById(`submit`);
submit.addEventListener('click', function(ev){
  ev.preventDefault();

  //example values
  let user = marcus;
  let planet = jupiter;

  //assign user input to these values.
  relativeAges(user, planet);
});
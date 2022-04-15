import { Planet, User } from "./../src/js/objects.js";

const earth = new Planet("Earth", 1);
const mercury = new Planet("Mercury", .24);
const venus = new Planet("Venus", .62);
const mars = new Planet("Mars", 1.88);
const jupiter = new Planet("Jupiter", 11.86);

console.log(earth, mercury, venus, mars, jupiter);
console.log(`you are ${mercury.convertAge(35)} earth years on the planet ${mercury.name}.`);
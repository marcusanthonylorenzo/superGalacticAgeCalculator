import { Planet, User } from "./../src/js/objects.js";

describe(`Planet`, () => {
  
  test(`It should create a new Planet object.`, () => {
    const earth = new Planet("Earth", 1);
    console.log(earth);
  });

  test(`It should create two new Planet objects.`, () => {
    const earth = new Planet("Earth", 1);
    const mercury = new Planet("Mercury", .24);
    console.log(earth, mercury, earth.earthYearsRatio, mercury.earthYearsRatio);
  });
  
  test(`It should create Planet.convertAge method: method should take int arguement and perform basic multiplication.`, () => {
    const mercury = new Planet("Mercury", .24);

    mercury.convertAge = function (userAge){ 
      console.log(userAge);
      return userAge * this.earthYearsRatio;
    };
    const mercuryAge = mercury.convertAge(35);
    console.log(`you are ${mercuryAge} earth years on the planet ${mercury.name}.`);
  });

});


// describe(`User`, () => {
  
//   test(`It should create a new User object.`, () => {

//   });

// });

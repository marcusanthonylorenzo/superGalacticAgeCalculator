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
  

});


// describe(`User`, () => {
  
//   test(`It should create a new User object.`, () => {

//   });

// });

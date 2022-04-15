import { Planet, User } from "./../src/js/objects.js";


//Planet class Tests.
describe(`Planet`, () => {
  
  test(`It should create a new Planet object.`, () => {
    const earth = new Planet("Earth", 1);
    console.log(earth);

    expect(earth.name).toEqual("Earth");
    expect(earth.earthYearsRatio).toEqual(1);
  });

  test(`It should create two new Planet objects.`, () => {
    const earth = new Planet("Earth", 1);
    const mercury = new Planet("Mercury", .24);
    console.log(earth, mercury, earth.earthYearsRatio, mercury.earthYearsRatio);
    expect(earth.name).toEqual("Earth");
    expect(earth.earthYearsRatio).toEqual(1);
    expect(mercury.name).toEqual("Mercury");
    expect(mercury.earthYearsRatio).toEqual(.24);
  });


});

describe(`Planet.convertAge()`, () => {

  test(`It should create Planet.convertAge method: method should take int arguement and perform basic multiplication.`, () => {
    const mercury = new Planet("Mercury", .24);

    mercury.convertAge = function (userAge){ 
      console.log(userAge);
      return userAge * this.earthYearsRatio;
    };
    const mercuryAge = mercury.convertAge(35);
    console.log(`you are ${mercuryAge} earth years on the planet ${mercury.name}.`);

    expect(mercury.convertAge(35)).toEqual(8.4);
  });

  test(`It should create all instances of new Planet objects: Mercury, Venus, Mars, and Jupiter. Each planet should operate convertAge() accordingly. `, () => {
    const earth = new Planet("Earth", 1);
    const mercury = new Planet("Mercury", .24);
    const venus = new Planet("Venus", .62);
    const mars = new Planet("Mars", 1.88);
    const jupiter = new Planet("Jupiter", 11.86);

    expect(earth.convertAge(1)).toEqual(1);
    expect(mercury.convertAge(1)).toEqual(.24);
    expect(venus.convertAge(1)).toEqual(.62);
    expect(mars.convertAge(1)).toEqual(1.88);
    expect(jupiter.convertAge(1)).toEqual(11.86);
  });

});


//User class Tests.
describe(`User`, () => {
  
  test(`It should create a new User object.`, () => {
    const newUser = new User("Marcus", 34);

    expect(newUser.name).toEqual("Marcus");
    expect(newUser.age).toEqual(34);
  });

  test(`It should create two different users.`, () => {
    const marcus = new User("Marcus", 34);
    const grace = new User("Grace", 31);

    expect(marcus.age).toEqual(34);
    expect(grace.age).toEqual(31);
  });

});

describe(`User.lifeExpectancy`, () => {

  test(`It should take the average of User.activityLevel and User.diet, subtract the user age to return an int value`, () => {
    const marcus = new User("Marcus", 34);

    //will gather value from user input in future, will insert int values for testing purposes.
    marcus.activityLevel = 70;
    marcus.diet = 40;
    marcus.lifeExpectancy = function(){
      const health = (this.activityLevel + this.diet)/2;
      return health - this.age;
    };

    const remainingAge = marcus.lifeExpectancy();
    expect(remainingAge).toEqual(21);
    console.log(`${marcus.name} is ${marcus.age} years old, and based on an activity/diet evaluation of ${marcus.activityLevel}/${marcus.diet} is expected to live another ${remainingAge} years.`);

    expect(marcus.activityLevel).toEqual(70);
    expect(marcus.diet).toEqual(40);
  });  

});

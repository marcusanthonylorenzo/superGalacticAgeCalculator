export class Planet {
  constructor(name, earthYearsRatio){
    this.name = name;
    this.earthYearsRatio = earthYearsRatio;
  }

  convertAge(userAgeOrAgeRemaining){
    let round = userAgeOrAgeRemaining * this.earthYearsRatio;
    return round;
  }
}

export class User {
  constructor(name, age, activityLevel, diet){
    this.name = name;
    this.age = age;
    //9:10am, assign values from user input later, do not need constructor parameters!
    this.activityLevel = activityLevel;
    this.diet = diet;
  }
  
  lifeExpectancy(){
    const health = (this.activityLevel + this.diet)/2;
    return health - this.age;
  }
}

const getAgeOnPlanet = function(user, planet){
  let age = user.age;
  let newAge = planet.convertAge(age);
  return newAge;
};

//calculate values for age on planet, and age left on that particular planet together.
export const relativeAges = function (user, planet){
  console.log("clicky boi");

  //official age conversion per planet.
  const send = getAgeOnPlanet(user, planet);
  console.log(user.age, `years old on Earth, and `, send, `years old, on the planet of ${planet.name}.`);

  //official age remaining on earth, then on another planet.
  const lifeLeftEarth = user.lifeExpectancy(send);
  const lifeLeftBeyond = planet.convertAge(lifeLeftEarth);

  if (user.age > (user.age + lifeLeftEarth) || send > lifeLeftBeyond) {
    console.log(`${user.name} has lived `, Math.abs(lifeLeftEarth), `years longer than the life expectancy of `, (user.age + lifeLeftEarth),`. Congrats, you've managed to prolong the inevitable. Death is Tom and you are Jerry.`);
  } else {
    console.log(lifeLeftEarth, `years of life remaining on Earth, and `, lifeLeftBeyond, `years of life remaining on the planet ${planet.name}.`);
  }
};


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
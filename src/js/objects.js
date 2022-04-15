
export class Planet {
  constructor(name, earthYearsRatio){
    this.name = name;
    this.earthYearsRatio = earthYearsRatio;
  }

  convertAge(userAge){
    console.log(userAge);
    return userAge * this.earthYearsRatio;
  }
}

export class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
    //9:10am, assign values from user input later!
    this.activityLevel = 50;
    this.diet = 50;
  }

}
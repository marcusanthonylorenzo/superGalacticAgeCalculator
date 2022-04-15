
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

const mercury = new Planet("Mercury", .24);
console.log(`you are ${mercury.convertAge(35)} earth years on the planet ${mercury.name}.`);

// export class User {
//   constructor(name, userAge){
//     this.name = name;
//     this.userAge = userAge;
//     //9:10am, assign values from user input later!
//     this.activityLevel = 50;
//     this.diet = 50;
//   }

// }

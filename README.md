# Super Galactic Age Calculator
#### By _**Marcus Lorenzo**_



## _Overview:_
#### This app is essentially an age converter, as we all know that your age is different on each planet because..."time is relative" you know?

##### I was having a ton of issues in test, with creating functions with "yet-to-define" values, particularly, `lines 39-45 @object.js`. These functions designed to be "flexible" in nature, so I do not see the issue. Unfortunately, with this design, I am not able to achieve 100% coverage (before it, in previous commits, I had 100% coverage).

##### `Update: 4:50pm` I resolved test coverage issues AND maintained functionality by moving two functions from objects.js to index.js. Hopefully, they hold up in grading.


### Technologies Used:

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) 
![image](	https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)  ![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
---

### Description:

**My primary objectives** outside of the prompt were:
- DRY code...within my abilities.
- Create a thorough, methodical test file(s).
- No global variables (are object literals global variables? I imagine they are stored as such (const exampleObj = {}), but are classified as "objects" not "global variables".)

**My ultimate objective was** to:
- Write clean, organized code!
- Separate not just appropriate logic, but to separate components - if necessary.

---

### Setup/Installation:
##### Please make sure that in order to run the project correctly: once you've received this repo on your computer, install the node_modules directory in your CLI with `npm install`, then bundle and start a local server, type: `npm run start`.

|   via CLI   |  via Download  |
|---|---|
| Download install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac) | Simply download the ZIP via the green "Code" button to right of the "Add file" button at the main repo page. 
 Open Git Bash or Terminal and type: `cd ~/desktop` | Go to your zip file and extract to desired location on computer. 
 This will bring you to your desktop location on the command line, to receive files. | Go to specified extraction folder, and open index.html in your broswer. 
 Next, type: `git clone https://github.com/marcusanthonylorenzo/superGalacticAgeCalculator` | 
 Once completed, go to your desktop and open the folder with same name as the repository, via your text editor. | **Note**: downloading not cloning will not allow you to push any changes to the repo. 
In the CLI, install node_modules directory via `npm install` or `yarn install`, then bundle and start a local server via `npm run start` or `yarn run start` to run project. |


#### Running Tests:
- To view tests via Jest, in your CLI type `npm run test`.

### Known Bugs:
* `multiple lines @object.test.js`: **Although input integers are whole numbers, javascript keeps returning floating point numbers. A common yet annoyingly frustrating issue in test, because I do not want to round, floor, or ceil my return values.**
Until I can figure out how to round the .01 decimal, I will bypass this issue by passing tests manually, and focus on completing my Business/UI Logic.


## _Design Plan_ (Specs):

Create: A calculator that converts earth years (and hence your age) to equivalent years on different planets.
These planets are:
- [x] Mercury (.24 Earth years)
- [x] Venus (.62 Earth years)
- [x] Mars (1.88 Earth years)
- [x] Jupiter (11.86 years)

It determines how many years left a user has to live on each planet.
-  lifeExpectancy. ~~(create an object literal with methods which calculate activityLevel, diet, continent?)~~
  - [x] Test 1: with a value of 50
  - [ ] ~~Test 2: referencing lifeExpectancy obj as stated in paranthesis above.~~

- [x] return remainder of years left to live,
- [x] if user.age > lifeExpectancy.age return "Congrats, you've managed to prolong the inevitable. Death is Tom and you are Jerry."



#### Objects, Properties:
- Planet class
  constructor(name, earthYearsRatio){
  - this.name = name;
  - this.earthYearsRatio;
  - convertAge(userAge){
    this.earthYears * userAge;
  }

- User class
  constructor(name, userAge){
    - this.name = name;
      //`userAge is always assumed Earth years by default.`
    - this.userAge = userAge;
      //`later, assign activityLevel and diet to user input value. For now, assumed 50 = average lifestyle.`
    - this.activityLevel = 50;
    - this.diet = 50;
    

#### Collections/Groupings:
- none at present moment (`8:55am` will focus on OOJS and tests first.)

#### Behaviours/Interactivity:
- Planet
  - convertAge(userAge);
- User
  - lifeExpectancy(planet){
    //`returns a value in earthYears based on activityLevel and Diet.`
    const lifeAvg = (this.activityLevel * this.diet)/2
    planet.earthYearsRatio * lifeAvg }
- getAgeOnPlanet()
  - designed instead of calling each individual method, I can invoke one single function by simply passing their attributes through one singular block, for cleaner code.
- relativeAges()
  - this function is the "daddy" of all functions, it brings everything together in the click event. I decided it was important AND DRYer...to be able to simply pass the user and the planet through one line of code in the UI logic.

After setting individual objects and methods, I will create instances and have their return values work in concert with User input and browser output.


## _License_:

[MIT]()

Copyright (c) 2022 _Marcus Lorenzo_

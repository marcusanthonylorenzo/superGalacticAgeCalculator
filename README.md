# Super Galactic Age Calculator
#### By _**Marcus Lorenzo**_



## _Overview:_
This app is essentially an age converter, as we all know that your age is different on each planet because..."time is relative" you know?


### Technologies Used:

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) 
![image](	https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)  ![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
---

### Description:

**My primary objectives** outside of the prompt were:
- Create a thorough, methodical test file(s).
- No global variables (are object literals global variables? I imagine they are stored as such (const exampleObj = {}), but are classified as "objects" not "global variables".)

**My ultimate objective was** to:
- Write clean, organized code!
- Separate not just appropriate logic, but to separate components - if necessary.

---

### Setup/Installation:
|   via CLI   |  via Download  |
|---|---|
| Download install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac) | Simply download the ZIP via the green "Code" button to right of the "Add file" button at the main repo page. 
 Open Git Bash or Terminal and type: **cd ~/desktop** | Go to your zip file and extract to desired location on computer. 
 This will bring you to your desktop location on the command line, to receive files. | Go to specified extraction folder, and open index.html in your broswer. 
 Next, type: **git clone https://github.com/marcusanthonylorenzo/ ** | 
 Once completed, go to your desktop and find the folder with same name as the repository. | **Note**: downloading not cloning will not allow you to push any changes to the repo. 
 Open index.html in your browser. |


### Known Bugs:
* None at present time.


## _Design Plan_:

Create: A calculator that converts earth years (and hence your age) to equivalent years on different planets.
These planets are:
-[ ] Mercury (.24 Earth years)
-[ ] Venus (.62 Earth years)
-[ ] Mars (1.88 Earth years)
-[ ] Jupiter (11.86 years)

It determines how many years left a user has to live on each planet.
- const lifeExpectancy. (create an object literal with methods which calculate activityLevel, diet, continent?)
  - [ ] Test 1: with a value of 100
  - [ ] Test 2: referencing lifeExpectancy obj as stated in paranthesis above.

-[ ] return remainder of years left to live,
-[ ] if user.age > lifeExpectancy.age return "Congrats, you've managed to prolong the inevitable. Death is Tom and you are Jerry."



#### Objects, Properties:
- Planet class
  constructor(name, earthYearsRatio){
  - this.name = name;
  - this.earthYearsRatio;
  - convertAge(userAge){
    this.earthYears * userAge;
    return this.convertedAge;
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

#### Behaviours/Specs, Interactivity:
- Planet
  - convertAge(userAge);
- User
  - lifeExpectancy(planet){
    //`returns a value in earthYears based on activityLevel and Diet.`
    const lifeAvg = (this.activityLevel * this.diet)/2
    planet.earthYearsRatio * lifeAvg }


## _License_:

[MIT]()

Copyright (c) 2022 _Marcus Padilla_

///////////////////////PRIMITIVE DATA TYPES HOMEWORK/////////////////////////////////
// [1] The Age Calculator

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so:
// "They are either NN or NN", substituting the values.

const currentYear00 = 2021;
const birthYear00 = 1998;
const Age00 = currentYear00 - birthYear00;
console.log("They are either", Age00, "or", Age00 - 1);
console.log("They are either " + Age00 + " or " + (Age00 - 1));
//Nan - Not a Number

// Get the current year using JavaScripts
let currentYear2 = new Date().getFullYear();
let birthYear2 = 1998;
let Age2 = currentYear2 - birthYear2;
console.log(
  "Using JavaScript to get the current Year : ",
  "They are either",
  Age2,
  "or",
  Age2 - 1
);

// [2] The Lifetime Supply Calculator

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 23;
let maxAge = 100;
let estimatedPerDay = 2;
let LifeTimeAge = maxAge - currentAge;
let totalEat = estimatedPerDay * 365 - LifeTimeAge;
console.log(
  "You will need " +
    totalEat +
    " snacks to last you until the ripe old age of " +
    maxAge +
    " years old."
);

// Using prompt

// let maxAge1 = 100;
// let currentAge1 = prompt ("Please enter your current age : ");
// let estimatedPerDay1  = prompt ("Please enter your how many per Day for snacks  : ");
// let lifeTimeAge1 = maxAge1 - currentAge1;
// let totalEat1 = (estimatedPerDay1 * 365) - lifeTimeAge1;

// console.log ('Your Age : ' + currentAge1);
// console.log ('Your estimated snacks per day : ' + estimatedPerDay1);
// console.log ('You will need ' + totalEat1 + ' snacks to last you until the ripe old age of ' + maxAge1 + ' years old.');
// alert('You will need ' + totalEat1 + ' snacks to last you until the ripe old age of ' + maxAge1 + ' years old.');

// [3] The Geometrizer

// Calculate the properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// circumference of circle (lilitan) = 2 pi r
// Area of circle = pi r ^2
let r = 12;
let C = 2 * Math.PI * r;
console.log("The Circumference of circle is " + C);
let circleArea = Math.PI * r * r;
console.log("The Area is " + circleArea);

// [4] The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

//T(°F) = T(°C) × 1.8 + 32
//T(°C) = T(°F) × (5/9) - 32

let tempC = 35;
let tempF = tempC * 1.8 + 32;
console.log(tempC + "°C is " + tempF + "°F.");

tempF = 53;
tempC = (tempF - 32) * (5 / 9);
console.log(tempF + "°F is " + tempC + "°C.");

////////// CONDITIONALS /////////////////////////////////////////////////////////////////////////////////////

//Synchronous Programming Languages
// Execute Line one ..... Wait till that's complete
// Execute Line two ..... Wait till that's complete
// Execute Line three ..... Wait till that's complete

//Asynchronous Programming Languages
// Start Line one
// Start Line two ..... Wait 10 secs
// Start Line three ..... Wait 10 secs

let numbers = 5;
if (numbers > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

if (numbers > 0) {
  console.log("The number is positive");
} else if (numbers === 5) {
  console.log("The number is 5");
} else {
  console.log("The number is negative");
}

//CONDITIONALS HOMEWORK

// [1] The World Translator

let language;

if (language === "English") {
  console.log("Hello World!");
} else if (language === "French") {
  console.log("Bonjour le monde!");
} else if (language === "Malay") {
  console.log("Hai Dunia!");
} else {
  console.log("Konnichiwa!");
}

// var language1 = ["English", "Malay", "French"];

// for (let lang1 = 0; lang1 < 3; lang1 +=1){
//     let currentLang = language1[lang1];
//     console.log (currentLang, lang1);
// }

// [2] The Grade Assigner

let testScore = 100;

if (testScore >= 90 && testScore <= 100) {
  console.log("A");
} else if (testScore >= 80 && testScore <= 89) {
  console.log("B");
} else if (testScore >= 70 && testScore <= 79) {
  console.log("C");
} else if (testScore >= 60 && testScore <= 69) {
  console.log("D");
} else {
  console.log("F, Fail");
}

// [3] Air Conditioning

let Acond = "Functional";
let currentTemperature = 1;
let desiredTemperature = 12;

if (Acond == "Functional" && currentTemperature >= desiredTemperature) {
  console.log("Turn on the A/C Please");
} else if (
  Acond == "Non-Functional" &&
  currentTemperature >= desiredTemperature
) {
  console.log("Fix the A/C now! It's hot!");
} else if (Acond == "Functional" && currentTemperature <= desiredTemperature) {
  console.log("Fix the A/C whenever you have the chance... It's cool...");
} else {
  console.log(" I'm Okay with that");
}

// [4] You and Your Government

let userAge = 23;

if (userAge >= 35) {
  console.log("You can vote AND hold any place in government!");
} else if (userAge >= 25) {
  console.log("You can vote AND run for the Senate");
} else if (userAge >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can't vote yet!");
}

// [5] Golf

let nickname = "";
let score = 2;
let par = 3;

if (score == 1) {
  console.log("Hole in one");
} else if (score <= par - 2) {
  console.log("Eagle");
} else if (score == par - 1) {
  console.log("Birdie");
} else if (score == par) {
  console.log("Par");
} else if (score == par + 1) {
  console.log("Bogey");
} else if (score == par + 2) {
  console.log("Double Bogey");
} else if (score >= par + 3) {
  console.log("Not sure");
} else {
  console.log("Try again");
}

// [6] Serge Says

let msg = "";

if (msg.charAt(msg.length - 1) == "?") {
  console.log("Sure");
} else if (msg == msg.toUpperCase()) {
  console.log("Woah, chill out!");
} else if (msg == "" || msg == null) {
  console.log("Fine. Be that way! empty wei!");
} else {
  console.log("Whatever.");
}

let msg2 = "";

// msg.length-1 or msg.endsWith("?")
if (msg2.charAt(msg2.length - 1) == "?") {
  console.log("Sure");
} else if (msg2 == "") {
  console.log("Fine. Be that way! empty wei!");
} else if (msg2 == msg2.toUpperCase()) {
  console.log("Woah, chill out!");
} else {
  console.log("Whatever.");
}

// [5] The Pluralizer

let msg3 = "goose";
// isNouns1 = ending with s,x,z,ch,sh
let isNouns1 =
  msg3.charAt(msg3.length - 1) === "s" ||
  msg3.charAt(msg3.length - 1) === "x" ||
  msg3.charAt(msg3.length - 1) === "z" ||
  msg3.slice(-2) === "ch" ||
  msg3.slice(-2) === "sh";

let isNouns2 = msg3.charAt(msg3.length - 1) === "y"; //return boolean

let isNouns3 =
  msg3.charAt(msg3.length - 1) === "y" &&
  (msg3.charAt(msg3.length - 2) === "a" ||
    msg3.charAt(msg3.length - 2) === "e" ||
    msg3.charAt(msg3.length - 2) === "i" ||
    msg3.charAt(msg3.length - 2) === "o" ||
    msg3.charAt(msg3.length - 2) === "u");

let isNouns4 = msg3.slice(-2) === "is";

let isNouns5 =
  (nouns005 = msg3.slice(-2) === "fe") ||
  (nouns005_ = msg3.charAt(msg3.length - 1) === "f");

let isNouns6 = msg3.matchAll() === "oo";

if (isNouns1 && !isNouns4) {
  console.log("Nouns =  " + msg3 + ", Plural = " + msg3 + "es");
} else if (isNouns3) {
  console.log("Nouns =  " + msg3 + ", Plural = " + msg3 + "s");
} else if (isNouns2) {
  let isNouns2 = msg3.replace("y", "ies");
  console.log("Nouns =  " + msg3 + ", Plural = " + isNouns2);
} else if (isNouns4) {
  let isNouns4 = msg3.replace("is", "es");
  console.log("Nouns =  " + msg3 + ", Plural = " + isNouns4);
} else if (isNouns5) {
  if (nouns005) {
    let isNouns5 = msg3.replace("fe", "ves");
    console.log("Nouns =  " + msg3 + ", Plural = " + isNouns5);
  } else {
    let isNouns05 = msg3.replace("f", "ves");
    console.log("Nouns =  " + msg3 + ", Plural = " + isNouns05);
  }
} else if (isNouns6) {
  let isNouns6 = msg3.replace("oo", "ee");
  console.log("Nouns =  " + msg3 + ", Plural = " + isNouns6);
} else {
  console.log(msg3 + "s");
}

// [6] The Rest

////////////// JAVASCRIPT LOOPS//////////////////////////////////////////////////////

// [1] The even / odd reporter

// starting point : 0
// ending point : < 21
// steps : index_X =+ 1

let index_X;
for (index_X = 0; index_X < 21; index_X += 1) {
  if (index_X % 2 === 0) {
    console.log(index_X + " is a even number.");
  } else {
    console.log(index_X + " is a odd number. ");
  }
}

// [2] Multiplication Tables

//  starting point : 1
//  ending point : < 13
//  steps : index_Y += 1

for (let index_Y = 1; index_Y < 13; index_Y += 1) {
  total = index_Y * 9;
  console.log(index_Y + " x 9 = " + total);
}

// [3] The Grade Assigner

//  starting point : testScoreX = 60
//  ending point : testScoreX < 101
//  steps : testScoreX += 1

let grade = ["A", "B", "C", "D", "F"];

for (let finaltestScore = 60; finaltestScore < 101; finaltestScore += 1) {
  let testScore1 = finaltestScore >= 90 && grade[0];
  let testScore2 = finaltestScore >= 80 && grade[1];
  let testScore3 = finaltestScore >= 70 && grade[2];
  let testScore4 = finaltestScore >= 60 && grade[3];

  if (testScore1) {
    console.log("For " + finaltestScore + ", you got an " + grade[0] + ".");
  } else if (testScore2) {
    console.log("For " + finaltestScore + ", you got a " + grade[1] + ".");
  } else if (testScore3) {
    console.log("For " + finaltestScore + ", you got a " + grade[2] + ".");
  } else if (testScore4) {
    console.log("For " + finaltestScore + ", you got a " + grade[3] + ".");
  } else {
    console.log(
      "You got " + finaltestScore + ", it is " + grade[4] + " = Fail"
    );
  }
}
// [4] Golf

// [5] 99 Bottles of Beer

for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
  var bottleWord = "bottle";
  if (numberOfBottles <= 0) {
    bottleWord = "bottles";
    console.log("No more " + bottleWord + " of beer on the wall.");
    console.log("No more " + bottleWord + " of beer,");
    console.log(
      "Go to the store and buy some more, 99 bottles of beer on the wall"
    );
  } else if (numberOfBottles == 1) {
    bottleWord = "bottle";
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
  } else if (numberOfBottles >= 2) {
    bottleWord = "bottles";
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
  }
}

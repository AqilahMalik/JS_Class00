42 + 10;
console.log("Addition, 10 + 32 = " , 10 + 32);

console.log("Substraction, 17 - 4 = " , 17 - 4);

// Multiplication
console.log("Multiplication, 5 * 29 = " , 5 * 29);

//Division
console.log("Division, 82 / 2 = " , 82 / 2);

// // to make comment = ctrl + / 

// // Booleans
console.log("Boolean");
console.log(true);
console.log(false);

// // Strings
console.log("I am double quoted");
console.log('I am single quoted');

// // Escaping Quotes
console.log("I'm fine");
console.log("He said 'okay'");

// // Backslash says ignore the special meaning of the quote here
console.log("She said \"Bagus\"");

// // Concatenation - Combining into strings
console.log("Hello" + " world");
console.log("2 + 2 = " + 4 );

// Random Number
let randomNum = Math.random();
console.log("Your random number is " + randomNum);

// // Properties are static information about the data
console.log("hello".length);

// // Methods are operations you 
console.log("hello" .toUpperCase());

// // undefined - This is empty (it hasn't been defined yet)
console.log(undefined);

//null - This is also empty (it defined no value)
console.log(null);



// // Structural Data Types

// Array
console.log([]);
console.log([1, 2, 3]);

// Object
console.log({}); //empty object

console.log({ courseName: "JavaScript"});

let c ={
    course: "JavaScript Development",
    provider: "General Assembly",
    topics: ["JavaScript", "React", "Firebase"],
    numberOfHours: 60
};

console.log(c.course);
console.log(c.numberOfHours);
// Functions
function logHello () {
	console.log("Hello");
}
// logHello - as identifier

logHello(); // Callsite - run logHello function
logHello();


//Variables

let myFirstVar;
console.log(myFirstVar);

let animal = "Orca";
console.log(animal);
console.log(animal.length);

let alphabet = ["a", "b", "c"];
console.log(alphabet);

let myVar = 42;
myVar = "A string";
myVar = true;
myVar = null;
myVar = "A book";
console.log(myVar);


const favouriteNumber = 42;
const myString = "Hello";
console.log(favouriteNumber, myString);

const currentYear = 2021;
const birthYear = 1998;
const age00 = currentYear - birthYear;
console.log(age00);

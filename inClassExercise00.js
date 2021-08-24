/// PRIMITIVE DATA TYPES IN_CLASS_EXERCISE

// Use parseInt()
// [1] A string to convert into a number
// [2] Convert a strings into an integer

let a1 = "10"; //string
let b1 = parseInt(a1); //number
console.log ('A String to Integer = ' + a1 + " type of "+ typeof(a1));
console.log ('A Integer to String = ' + b1 + " type of "+ typeof(b1));
// toString(); function


// [3] Use toUpperCase()
console.log ("hello".toUpperCase());

// Get the second character out of a string
// [4] charAt() - returns the character at the specified index
let word = "Hello";
console.log (word.charAt(1));
console.log (word[2]);

// [5] use concatenation to combine two strings
console.log ("Hello" + " World!");
let strOne = "Hello";
let strTwo = "World";
console.log (strOne + strTwo);

// [6] Cube numbers
// Math.pow(x,y) x = powered of, y = the value
// cube number is the result when a number has been multiplied by itself twice.
let number = 3;
power = 2;
console.log (Math.pow(power,number));
console.log ("4 squared is " + Math.pow(4,2));

// cube root = punca kuasa 3
// Math.cbrt(x)
console.log ("Cube root of 64 is " + Math.cbrt(64));

// [7] Square root
// Math.sqrt(x)
let num = 25;
console.log ("Square root of 25 is " + Math.sqrt(num));

Math.PI;
Math.pow(4,2);




















// CONDITIONALS IN_CLASS_EXERCISE
//////////////////////////////////////////////////
// [1] What NUmber's bigger?

let numOne = 50;
let numtwo = 100;

if (numOne > numtwo){
    console.log (numOne + " is bigger than " + numtwo);
} else if (numOne < numtwo){
    console.log (numOne + " is smaller than " + numtwo);
}else {
    console.log (numtwo + " is equal to " + numtwo);
}


// Driving Age

let userName = "Sarah";
let age = 20;

if( age < 16 ){
    console.log("Sorry " , userName , "!, you can't drive yet!");
}else{
    console.log("Drive into the sunset " + userName +" !");
};

if( age < 16 ){
    console.log("Sorry " , userName , "!, you can't drive yet!");
}else if (age > 16){
    console.log("Drive into the sunset " + userName +" !");
}else
    console.log("Drive into the sunset " + userName +" !");;



// Using Prompt
// let userName0 = prompt("Enter your name: ");
// alert("Your name is " + userName0);
// console.log (userName0);

// let userName1 = prompt (" Enter your Name: ");
// let age1 = prompt (" Enter your Age : ");

// if( age1 < 16 ){
//     console.log("Sorry" + userName1+ ", you can't drive yet!");
//     alert("Sorry" + userName1+ ", you can't drive yet!");
// }else{
//     console.log("Drive into the sunset, " + userName1+" !");
//     alert("Drive into the sunset, " + userName1+" !");
// };

















// LOOP IN_CLASS_EXERCISE/////////////////////


///////// [1] Log every number from 0 to 10 /////////
// starting point : 0
// ending point : 10
// step : + 1

// Using WHILE loop
let m = 0;
while (m <= 10){ 
    console.log (m);
    m += 1 ;
}

// Using FOR loop
for (let m1 = 0; m1 <= 10; m1 += 1 ){
    console.log(m1);
}

///////// [2] Log every number from 4 to -16 /////////
// starting point : 4
// ending point : -16
// step : - 4

let n = 4;
while (n >= -16){
    console.log (n);
    n -= 4;
}

for (let n1 = 4; n1 >= -16; n1 -= 4){
    console.log (n1);
}

//////// [3] Log every fourth number from 8 to 41 ///////
// starting point : 8
// ending point : 41
// step : + 4

let o = 8;
while (o <= 41){
    console.log ("Fourth number from 8 to 41 : " + o);
    o = o + 4;
}

for (let o1 = 8; o1 <= 41; o1 = o1 + 4){
    console.log ("Fourth number from 8 to 41 : " + o1);
}


//////// [4] The Classic Fizzbuzz Program ///////
// Loop from 0 to 100.
// If the number is evenly divisible by 3, log "Fizz"
// If the number is evenly divisible by 5, log "buzz"
// If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"

// starting point : 0
// ending point : 100
// step : p++

// reminder kena 0
for ( p = 0; p <= 100; p++ ){
    if( (p % 3 == 0) && (p % 5 == 0)){
        console.log ("Fizzbuzz");
    }else if ( p % 3 === 0){
        console.log ("Fizz");
    }else if (p % 5 === 0){
        console.log ("buzz");
    }else{
        console.log (p);
    }
}
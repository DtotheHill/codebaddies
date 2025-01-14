// ====== 8kyu Aspect Ratio Cropping - Part 1 ======//

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

function aspectRatio(x,y){
  let newX = Math.ceil((16/9) * y)
  return [newX,y] 
}


//====== 8kyu Bin to Decimal ======//

// Complete the function which converts a binary number (given as a string) to a decimal number.



function binToDec(bin){
  return parseInt(bin, 2)
}



// ====== 8kyu Remove First and Last Character ======//

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.slice(1,-1)
}


// ====== 8kyu Find the smallest ineger in an array ======//

// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//===== 8kyu Convert a string to a number ======//

// convert string to number

var stringToNumber = function(str){
  return +str
}



// ====== 8kyu Convert a Boolean to a String ======//

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString()
}


// ====== 8kyu You can't code under pressure #1 ======//

// Code as fast as you can! You need to double the integer and return it

function doubleInteger(i) {
  return i*2;
}



//====== 8kyu Jenny's secret message ======//

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//original
// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }



// solution
function greet(name){
  if (name === 'Johnny'){
    return 'Hello, my love!'
}else{
  return "Hello, " + name + "!";
 }
}


// ====== 8kyu Invert values ======//

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map(num => num * -1)
}


// ====== 8kyu Reversed Words ======// 

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}


//====== 8kyu Is he gonna survive? ======//

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


function hero(bullets, dragons){
  if (bullets >= dragons *2){
    return true
  }else {
    return false
  }
}

// ====== 8kyu Calculate BMI ====== //

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
  let bM = weight/height**2
  if (bM <= 18.5){
    return 'Underweight'
  }else if (bM <=25.0){
    return 'Normal'
  }else if (bM <=30.0){
    return 'Overweight'
  }else {
    return 'Obese'
  }
}

// ====== 8kyu Calculate average ======//

// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
   return array.reduce((a, b) => a +b) / array.length;
}


// ====== Simple Multiplication ======//

//  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

 function simpleMultiplication(number) {
  if (number % 2 === 0){
    return number * 8
  }else {
    return number * 9
  }
}

// ====== 8kyu Will you make it? ======//

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >=distanceToPump){
    return true
  }else {
    return false 
  }
};


// ====== 8kyu Reduce but grow ======//

// Given a non-empty array of integers, return the result of multiplying the values together in order. 

function grow(x){
  return x.reduce((a,b)=> a * b)
}


// ====== 8kyu Do I get a bonus ======//

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
  if (bonus === true){
    return `£${salary * 10}`
  }if (bonus === false){
    return `£${salary}`
  }
}


// ====== 8kyu Century from year ======//
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

const century = year => Math.ceil(year/100)


// ====== 8kyu Abbreviate a Two Word Name ======//

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){
  let abbrev = name.split(' ').map(firstLetter => firstLetter[0]).join('.').toUpperCase()
  return abbrev
}



// ====== 8kyu A needle in the haystack ======//

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  let foundIt = haystack.findIndex(index => index === 'needle')
  return `found the needle at position ${foundIt}`
}


//====== 8kyu MakeUpperCase ====== //

// Write a function which converts the input string to uppercase.



function makeUpperCase(str) {
  return str.toUpperCase()
}



// ===== 8kyu Reversed sequence ====== //

// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  const reversey =[]
  for (let i =n; i > 0; i-=1){
    reversey.push(i)
  }
  return reversey
};


// ====== 8kyu Is it Even ======//

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  if(n % 2 ===0){
    return true
  }else {
    return false
  }
}


// ====== 8kyu All Star Code Challenge #18 ====== //

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
  return str.split('').filter((n)=> letter === n).length
}


// ====== 8kyu Squash the bugs ======//

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.


function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
     longest = spl[i].length
    }
  }
  return longest
}


// ======How many lightsabers do you own? ======//

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightsabersDoYouOwn(name) {
  if (name === 'Zach'){
    return 18
  }else {
    return 0
  }
}


// ====== 8kyu The wide mouthed frog! ======//

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}


// ====== 8kyu Find the remainder ====== //

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
  return n > m ? n % m : m % n 
}


// ===== 8lyui Alan Partridge II - Apple Turnover ======//

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

function apple(x){
  if (x**2 > 1000){
    return 'It\'s hotter than the sun!!'
  }else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
}


// ====== 8kyu How old will I be in 2099 ? ======//

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

function  calculateAge(birthDate, otherDate) {

  var age = otherDate - birthDate;
  
    if(age === 1) {
    return 'You are ' + age + ' year old.';
      } else if(age > 1) {
        return 'You are ' + age + ' years old.';
      } else if (age < -1) {
        return 'You will be born in ' +  Math.abs(age) + ' years.';
      } else if (age === -1) {
        return 'You will be born in ' + Math.abs(age) + ' year.';
      } else {
        return 'You were born this very year!';
      }
  }
  


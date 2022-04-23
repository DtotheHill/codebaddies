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
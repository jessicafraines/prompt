var prompt = require ('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + ' ' + last;
console.log('your full name is', full);

var color = prompt('What is your favorite color? ');
console.log('you fav color is', color);

var age = prompt('What is your dog\'s age ');
console.log(typeof age);
age = parseInt(age);

console.log(typeof age);

var dogYear= prompt("What is your dog's age");
var humanYear= 7;
dogYear = parseInt(dogYear);
var dogAge = dogYear * humanYear;
console.log("Your dog's age in human years is", dogAge);


age = prompt("What is your age?");
age = parseInt(age);
if(age >= 21){
  console.log('you can drink');}
  else{
    console.log('no drink for you');}






/*var tempType = prompt("Do you want the temp in celsius or fahrenheit?");
var temp = prompt("What is the temperature?"); 
console.log ("You want the temp in", tempType);
temp = parseInt(temp);
if(tempType === "celsius"){
  temp = ((temp * 9)/5 + 32);
console.log('The temperature is', temp);}
else if(tempType === "fahrenheit"){
  temp = ((temp-32) *5/9);
  console.log('The temperature is', temp);}
else {console.log("You need to enter celsius or fahrenheit.")}
*/

var height = prompt("What is your height in inches? ");
var weight = prompt("What is your weight in lbs? ");
height = parseInt(height);
weight = parseInt(weight);
var calc = (weight/(height * height)*703);
calc = parseInt(calc);
console.log("Your BMI is", calc);





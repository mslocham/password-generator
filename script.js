// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
const specialChar = "@#$%^&*()_+[]<>?{}-=/";

var varArray = [];


function generatePassword(){
  var pwdPrompt = window.prompt("Choose a password with a length of at least 8 characters and no more than 128 characters");
  
 if (parseInt(pwdPrompt) < 8 || parseInt(pwdPrompt) > 128) {
   window.alert("Invalid entry. Try again!");
   return generatePassword();
 }
 else{
   var lowCase = window.confirm("Do you want to include lowercase letters?");
   var upCase = window.confirm("Do you want to include upper case letters?");
   var numeric = window.confirm("Do want to include numeric characters?");
   var symbol = window.confirm("Do you want to include symbols?");
 };
if (lowCase){
  varArray[0] = lowerChar;  
} 
if (upCase){
  varArray[1] = upperChar;
}
if (numeric){
  varArray[2] = numberChar;
}
if (symbol){
  varArray[3] = specialChar;
}
var fStep = varArray.join('');

console.log(fStep.charAt(Math.floor(Math.random() * 1)));


 
 let x = "";
 for (i=0; i < parseInt(pwdPrompt); i++){
   x += fStep.charAt(Math.floor(Math.random() * 1));
  
  }
  return x;
};
 
 
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
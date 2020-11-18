// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+=;/?.,><";
var numbers = "1234567890";



var newPassword = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword () {

    var lengthPrompt = prompt("Choose password length (8-128)");
    var lowerCasePrompt = confirm("Do you want lowercase characters in password?");
    var upperCasePrompt = confirm("Do you want uppercase characters in your password?");
    var numbersPrompt = confirm("Do you want numeric values in your password?");
    var specialPrompt = confirm("Do you want special characters in your password?");
  
    if (lowerCasePrompt === true){
      newPassword.push(lowerCase);
    }
    else {
      lowerCasePrompt === false
    }
  
  }


  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


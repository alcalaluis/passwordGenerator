// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', ',c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ';', '/', '?', '.', ',', '>', '<'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



function userPasswordQuestions() {
  var lengthPrompt = prompt("Choose password length (8-128)");
  var lowerCasePrompt = confirm("Do you want lowercase characters in password?");
  var upperCasePrompt = confirm("Do you want uppercase characters in your password?");
  var numbersPrompt = confirm("Do you want numeric values in your password?");
  var specialPrompt = confirm("Do you want special characters in your password?");


  return userPasswordQuestions;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    var newPassword = [];


    if (lowerCasePrompt === true) {
      newPassword.push(lowerCase);
    }
    else {
      lowerCasePrompt === false
    }

    if (upperCasePrompt === true) {
      newPassword.push(upperCase);
    }
    else {
      upperCasePrompt === false
    }

    if (numbersPrompt === true) {
      newPassword.push(numbers);
    }
    else {
      numbersPrompt === false
    }

    if (specialPrompt === true) {
      newPassword.push(specialChar);
    }
    else {
      specialPrompt === false
    }

    return newPassword.join('');

  }


  passwordText.value = password;


}

userPasswordQuestions();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here
// arrays created containg password criteria
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacter = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var passwordLength;
var characterSelection;

var lowerCaseConfirm;
var upperCaseConfirm;
var numericConfirm;
var specialCharacterConfirm;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Click button to generate a password
function generatePassword() {

  // Prompt for password criteria
  passwordLength = window.prompt("How many characters would you like your password to contain? Please pick 8-128 characters.");

  // Alert if character choice is not between 8-128
  if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must contain 8-128 characters. Please try again.");
    return
  }

  // lowercase confirmation
  lowerCaseConfirm = confirm("Would you like your password to contain lowercase letters?");
  // uppercase confirmation
  upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
  // numeric confirmation 
  numericConfirm = confirm("Would you password to contain numbers?");
  // special character confirmation
  specialCharacterConfirm = confirm("Would you like your password to contain special characters?");

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

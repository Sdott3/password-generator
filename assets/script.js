// Assignment code here
// arrays created containg password criteria
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacter = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var passwordLength;
var selection;

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
  

  // if user selects 0 of 4 required  criteria selected an alert will appear
  if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === false && specialCharacterConfirm === false) {
    window.alert("Your password must have one of the recommended criteria.");
    return
  }

  // 4 of the recommended criteria selected
  else if (lowerCaseConfirm === true && upperCaseConfirm === true && numericConfirm === true && specialCharacterConfirm === true) {
    selection = lowerCase.concat(upperCase, numeric, specialCharacter);
  }

  // 3 0f 4 selected
  else if (lowerCaseConfirm === true && upperCaseConfirm === true && numericConfirm === true && specialCharacterConfirm === false) {
    selection = lowerCase.concat(upperCase, numeric);
  } else if (lowerCaseConfirm === true && upperCaseConfirm === true && numericConfirm === false && specialCharacterConfirm === true) {
    selection = lowerCaseConfirm.concat(upperCase, specialCharacter);
  } else if ( lowerCaseConfirm === true && upperCaseConfirm === false && numericConfirm === true && specialCharacterConfirm === true) {
    selection = lowerCase.concat(numeric,specialCharacter);
  } else if (lowerCaseConfirm === false && upperCaseConfirm === true && numericConfirm === true && specialCharacterConfirm === true) {
    selection = upperCase.concat(numeric, specialCharacter);
  }

  // 2 of 4 selected
  else if (lowerCaseConfirm === true && upperCaseConfirm === true && numericConfirm === false && specialCharacterConfirm === false) {
    selection = lowerCase.concat(upperCase);
  } else if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === true && specialCharacterConfirm === true) {
    selection = numeric.concat(specialCharacter);
  } else if (lowerCaseConfirm === false && upperCaseConfirm === true && numericConfirm === false && specialCharacterConfirm === true) {
    selection = upperCase.concat(specialCharacter);
  } else if (lowerCaseConfirm === true && upperCaseConfirm === false && numericConfirm === true && specialCharacterConfirm === false) {
    selection = lowerCase.concat(numeric);
  }

  // 1 of 4 selected
  else if (lowerCaseConfirm === true && upperCaseConfirm === false && numericConfirm === false && specialCharacterConfirm === false) {
    selection = lowerCase
  } 
  else if (lowerCaseConfirm === false && upperCaseConfirm === true && numericConfirm === false && specialCharacterConfirm === false) {
    selection = upperCase
  } 
  else if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === true && specialCharacterConfirm === false) {
    selection = numeric
  } 
  else if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === false && specialCharacterConfirm === true) {
    selection = specialCharacter
  }
  

  // for loop runs every time and and picks characters at random and until number of characters is met
  var newPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    newPassword += selection[Math.floor(Math.random() * selection.length)];
    console.log(newPassword);
  }
  return newPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

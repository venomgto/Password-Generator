// Assignment Code
var generateBtn = document.querySelector("#generate");

// created an array for possible choices to create a pasword 
var upperLet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '.', '?', '/', ':', ';'];

function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 - 128 characters");
    var askupperLet = confirm("Do you want password to include upper case letters?");
    var askLowerlet = confirm("Do you want password to include numbers?");
    var askNumbers = confirm("Do you want password to include numbers?");
    var askSpecialCharacteras = confirm("Do you want password to include special characters?");
    var


  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

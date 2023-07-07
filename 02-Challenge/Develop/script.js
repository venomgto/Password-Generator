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
<<<<<<< HEAD
    var askLowerLet = confirm("Do you want password to include numbers?");
    var askNumbers = confirm("Do you want password to include numbers?");
    var askSpecialCharacteras = confirm("Do you want password to include special characters?");
    var response = { length: length, askupperLet: askupperLet, askLowerLet: askLowerLet, askNumbers: askNumbers, askSpecialCharacteras: askSpecialCharacteras }
    if ((length < 8) || (length > 128))
      alert("choose a number between 8 and 128");
    else if ((!askupperLet) && (!askLowerLet) && (askNumbers) && (askSpecialCharacteras))
      alert("Must choose at least one of the choices given");
    else isValid = true;
  } while (!isValid);
  return response;

}

function generatePassword() {
  var passwordchoice = questions();
  var possible = [];
  var finalPassword = "";

  if (passwordchoice.askupperLet) {
    for (var i of upperLet) possible.push(i);
  }
  if (passwordchoice.askLowerLet) {
    for (var i of lowerLet) possible.push(i);
  }
  if (passwordchoice.askNumbers) {
    for (var i of numbers) possible.push(i);
  }
  if (passwordchoice.askSpecialCharacteras) {
    for (var i of specialCharacters) possible.push(i);
  }

  for (var i = 0; i < passwordchoice.length; i++) {
    finalPassword += possible[Math.floor(Math.random() * possible.length)];

  }
  return finalPassword;
=======
    var askLowerlet = confirm("Do you want password to include numbers?");
    var askNumbers = confirm("Do you want password to include numbers?");
    var askSpecialCharacteras = confirm("Do you want password to include special characters?");
    var


  }
>>>>>>> 6c18c2fc8bf9f36c73e45d9f85164a6959b64384
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


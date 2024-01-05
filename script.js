// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordLength() {
  let passwordLength = prompt("Enter your desired length of password");
  while (passwordLength < 8) {
    alert("Your password must be at least 8 characters long.");
    passwordLength = prompt("Enter your desired length of password");
  }
  return passwordLength;
}

const passwordLength = getPasswordLength();
const includeLowercase = confirm(
  "Do you want to include lowercase characters?"
);
const includeUppercase = confirm(
  "Do you want to include uppercase characters?"
);
const includeNumbers = confirm("Do you want to include numbers?");
const includeSpecialChars = confirm(
  "Do you want to include special characters?"
);

// Combine character sets based on user preferences
let charset = "";

if (includeLowercase) {
  charset += lowerCasedCharacters.join("");
}
if (includeUppercase) {
  charset += upperCasedCharacters.join("");
}
if (includeNumbers) {
  charset += numericCharacters.join("");
}
if (includeSpecialChars) {
  charset += specialCharacters.join("");
}

if (charset === "") {
  alert("Please select at least one character type");
} else {
  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset.charAt(randomIndex);
  }

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write generated password to the #password input
  function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = generatedPassword;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}

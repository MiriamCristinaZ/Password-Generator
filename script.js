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
function getPasswordOptions() {
  let passwordOptions = null;
  //Create a loop to run in the case in which the password options are not null
  while (!passwordOptions) {
    // Prompt for password length
    let passwordLength = prompt(
      "Enter the length of the password (between 8 and 128 characters):"
    );

    // Validate password length if is between 8 and 128 and isNaN(passwordLength) is used to verify if the user input is a number
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert(
        "Please enter a valid password length between 8 and 128 characters."
      );
      continue; // Return to the start of the loop
    }

    // Prompt for character types, this will display prompts to confirm if special characters are included and will store answer into the created variables
    let includeLowercase = confirm(
      "Do you wish to include lowercase characters?"
    );
    let includeUppercase = confirm(
      "Do you wish to include uppercase characters?"
    );
    let includeNumeric = confirm("Do you wish to include numeric characters?");
    let includeSpecial = confirm("Do you wish to include special characters?");

    // Check if at least one character type is selected
    if (
      includeLowercase ||
      includeUppercase ||
      includeNumeric ||
      includeSpecial
    ) {
      // Create an object to store user options
      passwordOptions = {
        length: parseInt(passwordLength), //this will convert the string input of the user into an integer
        includeLowercase,
        includeUppercase,
        includeNumeric,
        includeSpecial,
      };
    } else {
      alert("Please select at least one character type.");
    }
  }

  return passwordOptions; //This will return to the password options if none of the character options are chosen
}

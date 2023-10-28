// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

  // Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];



// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//MY PSEUDOCODING

// Alert for introduction message.
alert ("Welcome to the Password Generator!  Select from the following options to generate your own personalised password.");

// Function to prompt user for password options.
function getPasswordOptions () {

  //Prompt for number of characters. If <8 or >128, print error handler 'try again' message. If between 8-128, store in variable and continue to next prompt.
  function getPasswordLength () {
    var passwordLength = prompt ("How many characters do you want your password to contain?  Choose a number between 8 and 128 inclusive.");
    var passwordLengthInteger = parseInt(passwordLength);
    if (passwordLengthInteger > 8 && passwordLengthInteger < 128) {
        console.log ("Password length: " + passwordLengthInteger + " characters.");
        return passwordLengthInteger; }
    else {
      alert ("Please try again.  Your password needs to be between 8 and 128 characters inclusive.");
      console.log ("Invalid password length");
      return;     //CHECK THIS BECAUSE THE ELSE ISN'T BEING TRIGGERED TO STOP IT CONTINUING WITH OTHER OPTIONS - OTHER CODE IS OUTSIDE FUNCTION SO STILL RUNS
    }
  }
  getPasswordLength();

  //Prompt for whether you want to include lowercase characters. Log answer in variable and continue to next prompt.
  function checkLowercase () {
    var passwordLowercase = confirm ("Would you like it to contain lower case characters?  Click OK for yes or Cancel for no.")
    if (passwordLowercase) {
      console.log ("Password will contain lower case letters."); }
    else {
      console.log ("Password will not contain lower case letters.");
    }
  }
  checkLowercase();

  //Prompt for whether you want to include uppercase characters. Log answer in variable and continue to next prompt.
  function checkUppercase () {
    var passwordUppercase = confirm ("And would you like it to contain upper case characters?  Click OK for yes or Cancel for no.")
    if (passwordUppercase) {
      console.log ("Password will contain upper case letters."); }
    else {
      console.log ("Password will not contain upper case letters.");
    }
  }
  checkUppercase();

  //Prompt for whether you want to include numeric characters. Log answer in variable and continue to next prompt.
  function checkNumeric () {
    var passwordNumeric = confirm ("And would you like it to contain numeric characters?  Click OK for yes or Cancel for no.")
    if (passwordNumeric) {
      console.log ("Password will contain numeric characters."); }
    else {
      console.log ("Password will not contain numeric characters.");
    }
  }
  checkNumeric();

  //Prompt for whether you want to include special characters ($@%&*, etc). Log answer in variable and continue to next prompt.
  function checkSpecial () { 
    var passwordSpecial = confirm ("Finally, would you like it to contain special characters?  Click OK for yes or Cancel for no.")
    if (passwordSpecial) {
      console.log ("Password will contain special characters."); }
    else {
      console.log ("Password will not contain special characters.");
    }
  }
  checkSpecial();

}

getPasswordOptions();


//If answer is no to all of these, print error handler instructing the user to start again. If statement perhaps? So IF incorrect value to first - error hander, IF correct, continue to first function. then IF no to each function - another error handler.
  alert("Click OK to generate your password!");
  console.log ("Password generated.");

//Else generate password based on the criteria selected, displayed in an alert or written to the page

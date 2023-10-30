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


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('onclick', writePassword);

//variables for user choice
var passwordLength;
var passwordLengthInteger;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var combinedArray;
var userPassword = [];
var characters = [];
var writePassword;
var password;

// Function to prompt user for password options.
generateBtn.onclick = function getPasswordOptions () {

  //Prompt for number of characters.
  function getPasswordLength () {
    passwordLength = prompt ("How many characters do you want your password to contain?  Choose a number between 8 and 128 inclusive.");
    passwordLengthInteger = parseInt(passwordLength);
    //If no value is entered <8 or >128, then show message about requirements and instruct to try again. If between 8-128, store in variable and continue to next prompt.
    //TODO ensure value entered is a number - otherwise a word could be written and the process would continue
    if (passwordLength === "" || passwordLengthInteger < 8 || passwordLengthInteger > 128) {
    alert ("Please try again.  Your password needs to be between 8 and 128 characters inclusive.");
    return;
    }
    else {
      function getPasswordCharacters () {
        
        //Prompt for whether you want to include lowercase characters. Log answer in variable and continue to next prompt.
        function checkLowercase () {
          lowercase = confirm ("Would you like it to contain lower case characters?  Click OK for yes or Cancel for no.")
        }
        checkLowercase();

        //Prompt for whether you want to include uppercase characters. Log answer in variable and continue to next prompt.
        function checkUppercase () {
          uppercase = confirm ("And would you like it to contain upper case characters?  Click OK for yes or Cancel for no.")
        }
        checkUppercase();

        //Prompt for whether you want to include numeric characters. Log answer in variable and continue to next prompt.
        function checkNumeric () {
          numeric = confirm ("And would you like it to contain numeric characters?  Click OK for yes or Cancel for no.")
        }
        checkNumeric();

        //Prompt for whether you want to include special characters ($@%&*, etc). Log answer in variable and continue to next prompt.
        function checkSpecial () { 
          special = confirm ("Finally, would you like it to contain special characters?  Click OK for yes or Cancel for no.")
        }
        checkSpecial();

      }
    }
    getPasswordCharacters();


    //If the answer is negative to all of the questions about character types, give alert instructing the user to start again.
    if (lowercase === false && uppercase === false && numeric === false && special === false) {
      alert ("Please try again.  Your password needs to be contain at least one character type.");
      return;
    }

  }
  getPasswordLength();





    function generatePassword () {

//All iterations are accounted for in the combined array used for the password character selection

if(lowercase){
  combinedArray += lowerCasedCharacters
}
if(uppercase){
  combinedArray += upperCasedCharacters
}
if(special){
  combinedArray += specialCharacters
}
if(numeric){
  combinedArray += numericCharacters
}

combinedArray = combinedArray.replace(/,/g, "");

        
        //Take random values to create new string of specified length

        for (var i = 0; i < (passwordLengthInteger); i++) {
        characters = combinedArray[Math.floor(Math.random() * combinedArray.length)];
        userPassword.push(characters);
        }
        userPassword=userPassword.join('');
      }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  password = userPassword;
  passwordText.value = password;
  }
  
  writePassword();


    }


//TODO ensure process resets so users can use it repeatedly without refreshing the page
        
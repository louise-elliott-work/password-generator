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

// Combined array
var combinedArray = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters);

// Function for getting a random element from an array
function getRandom(combinedArray) {
  return combinedArray;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('onclick', writePassword);

//MY CODING

//variables for user choice
var passwordLength;
var passwordLengthInteger;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var combinedArray;
var combinedArrayString;
var newPassword = [];
var characters = [];
var writePassword;
var password;

// Function to prompt user for password options.
generateBtn.onclick = function getPasswordOptions () {


  //Prompt for number of characters. If <8 or >128, then show message about requirements and instruct to try again. If between 8-128, store in variable and continue to next prompt.
  function getPasswordLength () {
    passwordLength = prompt ("How many characters do you want your password to contain?  Choose a number between 8 and 128 inclusive.");
    passwordLengthInteger = parseInt(passwordLength);

    if (passwordLengthInteger < 8 || passwordLengthInteger > 128) {
      alert ("Please try again.  Your password needs to be between 8 and 128 characters inclusive.");
      return;
    }
    else {
      console.log ("Password length: " + passwordLengthInteger + " characters.");
      function getPasswordCharacters () {
        
        //Prompt for whether you want to include lowercase characters. Log answer in variable and continue to next prompt.
        function checkLowercase () {
          var passwordLowercase = confirm ("Would you like it to contain lower case characters?  Click OK for yes or Cancel for no.")
          if (passwordLowercase) {
            console.log ("Password will contain lowercase letters.");
            return lowercase = true;
          }
          else {
            console.log ("Password will not contain lower case letters.");
          }
        }
        checkLowercase();

        //Prompt for whether you want to include uppercase characters. Log answer in variable and continue to next prompt.
        function checkUppercase () {
          var passwordUppercase = confirm ("And would you like it to contain upper case characters?  Click OK for yes or Cancel for no.")
          if (passwordUppercase) {
            console.log ("Password will contain upper case letters."); 
            uppercase++;
            return uppercase = true;
          }
          else {
            console.log ("Password will not contain upper case letters.");
          }
        }
        checkUppercase();

        //Prompt for whether you want to include numeric characters. Log answer in variable and continue to next prompt.
        function checkNumeric () {
          var passwordNumeric = confirm ("And would you like it to contain numeric characters?  Click OK for yes or Cancel for no.")
          if (passwordNumeric) {
            console.log ("Password will contain numeric characters."); 
            return numeric = true;
          }
          else {
            console.log ("Password will not contain numeric characters.");
          }
        }
        checkNumeric();

        //Prompt for whether you want to include special characters ($@%&*, etc). Log answer in variable and continue to next prompt.
        function checkSpecial () { 
          var passwordSpecial = confirm ("Finally, would you like it to contain special characters?  Click OK for yes or Cancel for no.")
          if (passwordSpecial) {
            console.log ("Password will contain special characters.");
            return special = true;
          }
          else {
            console.log ("Password will not contain special characters.");
          }
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
    //ELSE generate password (generatePassword function?)
    else {
      console.log("Password to be generated");
    }

  }
  getPasswordLength();





    function generatePassword () {

      if (lowercase === true && uppercase === true && numeric === true && special === true) {
        combinedArray = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters);
        combinedArrayString = combinedArray.toString();
        
        //Take random values to create new string of specified length

        for (var i = 0; i < (passwordLengthInteger); i++) {
          
        characters = combinedArray[Math.floor(Math.random() * combinedArray.length)];
        newPassword.push(characters);
        }

        newPassword=newPassword.join('');

        console.log("New password = " + newPassword);
        
        }
      }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  password = newPassword;
  passwordText.value = password;
  }
  
  writePassword();


    }




        
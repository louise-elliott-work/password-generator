// Array of lowercase characters to be included in password.
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

// Array of uppercase characters to be included in password.
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

// Array of numeric characters to be included in password.
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters to be included in password.
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

// Removal of commas so only the characters are selected for the password.
lowerCasedCharacters = lowerCasedCharacters.join("");
upperCasedCharacters = upperCasedCharacters.join("");
numericCharacters = numericCharacters.join("");
specialCharacters = specialCharacters.join("");

// Get references to the #generate element.
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button.
generateBtn.addEventListener('onclick', writePassword);

//TODO check these at the end to move any locally as appropriate
// Variables for user choice.
var passwordLength;
var passwordLengthCheck = true;
var passwordLengthInteger;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var combinedArray = [];
var characters = [];
var writePassword;
var password = [];

// Function to generate password based on user choices.
function generatePassword () {

  // Function to prompt user for password options when the 'Generate Password' button is clicked.
  generateBtn.onclick = function getPasswordOptions () {

    // Function to prompt user for number of characters.
    function getPasswordLength () {

        //Prompt for number of characters.
        passwordLength = prompt ("How many characters do you want your password to contain?\nChoose a number between 8 and 128 inclusive.");
    }
    getPasswordLength();

    //Convert value to integer.
    passwordLengthInteger = parseInt(passwordLength);

    //If value is not given, or is not an integer, or is an integer <8 or >128, then show message about requirements and instruct to try again.
    if (passwordLength == 0 || isNaN(passwordLength) || passwordLengthInteger < 8 || passwordLengthInteger >= 128) {
      alert ("Please try again.\nYou must enter a number between 8 and 128 inclusive.");
      passwordLengthCheck = false;
    }

    // If the value is entered as a number between 8-128, store that in a variable and continue to the next prompt.
    else if (passwordLengthCheck === true) {

      function getPasswordCharacters() {

      // Function to prompt user for type(s) of characters.

        // Prompt for whether user wants to include lowercase characters. Log answer in variable and continue to next prompt.
        function checkLowercase () {
          lowercase = confirm ("Would you like it to contain lower case characters?\nClick OK for yes or Cancel for no.")
        }
        checkLowercase();

        //Prompt for whether user wants to include uppercase characters. Log answer in variable and continue to next prompt.
        function checkUppercase () {
          uppercase = confirm ("And would you like it to contain upper case characters?\nClick OK for yes or Cancel for no.")
        }
        checkUppercase();

        //Prompt for whether user wants to include numeric characters. Log answer in variable and continue to next prompt.
        function checkNumeric () {
          numeric = confirm ("And would you like it to contain numeric characters?\nClick OK for yes or Cancel for no.")
        }
        checkNumeric();

        //Prompt for whether user wants to include special characters ($@%&*, etc). Log answer in variable and continue to next prompt.
        function checkSpecial () { 
          special = confirm ("Finally, would you like it to contain special characters?\nClick OK for yes or Cancel for no.")
        }
        checkSpecial();

        // If statement accounting for all iterations of the combined array to use for the password character selection.
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
        // If no character type is selected by the user, give an alert instructing the user to start again.
        if (lowercase === false && uppercase === false && numeric === false && special === false) {
          alert ("Please try again.\nYour password needs to be contain at least one character type.");
          return;
        }
      }
      getPasswordCharacters();

      // Function for getting a random element from an array
      function getRandom() {
            // Take random values to create a new string of the specified length.
            for (var i = 0; i < (passwordLengthInteger); i++) {
              characters = combinedArray[Math.floor(Math.random() * combinedArray.length)];
              password.push(characters);
              }
              password=password.join('');
              // Remove commas so password is one new concatenated string.
      }
      getRandom();
    }

    // Write password to the #password input so it displays on the screen.
    // TODO add here to only write if valid choices made, if not error message? check instructions!
    function writePassword() { 
      var passwordText = document.querySelector('#password');
      passwordText.value = password;
    }
    writePassword();

  //Clear the password variable to allow the password generator to be used multiple times without the need to refresh the webpage.
  password = password = [];  

  }

}
generatePassword ();
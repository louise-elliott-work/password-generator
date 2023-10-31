// Array of lowercase characters.
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

// Array of uppercase characters.
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

// Array of numeric characters.
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters.
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

// Join character arrays to avoid commas being selected as password characters.
lowerCasedCharacters = lowerCasedCharacters.join("");
upperCasedCharacters = upperCasedCharacters.join("");
numericCharacters = numericCharacters.join("");
specialCharacters = specialCharacters.join("");

// Get references to the #generate element.
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button.
var writePassword;
generateBtn.addEventListener('onclick', writePassword);

// Function to generate password based on user choices.
function generatePassword () {

  var passwordLength;
  var passwordLengthInteger;
  var password = [];
  var combinedArray = [];

  // Function to prompt user for password options when 'Generate Password' button is clicked.
  generateBtn.onclick = function getPasswordOptions () {

    // Function to prompt user for password length.
    function getPasswordLength () {

        //Prompt for password length.
        passwordLength = prompt ("How many characters do you want your password to contain?\nChoose a number between 8 and 128 inclusive.");
    }
    getPasswordLength();
    
    // Convert password length to integer.
    passwordLengthInteger = parseInt(passwordLength);

    // If no value given, or value is not an integer or is an integer <8 or >128, give alert.
    if (passwordLength === null || passwordLength == 0 || isNaN(passwordLength) || passwordLengthInteger < 8 || passwordLengthInteger > 128) {
      alert ("Please try again.\nYou must enter a number between 8 and 128 inclusive.");
    }

    // If value between 8-128 is entered as an integer, store in a variable and continue to next prompt.
    else {

      function getPasswordCharacters() {

        // Local variables for character selection by user.
        var lowercase = false;
        var uppercase = false;
        var numeric = false;
        var special = false;

        // Functions to prompt user for type(s) of characters.

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

        // If statement accounting for all iterations of combined array to use for password character selection.
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
        // If no character type selected, give alert.
        if (lowercase === false && uppercase === false && numeric === false && special === false) {
          alert ("Please try again.\nYour password needs to be contain at least one character type.");
          combinedArray = [];
          return;
        }
      }
      getPasswordCharacters();

      // Function for getting a random string from the array of chosen character types.
      function getRandom() {
            // Take random values to create a new string of the specified length.
            var characters = [];
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
    function writePassword() { 
      if (password) {
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
      }
    }
    writePassword();

  // Clear password variable to allow password generator to be used multiple times without the need to refresh.
  password = password = [];  
  return;
  }

}
generatePassword ();
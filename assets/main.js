// // DOM elements
var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength;
var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*<>?";

// Write password to the #password input
//Checks user input settings for password criteria
function writePassword() {
   lengthEl = parseInt(prompt("Please indicate password length (8-128 characters)"));
   console.log(lengthEl);

   if(lengthEl < 8 || lengthEl > 128) {
    lengthEl = prompt("Please choose a length between 8 - 128 characters"); 
    let char = letters;
    uppercaseEl.checked ? (char += uppercase) : "";
    numEl.checked ? (char += numbers) : "";
    symbolsEl.checked ? (char += symbols) : "";
  resultEl.value = generatePassword(lengthEl.value, char);
   }
   else { 
    let char = letters;
    uppercaseEl.checked ? (char += uppercase) : "";
    numEl.checked ? (char += numbers) : "";
    symbolsEl.checked ? (char += symbols) : "";
  resultEl.value = generatePassword(lengthEl, char);
    // password = generatePassword();
    // console.log(generatePassword());
   }
   
}

// Function generates password
function generatePassword(lengthEl, char) {
    console.log(lengthEl);
    var password = "";
    for (let i = 0; i < lengthEl; i++) {
        password += char.charAt(
            Math.floor(Math.random() * char.length)
        );
    }
     console.log(password);
    return password;

};

// function copies password to user clipboard
function copyBtn() {
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    //copy text inside text field
    navigator.clipboard.writeText(copyText.value);

}
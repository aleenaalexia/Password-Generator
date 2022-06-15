// // DOM elements
var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");


var passLength;
var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*<>?";
// Generator funtions
// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
// }

// // console.log(getRandomLower());

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
// }

// // console.log(getRandomUpper());

// function getRandomNum() {
//     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));

// }

// // console.log(getRandomNum());

// function getRandomSymbol() {
//     const symbols = '!#$%&()*+,-./:;<=>?@[]\^_`{|}~';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomSymbol());

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
 resultEl.value = password;
console.log(resultEl.textContent);

    // // const hasUpper = document.querySelector("#uppercase").checked;
    // // const hasNumber = document.querySelector("#numbers").checked;
    // // const hasSymbol = document.querySelector("#symbols").checked;

// JavaScript object created to hold variables of the password
// passwordVar = {length: passLength, upper: document.querySelector("#uppercase").checked, num: document.querySelector("#numbers").checked, symbols: document.querySelector("#symbols").checked};
    // console.log(passwordVar.symbols);

    // console.log(passwordVar);


    

//loops through and only executes enough to get the desired password length
// for(let i = 0; i < passwordVar.length; i++) {
//    // console.log(hasUpper, hasNumber, hasSymbol);
//     let passString;
//     if(passwordVar.upper == true) {
//         passString += getRandomUpper();
//     }
//     else if(passwordVar.num == true) {
//         passString += getRandomNum();

//     }
//     else if(passwordVar.symbols == true) {
//         passString += getRandomSymbol();
        
//     }
     
// passString +=getRandomLower();
//     return passString;
//  }

   

// console.log(generatePassword());
  






// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

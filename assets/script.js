// // DOM elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
var numEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");

// // Function generates random password
// function writePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = '';

//     const count = lower + upper + number + symbol;

//     const types = [{ lower }, {upper}, {number}, {symbol}].filter
//     (
//     item => Object.values(item)[0]
//     );

//     if (count === 0) {
//         return '';
//     }

//     for(let i = 0; i < length; i += count) {
//         types.forEach(type => {
//            const funcName = Object.keys(type)[0];
             

//            generatedPassword += randomFunc[funcName];
//         });
    
//     const finalPassword = generatedPassword.slice(0, length);

//     return finalPassword;
// }
// }


// // Generate event; listen for button click
// generateBtn.addEventListener('click', function() {
//     const length = +lengthEl.value;
//     const hasLower = lowercaseEl.checked;
//     var hasUpper = uppercaseEl.checked;
//     var hasNumber = numEl.checked;
//     var hasSymbol = symbolsEl.checked;

//     password.innerText = writePassword(
//         hasLower,
//         hasUpper,
//         hasNumber,
//         hasSymbol,
//         length
//         );
   
// }); 
// console.log(hasLower, hasUpper, hasNumber, hasSymbol);
// // Copy password to clipboard
// clipboardEl.addEventListener('click', () => {
//    var textarea = document.createElement('textarea');
//    var password = resultEl.innerText;

// })



// // Generator funtions
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

// // console.log(getRandomSymbol());



let letters = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let symbols = "!@#$%^&*<>?";

generateBtn.addEventListener("click", () => {
    let lengthEl = parseInt(prompt("Please indicate password length (8-128 characters)"));
    if(lengthEl < 8 || lengthEl > 128) {
        lengthEl = prompt("Please choose a length between 8 - 128 characters"); 
        
       }
       else { 
           
        return lengthEl;

       }
       console.log(lengthEl);

    let char = letters;
    uppercaseEl.checked ? (char += uppercase) : "";
    numEl.checked ? (char += numbers) : "";
    symbolsEl.checked ? (char += symbols) : "";
  resultEl.value = generatePassword(lengthEl.value, char);
});

function generatePassword(lengthEl, char) {
    let password = "";
    for (let i = 0; i < lengthEl; i++) {
        password += char.charAt(
            Math.floor(Math.random() * char.length)
        );
    }
    return password;

};

password = document.querySelector("#password");

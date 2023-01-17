var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let length, hasLower, hasUpper, hasNumeric, hasSpecial;

function generatePassword(){
  length = prompt ("Enter the desired length of the password (8-128 characters)");

  hasLower = confirm("Include lowercase letters in the password?");
  hasUpper = confirm("Include uppercase letters in the password?");
  hasNumeric = confirm("Include numeric characters in the password?");
  hasSpecial = confirm("Include special characters in the password?");

  while (length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128,:");
    length = prompt ("Enter the desired length of the password (8-128 characters)");
    
  }
while (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
  alert("At least one character type must be selected.");
   hasLower = confirm("Include lowercase letters in the password?");
   hasUpper = confirm("Include uppercase letters in the password?");
   hasNumeric = confirm("Include numeric characters in the password?");
   hasSpecial = confirm("Include special characters in the password?");
  }
let possibleChars = "";
if (hasLower) possibleChars += "abcdefghijklmnopqrstuvwxyz";
if (hasUpper) possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (hasNumeric) possibleChars += "0123456789";
if (hasSpecial) possbileChars += "!@#$%^&*()_+-=[]{}|";

 let password = "";
 for (let i=0; i < length; i++) {
  password += possibleChars.charAt(Math.floor(Math.random() * possbileChars.length));
 }

 alert("Your generated password is:" + password);
 document.getElementById("password").innerHTML = password;
}
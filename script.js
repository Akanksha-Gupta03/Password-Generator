// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password;
  var passwordLength = prompt("Please enter your password,it must be between 8 to 128 character");
  
  var pLength = Number(passwordLength);  
  console.log( ` .. password length (${pLength})` );

  if ( pLength < 8 || pLength > 128 ) {
      alert("choose length between 8 to 128");
      writePassword();

 } 
 
 else if (isNaN(pLength)) {
  alert(" Please Enter Number")
  writePassword()
 } 
 
 else {
  alert(`password length is ${pLength}`);

 }

var Num = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!&%#$'()*+,-./:;<=>?@[\]^_`{|}~"
var pwdString = "";
var passwordText = "";
var newPassword = "";

var userNConf = confirm("Do you want numerals?");
if(userNConf){
  pwdString = pwdString +  Num;
}

var userUpperConf = confirm("Do you want uppercase?");
if(userUpperConf){
  pwdString = pwdString + upperCase;
}
 var userLowerConf = confirm("Do you want lowercase?");
 if (userLowerConf){
   pwdString = pwdString + lowerCase;
}
 var userSpecialConf = confirm("Do you want special character?");
  if (userSpecialConf){
    pwdString = pwdString + specialChar;
}

 console.log(`pwdString: ${pwdString}`);

  newPassword = "";
  for(i=0; i < pLength; i++){

    var newCharacter = pwdString[Math.floor(Math.random()*pwdString.length)];

    newPassword = newPassword + newCharacter;

 }
 console.log( ` - generated new password: ${newPassword}` );

  document.querySelector("#password").value = newPassword;
 
}
  





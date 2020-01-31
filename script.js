var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password;
  var passwordLength = prompt("Enter a character between 8 to 128");
  
  var pLength = Number(passwordLength);  
  

  if ( pLength < 8 || pLength > 128 ) {
      alert("Choose length between 8 to 128");
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

 var userNumConf = confirm("Do you want Numerals?");
 if(userNumConf){
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

  newPassword = "";
  for(i=0; i < pLength; i++){

    var newCharacter = pwdString[Math.floor(Math.random()*pwdString.length)];

    newPassword = newPassword + newCharacter;

 }

  console.log( `generated new password: ${newPassword}` );

  document.querySelector("#password").value = newPassword;
}

  





# Password Generator Starter Code
Create a function to generate a random password based on selected criteria.
javascript
Copy code
function generatePassword() {
  // Define character sets for lowercase, uppercase, numeric, and special characters
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=<>?';

  // Initialize variables to store user-selected criteria
  let passwordLength = 0;
  let useLowercase = false;
  let useUppercase = false;
  let useNumeric = false;
  let useSpecialChars = false;

  // Prompt the user for password length and validate it
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));
  }

  // Prompt the user for character types to include
  while (!useLowercase && !useUppercase && !useNumeric && !useSpecialChars) {
    useLowercase = confirm('Include lowercase characters?');
    useUppercase = confirm('Include uppercase characters?');
    useNumeric = confirm('Include numeric characters?');
    useSpecialChars = confirm('Include special characters?');
  }

  // Create a character set based on selected criteria
  let charset = '';
  if (useLowercase) charset += lowercaseChars;
  if (useUppercase) charset += uppercaseChars;
  if (useNumeric) charset += numericChars;
  if (useSpecialChars) charset += specialChars;

  // Generate the password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
Modify the writePassword function to call generatePassword and display the result:
javascript
Copy code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
Attach the event listener to the "Generate Password" button:
javascript
Copy code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
With these changes, your application should now prompt the user for password criteria, validate their input, and generate a password based on the selected criteria when the "Generate Password" button is clicked. The generated password will be displayed in the textarea with the id "password."


<img width="336" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/41403a50-7013-4889-8e2f-95b5d151404a">
#Firstly, you have to specify the length of the password you would like to generate, the length of the password should be between 8 to 128 characters in length.


<img width="323" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/ad4cd6e8-986f-435b-8463-d66f97ab1a16">
#Secondly, choose if you would like to include any lowercased characters in the password


<img width="323" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/2f9d99fd-b0bd-4a9e-9296-8f06ddb0d91a">
#Thirdly, choose to include any uppercase characters in the password


<img width="320" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/32b845ef-77a1-4b96-a23f-9e6b8e2e108c">
#Then, you choose if you would like to include numeric


<img width="322" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/3797fa06-4603-42ff-b94e-d662e95ff882">
#Finally, choose if you want any special characters


<img width="629" alt="image" src="https://github.com/onecrazyguy/PasswordGenerator/assets/25525287/f3e8961b-ccce-411e-80c2-4d1651a403b8">
#In the end, you will have the password you want which meets all your requirements.




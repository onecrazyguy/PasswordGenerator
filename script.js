// Define character sets for lowercase, uppercase, numeric, and special characters
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';

// Get references to the #generate element and password textarea
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Function to generate a random password based on selected criteria
function generatePassword() {
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

// Function to write the generated password to the textarea
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

// Add event listener to the "Generate Password" button
generateBtn.addEventListener("click", writePassword);

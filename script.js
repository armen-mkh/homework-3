
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "<", ".", ",", ">", "?", "{", "}", "[", "]"];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let lowerCased = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let capitalCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



function passwordOptions() {

  let length = parseInt(
    prompt('How many characters do you wish to use?')
  );

  if (isNaN(length) === true) {
    alert('Type a number between 8-128');
    return;
  }

  if (length < 8) {
    alert('Dont be lazy, at least 8 characters pal');
    return;
  }


  if (length > 128) {
    alert('Cannot contain more than 128 characters');
    return;
  }

 
  let includesSpecialCharacters = confirm(
    'Special characters?'
  );

  let includesNumbers = confirm(
    'Numbers?'
  );

  let includesLowerCase = confirm(
    'Lower case letters?'
  );


  let includesUpperCase = confirm(
    'Capital letters?'
  );

  
  if (
    includesSpecialCharacters === false && includesNumbers === false && includesLowerCase === false && includesUpperCase === false
  ) {
    alert('Cmon!, at least 8 characters bucko');
    return;
  }

  let passwordChoices = {
    length: length,
    includesSpecialCharacters: includesSpecialCharacters, includesNumbers: includesNumbers, includesLowerCase: includesLowerCase, includesUpperCase: includesUpperCase


  };

  return passwordChoices;
}

function pullRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = passwordOptions();

  let result = [];

  let possibleCharacters = [];

  let chosenCharatacters = [];

  if (options.includesSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    chosenCharatacters.push(pullRandom(specialCharacters));
  }

  
  if (options.includesNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    chosenCharatacters.push(pullRandom(numbers));
  }
  if (options.includesLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCased);
    chosenCharatacters.push(pullRandom(lowerCased));
  }

  if (options.includesUpperCase) {
    possibleCharacters = possibleCharacters.concat(capitalCase);
    chosenCharatacters.push(pullRandom(capitalCase));
  }

  for (let i = 0; i < options.length; i++) {
    var possibleCharacter = pullRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (let i = 0; i < chosenCharatacters.length; i++) {
    result[i] = chosenCharatacters[i];
  }

  return result.join('');
}


let generateBtn = document.querySelector('#generate');


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);
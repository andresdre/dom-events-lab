/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// As a user, I want to be able to select numbers so that I can perform operations with them.
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  });

// As a user, I want to be able to add two numbers together.
// We have to
const display = document.querySelector('.display');
let firstNumber = '';
let secondNumber = '';
let operator = '';

function handleNumberClick(buttonValue) {
  display.innerText += buttonValue;
}

function handleOperatorClick(buttonValue) {
  firstNumber = display.innerText;
  operator = buttonValue;
  display.innerText = '';
}

function handleEqualsClick() {
  if (operator && firstNumber) {
    secondNumber = display.innerText;
    const result = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    display.innerText = result;
    firstNumber = '';
    secondNumber = '';
    operator = '';
  } else {
    // Handle invalid input scenario (e.g., display an error message)
  }
}

function handleClearClick() {
  display.innerText = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    // Add cases for other operators
    default:
      return 'Error'; // Handle invalid operator
  }
}

const button = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    if (/\d/.test(buttonValue)) { // Check if digit (0-9)
      handleNumberClick(buttonValue);
    } else if (buttonValue === '+') { // Add other operator checks here
      handleOperatorClick(buttonValue);
    } else if (buttonValue === '=') {
      handleEqualsClick();
    } else if (buttonValue === 'C') { // Add clear button functionality
      handleClearClick();
    }
  });
});

// As a user, I want to be able to subtract one number from another.;

















// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.


























//As a user, I want to be able to add two numbers together.
// const display = document.querySelector('.display');
// const buttonValue = event.target.innerText;

// let firstNumber = '';
// let secondNumber = '';
// let operator = '';

// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const buttonValue = event.target.innerText;
    
//     if (buttonValue === '+') {
//       firstNumber = display.innerText;
//       operator = '+';
//       display.innerText = '';

//     } else if (buttonValue === '=') {
//       secondNumber = display.innerText;
      
//     if (operator === '+') {
//         display.innerText = parseFloat(firstNumber) + parseFloat(secondNumber);
//     }

//       firstNumber = '';
//       secondNumber = '';
//       operator = '';
    
//     } else {
//       display.innerText += buttonValue;
//     }
//   });
// });


/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// As a user, I want to be able to select numbers so that I can perform operations with them.
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  });

// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.


// For this project we need to give our calculator the instructions to be able operate
// Basic operations like addition, subtraction, multiplication, and division


// We have to record/save the value of the numbers somewhere
let firstNumber = '';
let secondNumber = '';
let operator = '';

function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return b !== 0 ? a / b : 'Error'; // Handle division by zero

  return 0;
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonValue = event.target.innerText;

    if (['+', '-', '*', '/'].includes(buttonValue)) {
      firstNumber = display.innerText; // Store first number
      operator = buttonValue; // Store the operator
      display.innerText = ''; // Clear display for the second number
    } else if (buttonValue === '=') {
      secondNumber = display.innerText; // Store second number
      display.innerText = calculate(firstNumber, secondNumber, operator); // Perform calculation
      firstNumber = '';
      secondNumber = '';
      operator = '';
    } else if (buttonValue === 'C') {
      // Clear everything
      display.innerText = '';
      firstNumber = '';
      secondNumber = '';
      operator = '';
    } else {
      // Append number to the display
      display.innerText += buttonValue;
    }
  });
});


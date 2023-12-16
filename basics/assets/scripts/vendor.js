// Retrieving DOM elements from the HTML
const usrInput = document.getElementById('input-number'); // Input field for user-entered numbers
const addBtn = document.getElementById('btn-add'); // Button for addition operation
const subtractBtn = document.getElementById('btn-subtract'); // Button for subtraction operation
const multiplyBtn = document.getElementById('btn-multiply'); // Button for multiplication operation
const divideBtn = document.getElementById('btn-divide'); // Button for division operation

const currentResultOutput = document.getElementById('current-result'); // Element to display the current result
const currentCalculationOutput = document.getElementById('current-calculation'); // Element to display the current calculation

// Function to display the calculation result and description in the UI
function outputResult(result, text) {
  currentResultOutput.textContent = result; // Updates the displayed result with the calculated value
  currentCalculationOutput.textContent = text; // Updates the displayed calculation description
}
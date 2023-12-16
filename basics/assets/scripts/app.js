// 'app.js' file

// Initial values for the calculator
const defaultResult = 0; // The default starting result for calculations
let currentResult = defaultResult; // The current result of calculations, initially set to defaultResult
let logEntries = []; // An array to store calculation log entries

// Function to retrieve user input from the input field
function getUserNumberInput(){
    return parseInt(usrInput.value); // Parses and returns the integer value entered by the user
}

// Function to generate and display calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; // Constructs a string representing the calculation
    outputResult(currentResult, calcDescription); // Updates the UI to display the current result and calculation
}

// Function to log calculation entries
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation: operationIdentifier, // The type of operation performed (ADD, SUBTRACT, MULTIPLY, DIVIDE)
        prevResult: prevResult, // The previous result before the operation
        number: operationNumber, // The number used in the operation
        result: newResult // The new result after the operation
    };
    logEntries.push(logEntry); // Adds the log entry to the logEntries array
    console.log(logEntries); // Displays the log entries in the console
}

// Function to perform calculations based on the operation type
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput(); // Retrieves the user-entered number
    
    // Checking if the calculation type is valid and entered number is not falsy
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber // Checks if enteredNumber is falsy (e.g., 0)
    ) { 
        return; // Exits the function if calculationType or enteredNumber is invalid
    }

    const initialResult = currentResult; // Stores the initial result before calculation
    let mathOperator;
    // Performs the calculation based on the calculationType
    if (calculationType === 'ADD'){
        currentResult += enteredNumber; // Adds the enteredNumber to the current result
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber; // Subtracts the enteredNumber from the current result
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber; // Multiplies the current result by the enteredNumber
        mathOperator = '*';
    } else if (calculationType ==='DIVIDE'){
        currentResult /= enteredNumber; // Divides the current result by the enteredNumber
        mathOperator = '/';
    }

    // Displays the calculation and updates the log
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Event listener functions for different calculation buttons
function add() {
    calculateResult('ADD'); // Initiates addition calculation
}

function subtract(){
    calculateResult('SUBTRACT'); // Initiates subtraction calculation
}

function multiply(){
    calculateResult('MULTIPLY'); // Initiates multiplication calculation
}

function divide(){
    calculateResult('DIVIDE'); // Initiates division calculation
}

// Adding event listeners to the buttons to trigger calculations
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


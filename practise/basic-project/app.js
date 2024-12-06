const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    currentEnteredNum: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculatResult(calculationType) {

  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  let mathOperator;

  if(calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  if (calculationType === 'ADD') {
    currentResult = currentResult + enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult = currentResult - enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult = currentResult * enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE'){
    currentResult = currentResult / enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  // const result = num1 + num2;
  // return result;
  // const enteredNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult + enteredNumber;
  // createAndWriteOutput('+', initialResult, enteredNumber);
  // writeLog('ADD', initialResult, enteredNumber, currentResult);
  calculatResult('ADD');
}

function subtract() {
  // const enteredNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult - enteredNumber;
  // createAndWriteOutput('-', initialResult, enteredNumber);
  // writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
  calculatResult('SUBTRACT');
}

function multiply() {
  // const enteredNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult * enteredNumber;
  // createAndWriteOutput('*', initialResult, enteredNumber);
  // writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  calculatResult('MULTIPLY');
}

function divide() {
  // const enteredNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult / enteredNumber;
  // createAndWriteOutput('/', initialResult, enteredNumber);
  // writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
  calculatResult('DIVIDE');
}
// const additionResult = add(10,3);
// currentResult = add(10,3);
// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

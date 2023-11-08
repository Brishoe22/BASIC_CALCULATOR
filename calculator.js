let result = document.getElementById('result');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  result.value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  result.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  currentInput = '';
  result.value = '';
}
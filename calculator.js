alert('Press "OK" or the "ENTER" key to continue!')
const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null,
};
// When a user hits an operator after entering the first operand
function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator;

	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}

	console.log(calculator);
}

function inputDecimal(dot) {
	if (!calculator.displayValue.includes(dot)) {// If the `displayValue` property does not contain a decimal point
		// Append the decimal point
		calculator.displayValue += dot;
	}
}

function handleOperator(nextOperator) {
	// Destructure the properties on the calculator object
	const { firstOperand, displayValue, operator } = calculator
	// `parseFloat` converts the string contents of `displayValue`
	// to a floating-point number
	const inputValue = parseFloat(displayValue);

	if (operator && calculator.waitingForSecondOperand)  {//for more than 2 operators following each other
		calculator.operator = nextOperator;
		console.log(calculator);
		return;
	  }
	// verify that `firstOperand` is null and that the `inputValue`
	// is not a `NaN` value
	if (firstOperand === null && !isNaN(inputValue)) {
		// Update the firstOperand property
		calculator.firstOperand = inputValue;
	}
   else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

	calculator.waitingForSecondOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}
function calculate(firstOperand, secondOperand, operator) {
	if (operator === '+') {
		return firstOperand + secondOperand;
	} else if (operator === '-') {
		return firstOperand - secondOperand;
	} else if (operator === 'x') {
		return firstOperand * secondOperand;
	} else if (operator === '÷') {
		return firstOperand / secondOperand;
	} else if (operator === '%'){
		return firstOperand * 0.01;
	}
	return secondOperand;
}
//to reset calculator 
function resetCalculator() {
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
  }

function updateDisplay() {
	const display = document.querySelector('.calculatorScreen');
	display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
	const { target } = event;
	if (!target.matches('input')) {
		return;
	}
	if (target.classList.contains('operator')) {
		handleOperator(target.value);
		updateDisplay();
		return;
	}

	if (target.classList.contains('red')) {
		console.log('operator', target.value);
		return;
	}

	if (target.classList.contains('decimal')) {
		inputDecimal(target.value);
		updateDisplay();
		return;
	}

	if (target.classList.contains('clear')) {
		resetCalculator();
		updateDisplay();
		return;
	}

	inputDigit(target.value);
	updateDisplay();
});


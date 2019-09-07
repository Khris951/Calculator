const display = document.querySelector('.calculator .display');
const operators = ['+', '-', '*', '/'];
let isLastPressedButtonOperator = false;

document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(event) {
    display.value += event.target.innerText;
    isLastPressedButtonOperator = false;
}

document
    .querySelectorAll('.opers button')
    .forEach(oper => oper.addEventListener('click', operPressed));

function operPressed(event) {
    if (!isLastPressedButtonOperator)
    {
        display.value += event.target.innerText;
        isLastPressedButtonOperator = true;
    }
}

document
    .querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    const result = eval(display.value);
    if (result === Number.POSITIVE_INFINITY || result === Number.NEGATIVE_INFINITY || isNaN(result)) {
        display.value = 'Invalid operation!';
    } else {
        display.value = result;
    }
}

document
    .querySelector('.decimal').addEventListener('click', decimalPressed);

function decimalPressed() {
    if (!display.value.includes('.') && !isLastPressedButtonOperator) {
        display.value += '.';
    }
}

document
    .querySelector('.clear').addEventListener('click', clearPressed);

function clearPressed() {
    display.value = '';
}

document
    .querySelector('.backspace').addEventListener('click', backspacePressed);
    
function backspacePressed() {
    display.value = display.value.slice(0, -1);
    const lastSymbol = display.value[display.value.length - 1];
    if (operators.includes(lastSymbol)) {
        isLastPressedButtonOperator = true;
    } else {
        isLastPressedButtonOperator = false;
    }
}

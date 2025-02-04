let currentNumber = '';
let previousNumber = '';
let operation = null;

// Adiciona números ao visor
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

// Escolhe a operação
function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculate();
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Realiza o cálculo
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Erro';
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateDisplay();
}

// Limpa o visor
function clearResult() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

// Atualiza o visor
function updateDisplay() {
    const display = document.getElementById('result');
    display.value = currentNumber || '0';
}
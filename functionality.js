let display = document.getElementById('display');
let lastResult = '';

function appendCharacter(character) {
    if (display.value === '' && (character === '+' || character === '-' || character === '*' || character === '/' || character === '%')) {
        appendLastResult();
    }
    display.value += character;
}

function compute() {
    try {
        let result = eval(display.value.replace('÷', '/').replace('×', '*').replace('%', '/100'));
        lastResult = result;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = '';
}

function appendLastResult() {
    display.value += lastResult;
}

// Add event listener for keydown event to handle Enter key and numeric inputs
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        compute();
    } else if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '(', ')', '%'].includes(event.key)) {
        appendCharacter(event.key);
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

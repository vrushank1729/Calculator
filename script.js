function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(num1, operator, num2) {
    if(operator === '+') {
        return add(num1, num2)
    } else if(operator === '-') {
        return subtract(num1, num2)
    } else if(operator === '*') {
        return multiply(num1, num2)
    } else if(operator === '/') {
        return divide(num1, num2)
    }
}

function display(btn_text) {
    let clickDisplay = document.querySelector('.clickDisplay')
    let displayText = clickDisplay.textContent, n = displayText.length

    if(btn_text === 'clear') {
        clickDisplay.textContent = ''
    }
    else if(!isNaN(btn_text)) {
        clickDisplay.textContent += btn_text
    }
    else if( (btn_text !== '=') && (displayText.length !== 0) ) {
        if(isNaN(displayText[n-1])) {
            clickDisplay.textContent = displayText.substring(0, n-1) + btn_text
        } else {
            clickDisplay.textContent += btn_text
        }
    }
}

function calculate() {
    let btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let btn_text = btn.textContent
            display(btn_text)
        })
    })
}

calculate()
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

let num1, operator, num2

function operate(num1, operate, num2) {
    if(operate === '+') {
        return add(num1, num2)
    } else if(operate === '-') {
        return subtract(num1, num2)
    } else if(operate === '*') {
        return multiply(num1, num2)
    } else if(operate === '/') {
        return divide(num1, num2)
    }
}

function display() {
    let btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let btn_text = btn.textContent
            let clickDisplay = document.querySelector('.clickDisplay')
            if(btn_text === 'clear') {
                clickDisplay.textContent = ''
            } else if(btn_text !== '=') {
                clickDisplay.textContent += btn_text
            }
        })
    })
}

display()
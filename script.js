function operate(num1, operator, num2) {
    if(operator === '+') {
        return num1 + num2
    } else if(operator === '-') {
        return num1 - num2
    } else if(operator === '*') {
        return num1 * num2
    } else if(operator === '/') {
        return num1 / num2
    }
}

function calculate() {
    let btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let btn_text = btn.textContent
            let clickDisplay = document.querySelector('.clickDisplay')
            let displayText = clickDisplay.textContent, n = displayText.length

            if(!isNaN(btn_text)) {
                clickDisplay.textContent += btn_text
            }
            else if(btn_text === 'clear') {
                clickDisplay.textContent = ''
            }
            else if(btn_text !== '=' && (n>0) && !isNaN(displayText.substring(0, n-1))) {
                if(isNaN(displayText[n-1])) {
                    clickDisplay.textContent = displayText.substring(0, n-1) + btn_text
                } else {
                    clickDisplay.textContent += btn_text
                }
            }
            else {
                let operators = ['+', '-', '*', '/']
                for(let i=0; i<4; i++) {
                    if(displayText.includes(operators[i])) {
                        let j = displayText.indexOf(operators[i])
                        let num1 = parseInt( displayText.substring(0, j), 10 )
                        let num2 = parseInt( displayText.substring(j+1, n), 10 )

                        let result = operate(num1, operators[i], num2)
                        clickDisplay.textContent = result + btn_text
                    }
                }
            }
        })
    })
}

calculate()
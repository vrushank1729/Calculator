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

function calculate(btn_text, displayText, clickDisplay, n) {
    let operators = ['+', '-', '*', '/']
    for(let i=0; i<4; i++) {
        let str = displayText.substring(1,n)
        if(str.includes(operators[i])) {
            let j = str.indexOf(operators[i]) + 1
            let num1 = parseInt( displayText.substring(0, j), 10 )
            let num2 = parseInt( displayText.substring(j+1, n), 10 )
        
            let result = operate(num1, operators[i], num2)
            if(btn_text !== '=') {
                clickDisplay.textContent = result + btn_text
            } else {
                clickDisplay.textContent = result
            }
        }
    }
}

function display() {
    let btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let btn_text = btn.textContent
            let clickDisplay = document.querySelector('.clickDisplay')
            let displayText = clickDisplay.textContent
            let n = displayText.length

            if(!isNaN(btn_text)) {
                clickDisplay.textContent += btn_text
            }

            else if(btn_text === 'clear') {
                clickDisplay.textContent = ''
            }

            else if(btn_text === '-') {
                if( n===1 && !isNaN(displayText[0]) ) {
                    clickDisplay.textContent += btn_text
                }
                else if(n===0 || n===2) {
                    clickDisplay.textContent += btn_text
                }
                else if( n>2 && !isNaN(displayText.substring(0,n-1))) {
                    clickDisplay.textContent += btn_text
                }
                else if( n>2 && !isNaN(displayText[n-1])) {
                    calculate(btn_text, displayText, clickDisplay, n)
                }
            }

            else if( ['+', '*', '/'].includes(btn_text) && (n>0) ) {
                if( (n===1) && !isNaN(displayText[0]) ){
                    clickDisplay.textContent += btn_text
                }
                else if( n==2 ) {
                    if( !isNaN(displayText[1]) ) {
                        clickDisplay.textContent += btn_text
                    }
                    if( !isNaN(displayText[0]) && isNaN(displayText[1]) ) {
                        clickDisplay.textContent = displayText.substring(0, n-1) + btn_text
                    }
                }
                else if( n>2 && !isNaN(displayText.substring(0, n-1)) ) {
                    if(isNaN(displayText[n-1])) {
                        clickDisplay.textContent = displayText.substring(0, n-1) + btn_text
                    } else {
                        clickDisplay.textContent += btn_text
                    }
                }
                else if ( !isNaN(displayText[n-1]) ) {
                    calculate(btn_text, displayText, clickDisplay, n)
                }
            }

            else if( btn_text === '=' && !isNaN(displayText[n-1]) ) {
                calculate(btn_text, displayText, clickDisplay, n)
            }
        })
    })
}

display()
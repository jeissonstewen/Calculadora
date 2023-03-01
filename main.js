let mem = []
function operacion(operando) {
    switch (operando) {
        case '+':
            if (num1.value != '') {
                mem.push(num1.value)
            }
            signo.innerText = '+'
            num1.value = ''
            break
        case '-':
            if (num1.value != '') {
                mem.push(num1.value)
            }
            signo.innerText = '-'
            num1.value = ''
            break
        case '*':
            if (num1.value != '') {
                mem.push(num1.value)
            } signo.innerText = 'x'
            num1.value = ''
            break
        case '/':
            if (num1.value != '') {
                mem.push(num1.value)
            } signo.innerText = '/'
            num1.value = ''
            break
        case 'AC':
            mem=[]
            signo.innerText = ''
            num1.value = ''
            solucion.innerText = ''
            break
        case '=':
            let suma
            if (num1.value != '') {
                mem.push(num1.value)
            }
            if (signo.innerText == '+') {
                suma = mem.reduce((a, b) => +a + +b)
            } else if (signo.innerText == '-') {
                suma = mem.reduce((a, b) => a - b)
            } else if (signo.innerText == 'x') {
                suma = mem.reduce((a, b) => a * b)
            } else if (signo.innerText == '/') {
                suma = mem.reduce((a, b) => a / b)
            }
            solucion.innerText = suma
            num1.value = ''
            mem = [suma ]
            console.log(suma)
            console.log(mem)
            break
    }
}
function operacion(operando){
    switch(operando){
        case '+':
            resultado =+ num1.value + + num2.value
            console.log(resultado)
            signo.innerText = '+'
            break
        case '-':
            resultado = num1.value - num2.value
            console.log(resultado)
            signo.innerText = '-'
            break
        case '*':
            resultado = num1.value * num2.value
            console.log(resultado)
            signo.innerText = 'x'
            break
        case '/':
            resultado = num1.value / num2.value
            console.log(resultado)
            signo.innerText = '/'
            break
        case 'AC':
            signo.innerText = ''
            num1.value = ''
            num2.value = ''
            resultado = ''
        case '=':
            solucion.innerText = resultado
            console.log(resultado)
            break
    }
}
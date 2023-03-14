let dato = 0, mem =[], operador
for(let i=0; i<=9; i++){
    document.getElementById('btn_'+i).addEventListener('click',(event)=>mostrar(event.target))  
}
for(let i=10; i<=15; i++){
    document.getElementById('btn_'+i).addEventListener('click',(event)=>operacion(event.target)
)}

function mostrar(tecla){
    document.getElementById('solucion').innerHTML = document.getElementById('solucion').innerHTML+tecla.value
}
addEventListener('keypress',evento =>{
    if(!isNaN(evento.key))
        mostrar2(evento.key)  
})
function mostrar2(tecla){
    document.getElementById('solucion').innerHTML =document.getElementById('solucion').innerHTML+tecla
}

function operacion(oper){
    if(oper.value=='+'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='+'
        console.log(dato)
    } else if(oper.value=='-'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='-'
        console.log(dato)
    } else if(oper.value=='x'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='*'
        console.log(dato)
    } else if(oper.value=='/'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='/'
        console.log(dato)
    } else if(oper.value=='ac'){
        solucion.innerHTML = ''
        dato = 0
    } else if(oper.value=='='){
        operando()
    }
}
addEventListener('keypress',evento =>{
    if(evento.key=='+'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='+'
    } 
    if(evento.key=='-'){
        dato = Number(solucion.innerHTML)
        operador='-'
        solucion.innerHTML = ''        
    } 
    if(evento.key=='*'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='*'
    } 
    if(evento.key=='/'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''        
        operador='/'
       } 
    if(evento.key=='Enter'){
        operando()
    }  
})

function operando(){
    if(operador=='+'){
        resultado = Number(solucion.innerHTML) + dato
        solucion.innerHTML = resultado
    } else if(operador == '-') {
        resultado = dato - Number(solucion.innerHTML)
        solucion.innerHTML =  resultado
    } else if(operador == '*') {
        resultado = dato * Number(solucion.innerHTML)
        solucion.innerHTML =  resultado
    }else if(operador == '/') {
        resultado = dato / Number(solucion.innerHTML)
        solucion.innerHTML =  resultado
    } else if(operador == 'no'){
        solucion.innerHTML =  ''
    }
    dato=0
}
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

function operacion(dato){
    if(dato.value=='+'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='+'
        console.log(dato)
    } else if(dato.value=='-'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='-'
        console.log(dato)
    } else if(dato.value=='x'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='*'
        console.log(dato)
    } else if(dato.value=='/'){
        dato = Number(solucion.innerHTML)
        solucion.innerHTML = ''
        operador='/'
        console.log(dato)
    } else if(dato.value=='ac'){
        solucion.innerHTML = ''
        dato = 0
    }
    if(dato.value=='='){
        console.log('dato')        
        console.log(operador)
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
        console.log(operador)
    }  
})

function operando(){
    if(operador=='+'){
        resultado = Number(solucion.innerHTML) + dato
        solucion.innerHTML = resultado
        console.log(resultado)
        console.log(dato)
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
        console.log(operador)
        solucion.innerHTML =  ''
    }
    dato=0
}
let dato = 0, mem =[]
for(let i=0; i<=15; i++){
    document.getElementById('btn_'+i).addEventListener('click',(event)=>mostrar(event.target))
    
}
function mostrar(tecla){
    document.getElementById('solucion').innerHTML =    document.getElementById('solucion').innerHTML+tecla.value
}
addEventListener('keypress',evento =>{
    /* if(evento.key=='+' || evento.key=='-' || evento.key=='*' || evento.key=='/')
    operando(evento.target) */

    if(!isNaN(evento.key))
        mostrar2(evento.key)  
})
function mostrar2(tecla){
    document.getElementById('solucion').innerHTML =document.getElementById('solucion').innerHTML+tecla
}

addEventListener('keypress',evento =>{
    if(evento.key=='+'){
        dato =+ dato + + solucion.innerHTML 
        solucion.innerHTML = ''        
    }        
})

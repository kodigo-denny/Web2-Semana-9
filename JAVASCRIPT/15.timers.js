//setTimeout 

 const pantalla=document.querySelector('body')
const cont = document.querySelector('#cont')
const reset = document.querySelector('#reset')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')

let cuenta;
let i = 0;

reset.addEventListener('click', (e) =>{
    i = -1
})

play.addEventListener('click', comenzar)

function comenzar(){
    cuenta = setInterval(incrementar, 1000)
}

function incrementar(){
    i++
    cont.innerHTML = i
}

stop.addEventListener('click', (e) => {
    clearInterval(cuenta)
})
/*
 let retardo=setTimeout(()=>{
    pantalla.style.backgroundColor='green'
     clearTimeout(retardo)
     console.log('se ha limpiado el retardo')
 },10000)
*/


//setInteval *****************************************************************************





/*
 let contador=0; 

 let newContador=setInterval(()=>{
     contador>10 ? clearInterval(newContador) : console.log(contador++)
 },1000)
*/

//window.requestAnimationFrame()*****************************************************************
/*
 function holaMundo(){
   let saludo=window.requestAnimationFrame(holaMundo)
    
   console.log('hola mundo')

  saludo>1000 ? window.cancelAnimationFrame(saludo):null

 }
 holaMundo()

*/
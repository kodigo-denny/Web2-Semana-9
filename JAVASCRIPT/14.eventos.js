/*
onblur(): se pierde el foco.
onchange(): al modificar el valor del componente.
onbeforeunload(): se lanza al intentar cerrar una ventana.
onclick(): al hacer clic en un elemento.
ondblclick(): al hacer doble click.
onerror(): si se produce un error al cargar la página web o una imagen.
onfocus(): cuando un componente obtiene el foco.
onkeydown(): al pulsar cualquier tecla.
onkeypress(): al pulsar una tecla correspondiente a un carácter.
onkeyup(): al leventar cualquier una tecla.
onload(): se produce al terminar de cargarse la página web o una imagen.
onmousedown(): al presionar un botón del ratón.
onmousemove(): se ha movido el ratón.
onmouseout(): el cursor del ratón sale del área ocupada por un elemento.
onmouseover(): el cursor del ratón entra en el área ocupada por un elemento.
onmouseup(): al dejar de presionar un botón del ratón.
onresize(): al redimensionar una ventana o frame.
onselect(): cuando se selecciona un texto.
onunload(): al salir de la página web.
*/ 


const boton=document.querySelector('button')
const cuerpo=document.querySelector('body')
const formulario=document.querySelector('#formulario')

console.log(formulario)

boton.addEventListener('click',pulsar)

function pulsar(){
    alert('Has pulsado correctamente')
}

function pulsar2(){
    alert('Hola mundo')
}



 
window.addEventListener('resize',(e)=>{
    cuerpo.style.backgroundColor='green'
    cuerpo.style.width='100%'
    cuerpo.style.height='1000px'
})

formulario.addEventListener('focus',(e)=>{
    formulario.style.backgroundColor='orangered'
})
/*
formulario.addEventListener('blur',(e)=>{
    formulario.style.backgroundColor='black'
})
*/
/*
const cambiar = (e) => {
    formulario.style.backgroundColor='black'
}
*/

formulario.addEventListener('blur', (e) =>{
    formulario.style.backgroundColor='black'
})

formulario.addEventListener('change',(e)=>{
    cuerpo.style.backgroundColor='yellow'
    console.log("Cambio")
})


document.addEventListener('click',(e)=>{
    cuerpo.style.width='300px'
    cuerpo.style.height='300px'
    //cuerpo.style.backgroundColor='blue'
    const x = document.querySelector('#txt1')
    const y = document.querySelector('#txt2')
    x.value = e.clientX
    y.value = e.clientY
    console.log(e)
})

formulario.addEventListener('click',cambiaAlto)


function cambiaAlto(){
    formulario.style.height='50px'
}

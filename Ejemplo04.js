function operar(){
    let n1 = Number(prompt("Ingrese el primer numero: "))
    let n2 = Number(prompt("Ingrese el segundo numero: "))
    let resultado = sumar(n1, n2)
    mostrar(resultado)
}

function mostrar(resultado){
    alert("La suma es: " + resultado)
}

function sumar(num1, num2){
    alert("Antes de sumar")
    return num1 + num2
    alert("Despues de sumar")
}
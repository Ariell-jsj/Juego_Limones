function generarAleatorios(min, max){
    let random =Math.random(); // Genera un número aleatorio entre 0 y 1
    let numero =random*(max-min); //0-max0
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero + min;
    return numeroEntero;
}

function mostrarEnSpan(idSpan, valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}
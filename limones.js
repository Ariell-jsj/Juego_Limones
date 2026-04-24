let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=30;
let personajeX=canvas.width/2;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actiualizarPantalla();
}

function actiualizarPantalla(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}
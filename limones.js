let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=30;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;


let personajeX=canvas.width/2;
let limonesX=canvas.width/2;
let limonesY=5;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimones();
}

//suelo y personaje
function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}


//mover izquierda
function moverIzquierda(){
    personajeX=personajeX-10;
    actiualizarPantalla();
}
//mover derecha
function moverDerecha(){
    personajeX=personajeX+10;
    actiualizarPantalla();
}

function actiualizarPantalla(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimones();
    
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}

function dibujarLimones(){
    ctx.fillStyle="green";
    ctx.fillRect(limonesX,limonesY,ANCHO_LIMON,ALTURA_LIMON); 
}

function bajarLimones(){
    limonesY = limonesY +10;
    actiualizarPantalla(); 

}
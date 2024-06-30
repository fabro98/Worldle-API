let intentos = 6;

fetch("https://random-word.ryanrk.com/api/en/word/random/?length=5")
.then(Response => Response.json())
.then(Response => {
    console.log(Response[0].toUpperCase());
    palabra = Response[0].toUpperCase();
})
    .catch(error => {
        console.log("Error");
        let diccionario =["CRACK", "FABRO", "ACTOR", "BOTON", "RELOJ", "CAMPO","MARCA"]
    let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    palabra = diccionario[posicion];
    console.log(palabra);
    });
window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}

const button = document.getElementById("guess-button");


function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        console.log("PERDISTE!")
        terminar("<h1>PERDISTE!😖</h1>")
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

button.addEventListener("click",intentar);
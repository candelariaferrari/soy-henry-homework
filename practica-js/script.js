console.log("JavaScript conectado correctamente")
/* Variables */
const nombreUsuario = "Cande Ferrari";

let contadorMensaje = 0;

const precioProducto = 4000;

let puntajeJuego = 0

/* Array */
let tareas = ['limpiar', 'Cocinar', 'Guardar'];


console.log('nombre de usuario:' + nombreUsuario);

console.log('contador de mensaje:' + contadorMensaje);

console.log('precio producto:' + precioProducto);

console.log('puntaje juego:' + puntajeJuego);

/* funciones */

function saludar(nombreUsuario) {
    return 'Hola, ' + nombreUsuario + '!';
}

console.log(saludar('Cande'));
console.log(saludar('Julian'));
console.log(saludar('Cata'));


function calcularDoble(puntajeJuego){
    return puntajeJuego * 2;
}

console.log('funcion calculadora doble:' + ' ' + calcularDoble(2));
console.log('funcion calculadora doble:' + ' ' + calcularDoble(4));
console.log('funcion calculadora doble:' + ' ' + calcularDoble(8));

/* Array */
console.log('Tareas:' + ' ' + tareas);

console.log( 'Cuantas tareas hay:' + ' ' + tareas.length);

console.log('Muestra la primera tarea: ' + tareas[0]);
console.log('Muestra la ultima tarea: ' + tareas[tareas.length - 1]);
tareas.push("Jugar");
console.log("Nuevas listas de tareas: " + tareas);


/* Estructura de control */
function clasificarNota(nota){
    if(nota >= 60){
        return 'Aprobado'
    }else{
        return 'Desaprobado'
    }
}
/*  Luego reescribe la misma lógica usando el operador ternario en una sola línea. */
function clasificarNota(nota) {
    return nota >= 60 ? 'Aprobado' : 'Desaprobado';
}
console.log('Nota: ' + clasificarNota(80));
console.log('Nota: ' + clasificarNota(45));
console.log('Nota: ' + clasificarNota(60));
console.log('Nota: ' + clasificarNota(59));

/* Iteraciones */

for (let i = 0; i < tareas.length; i++) {
    console.log('Índice:', i, '- Tarea:', tareas[i]);
}

tareas.forEach(function(tarea) {
    console.log('tarea: ' + tarea);
});

/* Math.random y Math.floor */
const indiceAleatorio = Math.floor(Math.random() * tareas.length); 
//Math.random() genera un número decimal aleatorio entre 0 y 1.
//tareas.length obtiene la cantidad de tareas.
//Math.floor() redondea hacia abajo para obtener un índice válido.
console.log('Índice aleatorio: ', indiceAleatorio);
console.log('Tarea seleccionada: ', tareas[indiceAleatorio]);
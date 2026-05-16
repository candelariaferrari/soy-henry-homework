/* Selección de button */
const btn = document.getElementById('cambiarBtn');

/* Selección de parrafo */
const parrafo = document.getElementById('parrafo');

/* const de colores */

const colores = [
  "#6366F1",
  "#8B5CF6",
  "#14B8A6",
  "#EC4899"
];

btn.addEventListener('click', function (event) {
  console.log('Click en el botón!');

  const fondoAleatorio = Math.floor(Math.random() * colores.length);

  console.log('color aleatorio: ', fondoAleatorio);
  console.log('color seleccionado: ', colores[fondoAleatorio]);

  parrafo.style.backgroundColor = colores[fondoAleatorio];
  parrafo.style.color = "white";
  parrafo.textContent = "¡Nuevo texto generado!";
  btn.textContent="¡Click las veces que quieras y camnbia de color!"
});




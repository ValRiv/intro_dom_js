"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR*/

document.getElementById("boton1").innerHTML = "PEGAR";
console.log(document.getElementById("boton1"));

document.getElementById("boton2").innerHTML = "COPIAR";
console.log(document.getElementById("boton2"));

document.getElementById("boton3").innerHTML = "CORTAR";
console.log(document.getElementById("boton3"));

/*2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/
const primerbtn= document.querySelector('.btn');
primerbtn.classList.add('agua');

const segundobtn= document.getElementsByClassName('btn')[1];
segundobtn.classList.add('agua')

const tercerbtn= document.getElementsByClassName('btn')[2];
tercerbtn.classList.add('agua')



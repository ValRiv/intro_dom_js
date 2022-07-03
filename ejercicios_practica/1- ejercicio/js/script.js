"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   */

 const titulodelHeader=document.querySelector(".post-header");
 console.log(titulodelHeader.textContent);
/*2)
Cambiar título utilizando javascript por otro cualquiera.*/
console.log(titulodelHeader.textContent="¡Nuevo titulo!");
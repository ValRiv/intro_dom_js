"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"*/

const primerboton= document.getElementById("boton1");
primerboton.addEventListener("click", function () {
    console.log("Primer boton");
    });

const segundoboton= document.getElementById("boton2");
segundoboton.addEventListener("click", function () {
 console.log("Segundo boton");
    });

const tercerboton= document.getElementById("boton3");
tercerboton.addEventListener("click", function () {
    console.log("Tercer boton");
    });

/*Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)*/


    const primerbtn= document.getElementsByClassName("btn")[0];
    primerbtn.addEventListener("click", function () {
    // Removemos la clase de cerrado
    primerbtn.classList.remove("fuego");
    // Agregamos la clase de abierto
    primerbtn.classList.add("fuego");
    });


   const segundobtn= document.getElementsByClassName("btn")[1];
   segundobtn.addEventListener("click", function () {
    // Removemos la clase de cerrado
   segundobtn.classList.remove("fuego");
    // Agregamos la clase de abierto
   segundobtn.classList.add("fuego");
    });
    

    const tercerbtn= document.getElementsByClassName("btn")[2];
    tercerbtn.addEventListener("click", function () {
        // Removemos la clase de cerrado
       tercerbtn.classList.remove("fuego");
        // Agregamos la clase de abierto
       tercerbtn.classList.add("fuego");
        });
    



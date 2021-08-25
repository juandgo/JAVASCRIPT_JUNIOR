// "use strict";

// const definirCompra = (n) =>{//Numero de x comprador de helado. 
//     let din = prompt(`Dinero de ${n}`);
//     if (din >= 0.6 && din < 1) return (`${n}: helado de agua}`);
//     if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
//     if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
//     if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
//     if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
//     else return (`${n}: No te alcanza para ningun helado`);
// }

// // console.log(definirCompra("Cofla"))
// // console.log(definirCompra("Pedro"))
// // console.log(definirCompra("Roberto"))

// document.write(definirCompra("Cofla"))
// document.write(definirCompra("Pedro"))
// document.write(definirCompra("Roberto"))

// -------------- ARRAY ----------------------------------------------------------------------------------------------

// let frutas = ["banana","manzana","pera",5,6,"pedro"]

// -------------- ARRAY ASOCIATIVO -------------------------------------------------------------------------------------

// let pc1 = {
//     nombre: "JuandaPC",
//     procesador: "Intel Core I7",
//     ram: "16GB",
//     espacio: "1TB",
// }

// let pc2 = ["JuandaPC","Intel Core I7","16GB","1TB"]

// // document.write(pc2[1])
// // document.write(pc["nombre"])

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

//  frase =  `el nombre de mi PC es: ${nombre} <br>
//                 el procesador es: ${procesador}<br>
//                 la memoria ram es: ${ram}<br>
//                 el el espacio en el disco es de: ${espacio}`;

// document.write(frase);

// -------------- BUCLES -------------------------------------------------------------------------------------
// -------------- BUCLE WHILE -------------------------------------------------------------------------------------
// let numero = 0;

// while (numero < 1000){
//     numero++;
//     document.write(numero);
//     if (numero == 10) {
//         break;
//     }
// }
// -------------- BUCLE FOR -------------------------------------------------------------------------------------

// for (let i = 0; i <= 6; i++) {
//     if (i == 4) {
//         continue;//salta el numero 4
//     }
//     document.write(i+"<br>");
// }
// -------------- BUCLE FOR IN  y OF-------------------------------------------------------------------------------------
// let animales = ["gato","perro","pajaro", "raton"];
// animales.tamanio = "grande";//concateno 

// for (animal in animales) {//agarra la posicion 
//     document.write(animal+"<br>");
// }
// document.write("-------<br>");
// for (animal of animales) {//agarra el elmento 
//     document.write(animal+"<br>");
// }
// -------------- SENTECIA LABEL Y SENTECIA CONTINUE ------------------------------------------------

// array1 = ["maria","josefa","roberta"];
// array2 = ["pedro","marcelo",array1,"josefina"];

// forLabel://Esta es la sentencia label y le puedo dar cualquier nombre
// for (let array in array2) {//agarra la posicion 
//     if (array == 2) {
//         for (let array of array1) {//agarra el elmento 
//             // continue;
//             // continue forLabel;//salta el array de la posicion 2 
//             document.write(array+"<br>");
//             // break;
//             break forLabel;//termina el primer for cuando el array es igual a 2
//         }
//     }else{
//         document.write(array2[array]+"<br>");
//     }
// }
// --------------- FUNCIONES -------------------------------------------------------

// - Definiciones y usos
// - Formas de crear funciones (y llamarlas)
// - Returns 
// - Parametros
// - Scope
// - Funciones flecha

// --------------- FUNCION FLECHA -------------------------------------------------------

// la  palabra funcion cambia por una flecha "=>" y una variable agarra el valor que retorna la funcion tabien mer perimte colocar la variable sin perntesis, tambien permite resumir codigo.

//ej1
// const saludar = (nombre)=>{
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase)
// }
//ej2
// const saludar = nombre=>{ let frase = `¡Hola ${nombre}! ¿Como estas?`; document.write(frase)}

// saludar("pedro")
// ------------------ Ejercicios ----------------------------------------------------------------------------
// Ej 1
// let free = false;

// const validarCliente = (time)=>{
//     let edad = prompt("¿Cúal es tu edad");
//     if (edad >= 18){
//         if(time >= 2 && time < 7 && free == false){
//             alert("puedes pasar gratis porque eres la primer persona despues de las 2 AM")
//             free = true;
//         }else{
//             alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
//         }
//     }else{
//         alert("Mira papu, eres menor de edad por ende no vas a pasar, pensa")
//     }
// }

// validarCliente(12)
// validarCliente(4)
// validarCliente(1)
// validarCliente(7)

// Ej 2

let cantidad = prompt("¿cuantos alumnos son?")
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno"+(i+1)),0];//Cero es la cantidad de asistencias por lo cual esto es una matriz dentro de una matriz 
    // EJ: {lucas, 0}, {pedro, 1},{Laura, 0}
}

const tomarAsistencia = (nombre, p)=>{ 
    // if (presencia.ignoreCase == "p") {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;//esto indica que siempre va agarra la posicion i y la numero 1 que tiene el array interno
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }    
}

for(alumno in alumnosTotales) {
     let resultado = `${alumnosTotales[alumno][0]}:<br>
     ________Presentes: ${alumnosTotales[alumno][1]}:<br>
     ________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
     if (30 - alumnosTotales[alumno][1] > 18) {
         resultado += "<b style='color:red'>REPROBADO POR INACISTENCIAS</b><br><br>";
     }else{
         resultado += "<br><br>";
     }
}


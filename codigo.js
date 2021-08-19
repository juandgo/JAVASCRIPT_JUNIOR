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
let animales = ["gato","perro","pajaro", "raton"];
animales.tamanio = "grande";//concateno 

for (animal in animales) {//agarra la posicion 
    document.write(animal+"<br>");
}
document.write("-------<br>");
for (animal of animales) {//agarra el elmento 
    document.write(animal+"<br>");
}


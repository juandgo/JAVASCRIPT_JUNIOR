// ========== CONCAT ============================================

// let cadena = "cadena de prueba";
// let cadena2 = " real";

// let resultado = cadena.concat("  hola mundo",cadena2);

// document.write(resultado);

// ========== STARWITH, ENDSWITH, INCLUDES ======================
//STARWITH indica si es cierto que comienza con la misma plabra 
//ENDSWITH indica si es cierto que termina con la misma plabra 
//INCLUDES indica si es cierto que la palabra se encuntra en el texto 

// let cadena = "cadena de prueba";
// let cadena2 = "cadena";
// let cadena3 = "de";

// let resultado = cadena.startsWith(cadena2);
// let resultado2 = cadena.endsWith(cadena3);
// let resultado3 = cadena.includes(cadena3);

// document.write(resultado);
// document.write("<br>",resultado2);
// document.write("<br>",resultado3);

//============ INDEXOFF, LASTINDEXOF  ===========================
// Me da la posicion de la cadena en que inicia la palabra 
//lastIndexOf busca la palabra en la ultima posicion de la cadena

// let cadena = "cadena de prueba";
// let cadena2 = "prueba";

// let resultado = cadena.indexOf(cadena2);
// let resultado2 = cadena.lastIndexOf(cadena2);

// document.write(resultado);
// document.write(resultado2);

//============  PADSTART, PADEND Y REPEAT =================================
//Agrega texto segun la cantidad de caracteres indicada.
// REPEAT solo repite 

// let cadena = "ABC";
// let cadena2 = "";

// let resultado = cadena.padStart(15,"1234");

// document.write(resultado);

//============  TRIM, TRIMEND, TRIMSTART  =================================
//Borra los espacios que hay en un string
//Borra los espacios que hay al final de un string
//Borra los espacios que hay al comienzo de un string

// let cadena = "  pedro   ";

// let resultado = cadena.trim();
// let resultado = cadena.trimEnd();
// let resultado = cadena.trimStart();

// document.write(resultado.length);

//============  METODOS TRANSFORMADORES =================================
// POP sirve para agarrar y sacar el ultimo elemento del array
// SHIFT sirve para agarrar y sacar el primer elemento del array
// PUSH sirve para agregar uno o mas de un elemento al final del array
// REVERSE INVIERTE LOS ELEMENTOS DEL ARRAY
// UNSHIFT sirve para agregar uno o mas de un elemento al inicio del array
// SORT sirve para organizar loa elementos del array en orden alfabetico o numerico
// SPLICE borra los elemento segun el rango indicado de la cadena y los replaza por otro u tros elementos, si no los quiero borrar simplemente coloco 0 y solo añade los elementos a la cadena, con -1,1 me refiero al final de un arreglo.

// // let nombres = ["pedro","maria","jorge"];
// // let numeros = [1,4,2,5,4,9,8]
// let numeros = ["manzanas","pera","uba","mango","sandia","borojo","guayaba","piña"]

// document.write("Array original: <b>"+numeros+" </b><br>");
// // let resultado = nombres.pop();
// // let resultado = nombres.shift();
// // let resultado = nombres.push("camilo","david");
// // let resultado = nombres.reverse();
// // let resultado = nombres.unshift(0,1,2);
// // numeros.sort();
// numeros.splice(-1,1,"Roberto","Camilo");

// // document.write("Elemento removido: <b style='color:red'>",resultado,"</b><br>");
// // document.write(resultado,"<br>");
// document.write("Resultado: <b>"+numeros+"</b>");
// // console.log("Resultado: <b>"+nombres+"</b>"); para ejecutar por terminal solo puedo usar console.log
//============  METODOS ACCESORES =================================


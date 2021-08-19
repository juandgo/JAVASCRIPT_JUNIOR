"use strict";

const definirCompra = (n) =>{//Numero de x comprador de helado. 
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua}`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    else return (`${n}: No te alcanza para ningun helado`);
}

console.log(definirCompra("Cofla"))
console.log(definirCompra("Pedro"))
console.log(definirCompra("Roberto"))
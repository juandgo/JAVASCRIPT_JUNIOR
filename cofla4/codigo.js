class Calculadora{
    constructor(){
    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for (let i = 1; i < exp; i++) {
            numero *= num;            
        }
        return numero;
    }
}

const calculadora =  new Calculadora();
alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: divicion, 5: potenciar, 6: raiz cuadrada, 7: raiz cubica")

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 3){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 4){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 5){
    let numero = prompt("Numero a potenciar");
    let exp = prompt("Exponente");
    // resultado = calculadora.potenciar(numero,exp);
    resultado = Math.pow(numero,exp);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 6){
    let numero = prompt("Numero a sacar raiz");
    resultado = Math.sqrt(numero);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 7){
    let numero = prompt("Numero a sacar raiz cubica");
    resultado = Math.cbrt(numero);
    alert(`Tu resultado es: ${resultado}`)
} else {
    alert(`No se ha encontrado la opcion`);
}

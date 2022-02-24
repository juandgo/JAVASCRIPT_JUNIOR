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
        for (let i = 0; i < exp; i++) {
            numero *= num;            
        }
        return numero;
    }
}

const calculadora =  new Calculadora();
alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: divicion, 4: multiplicacion, 5: potenciar")

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
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 4){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if(operacion == 5){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`)
} else {
    alert(`No se ha encontrado la opcion`);
}

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }
    //La funcion felcha no puede ser usada dentro de una clase
    verInfo(){
        document.write(this.info + "<br>");
    };
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie,edad, color);
        this.raza = raza;
    }

    // static ladrar(){
    //     alert("¡Wow!");
    // }

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"rojo","Doberman");
const gato = new Animal("gato",3,"negro");
const pajaro = new Animal("pajaro",2,"verde");
//  console.log(perro);
//  document.write(perro.color);

perro.setRaza = "Pedro";
document.write(perro.getRaza)
// Perro.ladrar();
// perro.verInfo();


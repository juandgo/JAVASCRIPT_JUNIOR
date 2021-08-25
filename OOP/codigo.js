class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de colo ${this.color}`;
    }
    //La funcion felcha no puede ser usada dentro de una clase
    verInfo(){
        document.write(this.info + "<br>")
    };
}

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie,edad);
    }
}

let perro = new animal("perro",5,"rojo");
let gato = new animal("gato",3,"negro");
let pajaro = new animal("pajaro",2,"verde");
//  console.log(perro);
//  document.write(perro.color);

perro.verInfo();
gato.verInfo();
pajaro.verInfo();


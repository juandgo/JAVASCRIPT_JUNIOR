class Celular{
    constructor(color, peso, tamanio, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamanio = tamanio;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    precionarBotonEncendido() {
        if (this.encendido) {
            alert("celular apagado");
        }else{
            alert("celular prendido");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido) {
            alert("reiniciando celular");
        }else{
            alert("celular ya esta apagado");
        }
    }

    tomarFoto() {
        if (this.encendido) {
            alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
        }
    }
    grabarVideo() {
        if (this.encendido) {
            alert(`grabando video en: ${this.resolucionDeCamara}`);
        }
    }
    mobileInfo(){
        return `Color: <b>${this.color}</b></br>
                Peso: <b>${this.peso}</b></br>
                Tamaño: <b>${this.tamanio}</b></br>
                Reslución de Video: <b>${this.resolucionDeCamara}</b></br>
                Memoria Ram: <b>${this.ram}</b></br>`;
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamanio,rdc,ram,rdce){
        super(color,peso,tamanio,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facials");
    }
    infoAltaGama(){
        return this.mobileInfo+`Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}

// celular1 = new Celular("rojo","150g","5'","full","1GB");
// celular2 = new Celular("negro","155g","5.5'","full hd","2GB");
// celular3 = new Celular("blanco","15046g","5'.9","full hd","2GB");

// clular1.precionarBotonEncendido();
// clular1.tomarFoto();
// clular1.grabarVideo();
// clular1.reiniciar();
// clular1.precionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3GB","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4k","4GB","hd");


document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    `);






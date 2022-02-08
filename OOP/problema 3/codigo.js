class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }

    app = new App("16.000","5 estrellas","900mb");

    app.instalar();
    app.cerrar();
    app.iniciar();

}
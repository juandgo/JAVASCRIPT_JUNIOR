class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
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

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","5 estrellas","100mb");
app4 = new App("23.000","4 estrellas","1gb");
app5 = new App("900","3 estrellas","250mb");
app6 = new App("17","2 estrellas","900mb");

document.write(`
    ${app.appInfo()}</b></br>
    ${app2.appInfo()}</b></br>
    ${app3.appInfo()}</b></br>
    ${app4.appInfo()}</b></br>
    ${app5.appInfo()}</b></br>
    ${app6.appInfo()}</b></br>
    `)


// app.instalar()
// app.abrir();
// app.cerrar();
// app.desinstalar();
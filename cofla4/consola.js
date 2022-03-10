const materias = {
    fisica: [90,6,3,"fisica"],
    matematica: [90,6,3,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,9,2,"programacion"],
    biologia: [98,9,1,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const asistencia = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        
        console.log(materias[materia][3]);

        if(asistencias >= 90){
            console.log("%c Asistencias en orden","color:green")
        }else{
            console.log(materias[materia][3])
            console.log("%c Falta de asistencias","color:red")
        }

        if(promedio >= 7){
            console.log("%c Promedio aprobado","color:green")
        }else{
            console.log("%c Promedio desaprobado","color:green")
        }

        if(trabajos >= 3){
            console.log("%c trabajos practicos en orden","color:green")
        }else{
            console.log("%c faltan trabajos practicos","color:green")
        }
    }
}

asistencia()
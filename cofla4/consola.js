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
        let asistencias = materias[materias][0];
        if(asistencias >= 90){
            console.log(materias[materia][3])
            console.log("%cAprobado","color:green")
        }else{
            console.log(materias[materia][3])
            console.log("%cDesaprobado","color:red")
        }
    }
}

asistencia()
// Es lo mas parecido a un Array asociativo, son objetos.
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Roldan","pedro","camilo","ramiro","armando"],
        progrmacion: ["Dalto","maria","juancho","diana","armando"],
        logica: ["Claudia","felipe","natahlia","fernando","Cofla","julian"],
        quimica: ["Andres","julian","camilo","diana","maria","Cofla"],
    }
    if (materias[materia] !== undefined) {
        // return materias[materia]
        return [materias[materia],materia,materias]
    }else{
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = informacion(materia);
    if (informacion !== false) {
        let profesor = informacion(materia)[0][0]
        let alumnos = informacion(materia)[0]
        alumnos.shift();//quita el primer elemento del arreglo
        document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color: red">${profesor}</b><br>
                    Los alumnos son: <b style="color: blue">${alumnos}</b><br><br>`)
    }
}

const cantidadClases = (alumnos) => {
    let informacion = informacion();
    let cantidadTotal = 0;
    for(info in informacion){
        if (informacion[2][info]) {
            if (informacion[2][info].includes(alumno)) {
                cantidadTotal++
            }
        }
    }
    return cantidadTotal
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write("cofla")
// Es lo mas parecido a un Array asociativo, son objetos.
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Roldan","pedro","camilo","ramiro","armando"],
        programacion: ["Dalto","maria","juancho","diana","armando"],
        logica: ["Claudia","felipe","natahlia","fernando","cofla","julian"],
        quimica: ["Andres","julian","camilo","diana","maria","cofla"],
    }
    if (materias[materia] !== undefined) {
        // return materias[materia]
        return [materias[materia],materia,materias]
    }else{
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();//quita el primer elemento del arreglo
        document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color: red">${profesor}</b><br>
                    Los alumnos son: <b style="color: blue">${alumnos}</b><br><br>`)
    }
}

const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for(info in informacion){
        // document.write(info)
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(info+" ");
        }
    }
    return `<b style='color:blue'> ${alumno}</b> esta en: <b>     ${cantidadTotal}</b>clases: <b style="color:green">${clasesPresentes}</b><br><br>`;
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadClases("maria"))
document.write(cantidadClases("pedro"))
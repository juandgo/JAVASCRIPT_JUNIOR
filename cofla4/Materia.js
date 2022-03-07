// Array asociativo
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Roldan","pedro","camilo","ramiro","armando"],
        progrmacion: ["Dalto","maria","juancho","diana","armando"],
        logica: ["Claudia","felipe","natahlia","fernando","julian"],
        quimica: ["Andres","julian","camilo","diana","maria"],
    }
    if (materias[materia] !== undefined) {
        // return materias[materia]
        return [materias[materia],materia]
    }else{
        // return "La materia no existe!"
        return false;
    }
}

let informacion = obtenerInformacion("logica");
if (informacion !== false) {
    let profesor = obtenerInformacion("logica")[0][0];
    let alumnos = obtenerInformacion("logica")[0]
    alumnos.shift();//quita el primer elemento del arreglo
    document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color: red">${profesor}</b><br>
                Los alumnos son: <b style="color: blue">${alumnos}</b>`)
}
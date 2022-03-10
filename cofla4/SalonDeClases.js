// Es lo mas parecido a un Array asociativo, son objetos.
let materias = {
    fisica: ["Roldan","pedro","camilo","ramiro","armando"],
    programacion: ["Dalto","maria","juancho","diana","armando"],
    logica: ["Claudia","felipe","natahlia","fernando","cofla","julian"],
    quimica: ["Andres","julian","camilo","diana","maria","cofla"],
}

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumno.length >= 20) {
        document.write(`lo siento <b>${alumno}</b>, las clases <b>${materia}</b> ya estan llenas`)
    }else{
        alumnos.push(alumno)
        if (materia == "fisica") {
            materias = {
                fisica: alumnos,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: alumnos,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: alumnos,
                quimica: materias["quimica"]
            }
        }else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: alumnos
            }
        }   
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.`)     
    }
}
document.write(materias[`fisica`]+"<br>")

inscribir("pedrito","fisica")

document.write("<br>"+materias[`fisica`])

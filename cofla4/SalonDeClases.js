// Es lo mas parecido a un Array asociativo, son objetos.
let materias = {
    fisica: ["Roldan","pedro","camilo","ramiro","armando"],
    programacion: ["Dalto","maria","juancho","diana","armando"],
    logica: ["Claudia","felipe","natahlia","fernando","cofla","julian"],
    quimica: ["Andres","julian","camilo","diana","maria","cofla"],
}

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento <b>${alumno}</b>, las clases <b>${materia}</b> ya estan llenas<br><br>`)
    }else{
        personas.push(alumno)
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }   
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.`)     
    }
}
document.write(materias[`fisica`]+"<br>")
//Solo podra registrar 21 alumnos, mejor dicho personas 
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")

document.write("<br>"+materias[`fisica`])

let tp = "100 minutos hacer trabajos practicos";
let estudio = "10 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("Tareas")

for(var i = 0; i < 14; i++){
    if(i == 0){
        console.log("semana 1");
    }
    console.group("dia "+(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i == 7){
        if(i == 0){
            console.groupEnd();
            console.log("semana 1");
        }
    }
}
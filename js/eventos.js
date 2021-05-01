//Pintar las tareas dentro de la interfaz

let divMostrarTareas = document.getElementsByClassName('main-tareas');

let search = document.getElementById('search');
let prioridadTarea = document.getElementById('prioridad-tarea');
let btnAddTarea = document.getElementById('btn');


function pintarUnaTarea(pListaTarea) {

    let divP = document.createElement('div');
    let parf = document.createElement('p');

    let textP = document.createTextNode('Tarea ' + pListaTarea.titulo);

    console.log(textP(listaTareas.titulo));



    parf.appendChild(textP);
    divP.appendChild(parf);








}

console.log(listadeTareas[0].titulo);
const listaDeElementos = new Array();

let btnGuardar = document.querySelector('#btn-guardar');
let inputTextLista = document.querySelector('#guardar');
let prioridadTarea = document.querySelector('#prioridad-tarea');
let divPintar = document.querySelector('.main-tareas');

btnGuardar.addEventListener('click', addTareas);

function addTareas(event) {
    event.preventDefault();

    const tareasList = new ListadeTareas(inputTextLista.value, prioridadTarea.value);

    listaDeElementos.push(tareasList);
    pintarAllTareas(listaDeElementos);

}

function pintarAllTareas(pLista) {
    divPintar.innerHTML = "";
    pLista.forEach(tarea => tarea.pintarTarea(divPintar))
}
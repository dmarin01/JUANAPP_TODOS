const listaDeElementos = new Array();

let btnGuardar = document.querySelector('#btn-guardar');
let inputTextLista = document.querySelector('#guardar');
let inputTextBusqueda = document.querySelector('#search')
let prioridadTarea = document.querySelector('#prioridad-tarea');
let divPintar = document.querySelector('.main-tareas');

let selectorPrioridadNav = document.querySelector('#prioridad-tarea-nav');

btnGuardar.addEventListener('click', addTareas);
selectorPrioridadNav.addEventListener('change', seleccionTarea);
inputTextBusqueda.addEventListener('input', recogerTextoBusqueda);


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


function listaFiltradaPrioridades(pPrioridad) {

    const listaDePrioridades = listaDeElementos.filter(prioridadBuscada => prioridadBuscada.value === pPrioridad)

    return listaDePrioridades;
}


function seleccionTarea(event) {

    let seleccionPrioridad = event.target.value;

    if (seleccionPrioridad != '') {



        const prioridadTarea = listaFiltradaPrioridades.seleccionPrioridad;
        pintarAllTareas(prioridadTarea);
    } else {
        pintarAllTareas(listaDeElementos)
    }

    console.log(seleccionPrioridad);
}











function recogerTextoBusqueda(event) {


    if (event.target.value !== '') {
        let tareasFiltradas = buscarPalabra(event.target.value, listaDeElementos);
        pintarAllTareas(tareasFiltradas);
    } else {
        pintarAllTareas(listaDeElementos);
    }
}

function buscarPalabra(pPalabra) {
    let palabra = pPalabra.toLowerCase().trim();
    let listaFiltrada = listaDeElementos.filter(palabrabuscar => {
        return palabrabuscar.titulo.toLowerCase().includes(palabra)
    })
    return listaFiltrada;
}
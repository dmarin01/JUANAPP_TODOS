class ListadeTareas {

    constructor(pTitulo, pPrioridad) {
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
        this.completado = false;
    }

    completarTarea() {
        this.completado = true;
    }

    borrarTarea() {
        this.titulo = "";
        this.prioridad = "";
        this.completado = true;
    }

    pintarTarea() {
        let div = document.createElement('div');
        let parrf = document.createElement('p');
        let btnRemove = document.createElement('button');
        button.classList.add("btn-close ms");

        parrfText = document.createTextNode(this.titulo);
        parrf.appendChild(parrfText);

        div.appendChild(parrf);
        div.appendChild(btnRemove);

        switch (this.prioridad) {
            case 'urgente':
                div.style.background = 'red'
                break;
            case 'diaria':
                div.style.background = 'lightgreen'
                break;
            case 'mensual':
                div.style.background = 'ligthblue'
                break;
        }



    }
}
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

    pintarTarea(divPintar) {
        let div = document.createElement('div');
        let parrf = document.createElement('p');
        let btnRemove = document.createElement('button');


        let parrfText = document.createTextNode(this.titulo);
        parrf.appendChild(parrfText);
        btnRemove.classList.add("btn-close");

        div.appendChild(parrf);
        div.appendChild(btnRemove);

        switch (this.prioridad) {
            case 'urgente':
                console.log(this.prioridad);
                div.style.backgroundColor = 'red'
                break;
            case 'diaria':
                div.style.backgroundColor = 'lightgreen'
                break;
            case 'mensual':
                div.style.backgroundColor = 'ligthblue'
                break;
        }

        divPintar.appendChild(div);

        btnRemove.addEventListener('click', () => {

            this.completarTarea();
            div.parentNode.removeChild(div)
        })

    }
}
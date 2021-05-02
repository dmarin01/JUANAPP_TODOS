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
        div.classList.add(this.prioridad)


        let parrfText = document.createTextNode(this.titulo);
        parrf.appendChild(parrfText);
        btnRemove.classList.add(`btn-close`);

        div.appendChild(parrf);
        div.appendChild(btnRemove);

        switch (this.prioridad) {
            case '1':
                div.style.backgroundColor = 'red'
                break;
            case '2':
                div.style.backgroundColor = 'lightgreen'
                break;
            case '3':
                div.style.backgroundColor = 'lightblue'
                break;
        }

        divPintar.appendChild(div);

        btnRemove.addEventListener('click', (event) => {

            this.completarTarea();
            div.parentNode.removeChild(div);
            listaDeElementos.splice(event.target, 1);
        })

    }
}
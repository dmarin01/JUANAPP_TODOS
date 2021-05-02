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
        div.classList.add(this.prioridad);

        let contador = div.dataset.id;
        div.dataset.id = 0;



        let parrfText = document.createTextNode(this.titulo);
        parrf.appendChild(parrfText);
        btnRemove.classList.add(`btn-close`);

        div.appendChild(parrf);
        div.appendChild(btnRemove);

        switch (this.prioridad) {

            case '1':
                div.style.backgroundColor = '#FF6961'
                div.className = this.prioridad + ' d-flex justify-content-between';
                contador += 1;
                break;
            case '2':
                div.style.backgroundColor = '#CFADC7'
                div.className = this.prioridad + ' d-flex justify-content-between';
                contador += 1
                break;
            case '3':
                div.style.backgroundColor = '#5d9b9b'
                div.className = this.prioridad + ' d-flex justify-content-between';
                contador += 1
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
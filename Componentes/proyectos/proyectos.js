import { header } from "../header/header.js";

function proyectos(){

    let section = document.createElement('section');
    section.className = "section-header "
    section.appendChild(header())
    section.appendChild(lista())

    return section;
}

//Función header


//Item lista

function lista(){
    let div = document.createElement('div');
    div.innerText = "Item de Lista"

    return div;
}

export { proyectos }
import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos(){

    let section = document.createElement('section');
    section.className = "section-header "
    section.appendChild(header()) 
     section.appendChild(listaProyectos())

    return section;
}
//Función header
function listaProyectos(){
    let div = document.createElement('div')
    div.className = "lista-Proyectos"
    dataProyectos.forEach((proyecto)=>{
        div.appendChild( lista(proyecto.nombre, proyecto.descripcion, proyecto.github, proyecto.stacks));
    }); //Almacena a las letras de data.js
    return div;
} 
function lista(nombre, web, github, stacks){
    let div = document.createElement('div');
    div.className = "div-item";
    //div.innerText = texto;
    
    let a = document.createElement('a')
    a.appendChild = "Link-github-page"
    a.href = web;
    a.innerText = "web";
    div.appendChild(a);

    let stack = document.createElement('div')
    stack.innerText = "[js,CSS,HTML]";
    div.appendChild(stack);

    let btnGithub = document.createElement('div')
    btnGithub.className = "btn-github";
    btnGithub.href = github;
    btnGithub.innerText = "Github";
    div.appendChild(btnGithub);

    return div;
}

export {proyectos}
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
       div.appendChild( lista(proyecto.nombreP,  proyecto.nombre, proyecto.descripcion, proyecto.github, proyecto.stacks, proyecto.fecha, proyecto.Image));
   }); //Almacena a las letras de data.js
   return div;
}
function lista(nombre, web, github, stacks){
   let div = document.createElement('div');
   div.className = "div-item";
   //div.innerText = texto;


   let nombrep = document.createElement('h1')
   nombrep.appendChild = "nombreep"
   nombrep.href = nombrep;
   nombrep.innerText = "⬛ Hospital";
   div.appendChild(nombrep);

   let stack = document.createElement('div')
   stack.innerText = "[js,CSS,HTML]";
   div.appendChild(stack);


   let nombrea = document.createElement('div')
   nombrea.appendChild = "NombreP"
   nombrea.href = nombre;
   nombrea.innerText = "Génesis Luch";
   div.appendChild(nombrea);

   let fechac = document.createElement('div')
   fechac.appendChild = "fecha"
   fechac.href = fechac;
   fechac.innerText = "9/10/2024"
   div.appendChild(fechac);



   let btnGithub = document.createElement('a')
   btnGithub.className = "btn-github";
   btnGithub.href = "https://github.com/marianaseven2013/Hospital";
   btnGithub.innerText = "Github";
   div.appendChild(btnGithub);
  
   let a = document.createElement('a')
   a.className = "ab"
   a.href = "https://github.com/marianaseven2013/Hospital/raw/refs/heads/Farmacia/src/descargas/Hospital.jar";

   div.appendChild(a);

   let iimg = document.createElement('img')
   iimg.src = "https://static.vecteezy.com/system/resources/previews/006/397/715/non_2x/download-icon-dwonload-symbol-free-vector.jpg"
   iimg.className = "desc"
   a.appendChild(iimg);


   return div;
}


export {proyectos}
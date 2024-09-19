import { navBarDiv } from "./Componentes/navBar/navBar.js";


/* COMPONENTES DE LA PÁGINA */ 

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.innerText = "Hola mundo soy proyect";
DOM.appendChild(proyect);


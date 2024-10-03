

import { menuL } from '../menuL/menuL.js'; // Asegúrate de que el archivo de menuL.js tenga la exportación correcta

let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://img.freepik.com/vector-premium/logo-m-blanco-negro-fondo-blanco_695730-355.jpg";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Génesis Luch";
navBarDiv.appendChild(h2); // Agregar Texto

// Llamar a la función menuL y añadir el menú a la navBar
let menuElement = menuL();
navBarDiv.appendChild(menuElement); // Añadir el menú a la barra de navegación

export { navBarDiv };
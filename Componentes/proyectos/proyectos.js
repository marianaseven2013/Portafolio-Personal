function proyectos(){

    let section = document.createElement('section');
    section.className = "section-header "
    section.appendChild(header())
    section.appendChild(lista())

    return section;
}

//Función header

function header(){
    let div = document.createElement('div');
    div.className = "header";

    let h2 = document.createElement('h2');
    h2.innerHTML = "Proyectos"
    div.appendChild(h2);

    let btn = document.createElement('div')
    btn.innerHTML = "GitHub"
    div.appendChild(btn);

   return div;
  
}
//Item lista

function lista(){
    let div = document.createElement('div');
    div.innerText = "Item de Lista"

    return div;
}

export { proyectos }
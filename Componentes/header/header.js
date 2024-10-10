function header(){
    let div = document.createElement('div');
    div.className = "header";

    let h2 = document.createElement('h2');
    h2.innerHTML = "Proyectos"
    div.appendChild(h2);

    let btn = document.createElement('a')
    btn.innerHTML = "GitHub"
    btn.href = "https://github.com/marianaseven2013/"
    div.appendChild(btn);

   return div;
  
}

export {header}
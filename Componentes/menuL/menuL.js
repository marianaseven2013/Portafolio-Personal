function menuL() {
    let div = document.createElement('div');
    div.className = "menul";

    // Crear los divs manualmente
    let bbtn1 = document.createElement('div');
    bbtn1.className = "Ch1"
    bbtn1.innerHTML = "Herramienta 1";
    div.appendChild(bbtn1);

    let bbtn2 = document.createElement('div');
    bbtn2.className = "Ch2"
    bbtn2.innerHTML = "Herramienta 2";
    div.appendChild(bbtn2);

    let bbtn3 = document.createElement('div');
    bbtn3.className= "Ch3"
    bbtn3.innerHTML = "Herramienta 3";
    div.appendChild(bbtn3);

    let bbtn4 = document.createElement('div');
    bbtn4.className = "Ch4"
    bbtn4.innerHTML = "Herramienta 4";
    div.appendChild(bbtn4);

    let bbtn5 = document.createElement('div');
    bbtn5.className = "Ch5"
    bbtn5.innerHTML = "Herramienta 5";
    div.appendChild(bbtn5);

    let bbtn6 = document.createElement('div');
    bbtn6.className = "Ch6"
    bbtn6.innerHTML = "Herramienta 6";
    div.appendChild(bbtn6);

    return div;
}

function menuLl() {
    let div = document.createElement('div');
    div.className = "menull";

    let bbtn = document.createElement('div');
    bbtn.innerHTML = "Contactar";
    div.appendChild(bbtn1);

    // Crear los divs manualmente
    let bbtn1 = document.createElement('div');
    bbtn1.className = "Chc"
    bbtn1.innerHTML = "1";
    div.appendChild(bbtn1);

    let bbtn2 = document.createElement('div');
    bbtn2.className = "Chc2"
    bbtn2.innerHTML = "4";
    div.appendChild(bbtn2);

    let bbtn3 = document.createElement('div');
    bbtn3.className= "Chc3"
    bbtn3.innerHTML = "2";
    div.appendChild(bbtn3);

    let bbtn4 = document.createElement('div');
    bbtn4.className = "Chc4"
    bbtn4.innerHTML = "3";
    div.appendChild(bbtn4);

  
    return div;
}

export { menuL };

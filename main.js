document.getElementById("play").addEventListener("click", play);

//Funzione per gestire il click sul button//
function play () {

    const difficoltà = document.getElementById("difficoltà").value;

    let quadrati;
    let quadratiPerRiga;
    
    if (difficoltà == "easy") {
        quadrati = 100;
        quadratiPerRiga = 10;
    } else if (difficoltà=="hard") {
        quadrati = 81;
        quadratiPerRiga = 9;
    } else if (difficoltà == "impossible") {
        quadrati= 49;
        quadratiPerRiga = 7;
    }

    const grid = document.getElementById("grid");

    //Effettuo il reset della griglia al click

    grid.innerHTML=""; 

    for (let i = 1; i <= quadrati; i++) {
        const nodo = document.createElement("div");

        if (quadrati == 100) {
            nodo.classList.add("quadrato");

        } else if (quadrati== 81) {
            nodo.classList.add("quadrato-medio");
            
        } else if (quadrati == 49) {
            nodo.classList.add("quadrato-grande");
        }

        nodo.innerText = i;

        nodo.addEventListener("click", cellClick);
        
        grid.appendChild(nodo); 
    }
}

const numeroBombe = 16;

generaBombe (numeroBombe, quadrati)











//FUNZIONI//
    
 function cellClick () {
    this.classList.add("blue");
    this.removeEventListener("click", cellClick);
}

function generaBombe (numeroBombe,quadrati) {
    
    const bombeGenerate = [];

    while (bombeGenerate.lenght < numeroBombe) {
        bombeGenerate.push(randomIntFromInterval(1 , quadrati));
    }
    return bombeGenerate;
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

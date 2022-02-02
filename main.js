document.getElementById("play").addEventListener("click", play);

//Funzione per gestire il click sul button//
function play () {

    const difficoltà = document.getElementById("difficoltà").value;

    let numeroCelle;
    let quadratiPerRiga;
        
       if (difficoltà == "easy") {
        numeroCelle = 100;
        quadratiPerRiga = 10;
        } else if (difficoltà =="hard") {
            numeroCelle = 81;
            quadratiPerRiga = 9;
        } else if (difficoltà == "impossible") {
            numeroCelle= 49;
            quadratiPerRiga = 7;
        }
    
        const numeroBombe = 16;

        const bombe = generaBombe(numeroBombe,numeroCelle);

        console.log (bombe)




    //Effettuo il reset della griglia al click
    
    const grid = document.getElementById("grid");

    grid.innerHTML=""; 

    for (let i = 1; i <= numeroCelle; i++) {
        const nodo = document.createElement("div");

        if (numeroCelle == 100) {
            nodo.classList.add("quadrato");

        } else if (numeroCelle== 81) {
            nodo.classList.add("quadrato-medio");
            
        } else if (numeroCelle == 49) {
            nodo.classList.add("quadrato-grande");
        }

        nodo.innerText = i;

        nodo.addEventListener("click", cellClick);
        
        grid.appendChild(nodo); 
    }

    return true;
}











//FUNZIONI//
    
//Funzione per gestire il click sulle celle
 function cellClick () {
    this.classList.add("blue");
    this.removeEventListener("click", cellClick);
}

//Funzione per generare le bombe
function generaBombe (numeroBombe, numeroCelle) {
    
    const bombeGenerate = [];

    while (bombeGenerate.lenght < numeroBombe) {
        bombeGenerate.push(randomIntFromInterval(1 , numeroCelle));
    }
    return bombeGenerate;
}

//Funzione per generare un numero casuale compreso tra due valori
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//Funzione per calcolare il numero delle celle
function CalcoloCelle () {

}

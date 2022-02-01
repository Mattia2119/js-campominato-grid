const grid = document.getElementById("grid");

//Creo gli elementi div, li inserisco nel documento e gli aggiungo la classe blue al click//

for (let i = 1; i<=100; i++) {

    const node = document.createElement("div");
    
    node.classList.add("quadrato-facile");

    node.addEventListener("click", function (){

      node.classList.add("blue");

    })

    grid.append(node);
}

const play = document.getElementById("play");



play.addEventListener("click", function() {

    document.getElementById("grid").innerHTML=""; 

    let difficoltà = document.getElementById("difficoltà").value;
    console.log(difficoltà);

    livelloDifficoltà(difficoltà);
}
)

function livelloDifficoltà() {
    let quadrati = 0;
    let ordine = "";
    
    if (difficoltà == "easy") {
        quadrati = 100;
        ordine = "dieci";
    }else if (difficoltà == "hard") {
        quadrati = 81;
        ordine = "otto";
    }else if (difficoltà =="impossible") {
        quadrati = 49;
        ordine = "sette";
    } else {alert("Error, try again later...");

    }

    return [quadrati,ordine];

}



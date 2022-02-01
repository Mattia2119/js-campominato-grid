const grid = document.getElementById("grid");

for (let i = 1; i<=64; i++) {

    const node = document.createElement("div");
    
    node.classList.add("quadrato");

    node.addEventListener("click").classList.add("blue");

    grid.append(node);
}
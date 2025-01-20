// Etch-a-Sketch
const gridContainer = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    sideLength = Number(prompt("How many boxes per side?"));
    gridContainer.innerHTML = "";
    generateGrid(sideLength);
});

function generateGrid(sideLength = 16) {
    let numOfBoxes = sideLength**2;
    let width = `${Math.floor(960/sideLength)}px`;
    let height = width;

    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement("div");
        box.style.width = width;
        box.style.height = height;

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "blue";
        });
    
        gridContainer.appendChild(box);
    }
}

generateGrid();
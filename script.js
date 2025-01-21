// Etch-a-Sketch
const gridContainer = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    sideLength = Number(prompt("How many boxes per side?"));
    // Input validation
    if (sideLength > 100) {
        alert("Sorry, sides are limited to 100 boxes. :(");
        // Exit the function
        return;
    }
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
        box.style.opacity = 0;

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "blue";
            box.style.opacity = Number(box.style.opacity) + 0.25;
        });
    
        gridContainer.appendChild(box);
    }
}

generateGrid();
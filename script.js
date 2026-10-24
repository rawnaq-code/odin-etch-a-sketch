let divContainer = document.querySelector(".container");

function randomRGB() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})`;
}

function addEventListenerToChildDivs() {
    let childDivs = document.querySelectorAll(".pixel");

    childDivs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            let opacity = Number(div.dataset.opacity || 0);

            opacity = Math.min(
                Number((opacity + 0.1).toFixed(1)),
                1
            );

            div.dataset.opacity = opacity;
            div.style.opacity = opacity;
            div.style.backgroundColor = randomRGB();
        });
    });
}

// function addEventListenerToChildDivs() {
//     let childDivs = document.querySelectorAll(".pixel");
//     childDivs.forEach(div => div.addEventListener("mouseenter", () => div.style.backgroundColor = randomRGB()));
// }

function createDivs() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            div.setAttribute("style", "width: 50px; height: 50px;");
            div.setAttribute("class", "pixel");
            divContainer.appendChild(div);
        }
    }
    addEventListenerToChildDivs();
}

createDivs();

let generateBtn = document.querySelector(".gen-btn");

function createGrid(squares) {
    let childDivs = document.querySelectorAll(".pixel");
    // Remove Old Grid
    childDivs.forEach(div => divContainer.removeChild(div));

    let divSize = 800 / squares;
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("style", `width: ${divSize}px; height: ${divSize}px;`);
            newDiv.setAttribute("class", "pixel square");
            divContainer.appendChild(newDiv);;
        }
    }
    addEventListenerToChildDivs();
}

generateBtn.addEventListener("click", () => {
    let noOfSquares = parseInt(prompt("Enter number of Squares per side (max 100): "));
    while((noOfSquares > 100) || !(Number.isInteger(noOfSquares) || (noOfSquares < 1))) {
        noOfSquares = parseInt(prompt("Please Enter Valid Number of Squares: "));
    }
    createGrid(noOfSquares);
});
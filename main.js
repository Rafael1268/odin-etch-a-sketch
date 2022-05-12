const drawingSpace = document.querySelector('.drawingSpace');
const changeGridSize = document.querySelector('#changeGridSize');
changeGridSize.addEventListener('click', () => gridSize());
document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);
let defaultColor = "black";
let mouseDown = false;

createGrid(16);

// Creates the grid
function createGrid(gridSize) {
    const gridTotal = gridSize * gridSize;
    drawingSpace.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-columns: repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < gridTotal; i++) {
        editGrid(i);
    }
}

// Edits the div for each grid
function editGrid(i) {
    const content = document.createElement('div');
    content.classList.add('grid');
    content.id = `div${i}`;
    content.draggable = false;
    drawingSpace.appendChild(content);
    content.addEventListener('mousemove', () => changeColor(content));
}

// Changes the color of the grid when hovering over
function changeColor(grid) {
    if (mouseDown === false) return;
    const currentGrid = document.getElementById(grid.id);
    currentGrid.setAttribute('style', `background-color: ${defaultColor};`)
}

// Changes the grid size
function gridSize() {
    const allGrids = document.querySelectorAll('div.grid');
    const newSize = prompt("How large should the grid be?");
    if (newSize > 64) return alert("That's too big! Max is 64.");
    allGrids.forEach(grid => drawingSpace.removeChild(grid));
    createGrid(newSize);
}
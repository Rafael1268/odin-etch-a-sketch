const drawingSpace = document.querySelector('.drawingSpace');
const changeGridSize = document.querySelector('#changeGridSize');
const colorPicker = document.querySelector('#colorPicker');
const eraseGridBtn = document.querySelector('#eraseGrid');
changeGridSize.addEventListener('click', () => gridSize());
eraseGridBtn.addEventListener('click', () => eraseGrid());
document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);
let mouseDown = false;
let currentGridSize = 16;

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
    currentGrid.setAttribute('style', `background-color: ${colorPicker.value};`)
}

// Changes the grid size
function gridSize() {
    const allGrids = document.querySelectorAll('div.grid');
    const newSize = prompt("How large should the grid be?");
    const newSizeNumber = Number(newSize);
    if(isNaN(newSizeNumber) || newSizeNumber < 1) return console.log("1");
    currentGridSize = newSizeNumber;
    allGrids.forEach(grid => drawingSpace.removeChild(grid));
    createGrid(newSizeNumber);
}

// Erases the grid
function eraseGrid() {
    const allGrids = document.querySelectorAll('div.grid');
    allGrids.forEach(grid => drawingSpace.removeChild(grid));
    createGrid(currentGridSize);
}
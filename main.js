const drawingSpace = document.querySelector('.drawingSpace');
const changeGridSize = document.querySelector('#changeGridSize');
const colorPicker = document.querySelector('#colorPicker');
const eraseGridBtn = document.querySelector('#eraseGrid');
const rainbowModeBtn = document.querySelector('#rainbowMode');
const eraserModeBtn = document.querySelector('#eraserMode');
changeGridSize.addEventListener('click', () => gridSize());
eraseGridBtn.addEventListener('click', () => eraseGrid());
document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);
let rainbowColors = ["#ff3232", "#FF9A32", "#FFFF32", "#32FF3D", "#32E9FF", "#3632FF", "#D432FF"];
let backgroundColor = "white";
let mouseDown = false;
let currentGridSize = 16;
let rainbowMode = false;
let eraserMode = false;
rainbowModeBtn.addEventListener('click', () => rainbowModeToggle());
eraserModeBtn.addEventListener('click', () => eraserModeToggle());

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
    content.addEventListener('mouseover', () => changeColor(content));
}

// Changes the color of the grid when hovering over
function changeColor(grid) {
    if (mouseDown === false) return;
    const currentGrid = document.getElementById(grid.id);
    const random = Math.floor(Math.random() * rainbowColors.length);
    if (eraserMode === true) {
        currentGrid.setAttribute('style', `background-color: ${backgroundColor}};`);
    } else if (rainbowMode === true) {
        currentGrid.setAttribute('style', `background-color: ${rainbowColors[random]};`);
    } else {
        currentGrid.setAttribute('style', `background-color: ${colorPicker.value};`);
    }
}

// Changes the grid size
function gridSize() {
    const allGrids = document.querySelectorAll('div.grid');
    const newSize = prompt("How large should the grid be?");
    const newSizeNumber = Number(newSize);
    if(isNaN(newSizeNumber) || newSizeNumber < 1) return;
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

// Toggles rainbow mode
function rainbowModeToggle() {
    if (rainbowMode === false) {
        rainbowModeBtn.style.color = '#5eff00';
        rainbowMode = true;
    } else {
        rainbowModeBtn.style.color = 'black';
        rainbowMode = false;
    }
}

// Toggles eraser mode
function eraserModeToggle() {
    if (eraserMode === false) {
        eraserModeBtn.style.color = '#5eff00';
        eraserMode = true;
    } else {
        eraserModeBtn.style.color = 'black';
        eraserMode = false;
    }
}
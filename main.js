const drawingSpace = document.querySelector('.drawingSpace');

function createGrid(gridSize) {
    const gridTotal = gridSize * gridSize;
    drawingSpace.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-columns: repeat(${gridSize}, 1fr)`);
    for (i = 0; i < gridTotal; i++) {
        const content = document.createElement('div');
        content.classList.add("div" + (i + 1))
        drawingSpace.appendChild(content);
    }
}

createGrid(16);
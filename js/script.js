const sketchBoxContainerDiv = document.createElement('div');
const middleBottomContainerDiv = document.querySelector('.middle-bottom-container');
const gridOutput = document.getElementById('grid-slider-value');
const clearButton = document.getElementById('clear-button');
const eraseButton = document.getElementById('erase-button');

let gridSlider = document.getElementById('grid-slider');
let sketchBoxRowContainer = document.createElement('div');
let sketchBox = document.createElement('div');

sketchBoxContainerDiv.setAttribute('id', 'sketch-box-container-div');

function changeColor(event){
    if(eraseButton.value == 0){
        this.classList.add('sketch-box-hover');
    }
    else{
        this.classList.remove('sketch-box-hover');
    }
}

let amountOfBoxes = 16;

function createGrid () {
    sketchBoxContainerDiv.textContent = '';
    for(let i = 0; i<amountOfBoxes; i++)
    {
        sketchBoxRowContainer = document.createElement('div');
        sketchBoxRowContainer.classList.add('sketch-box-row-container');

        for(let j = 0; j<amountOfBoxes; j++)
        {
        sketchBox = document.createElement('div');
        sketchBox.classList.add('sketch-box');
        sketchBox.addEventListener('mouseover', changeColor)

        sketchBoxRowContainer.appendChild(sketchBox);
        }

        sketchBoxContainerDiv.appendChild(sketchBoxRowContainer);
    }
}

middleBottomContainerDiv.appendChild(sketchBoxContainerDiv);

gridSlider.oninput = function () {
    amountOfBoxes = this.value;
    gridOutput.textContent = `${amountOfBoxes} x ${amountOfBoxes}`
    createGrid();
}

clearButton.addEventListener('click', createGrid);
createGrid();

eraseButton.addEventListener('click', tempFunction);

function tempFunction(event){
    if(this.value == 0){
        this.value = 1;
        this.setAttribute('style', 'background-color: lightgreen;');
    }
    
    else{
        this.value = 0;
        this.setAttribute('style', 'background-color: default;');
    }
}
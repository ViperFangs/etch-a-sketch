const sketchBoxContainerDiv = document.createElement('div');
const middleBottomContainerDiv = document.querySelector('.middle-bottom-container');
const gridOutput = document.getElementById('grid-slider-value');
const clearButton = document.getElementById('clear-button');
const eraseButton = document.getElementById('erase-button');
const rainbowButton = document.getElementById('rainbow-mode-button');
const shadeButton = document.getElementById('shade-button');

let gridSlider = document.getElementById('grid-slider');
let sketchBoxRowContainer = document.createElement('div');
let sketchBox = document.createElement('div');
let currentShadeColor = 0;

sketchBoxContainerDiv.setAttribute('id', 'sketch-box-container-div');

function changeColor(event){
    if(eraseButton.value == 1){
        this.classList.remove('sketch-box-hover');
        this.setAttribute('style', ``);
    }
    else if(rainbowButton.value == 1 && eraseButton.value == 0){
        this.classList.add('sketch-box-hover');
        this.setAttribute('style', `background-color: ${randomHexColor()};`);
    }
    else if(shadeButton.value == 1 && eraseButton.value == 0){
        this.classList.add('sketch-box-hover');

        if(currentShadeColor >= 1){
            currentShadeColor = 0;
        }
            currentShadeColor += 0.1;

        this.setAttribute('style', `background-color: rgba(0,0,0,${currentShadeColor});`);
    }
    else{
        this.classList.add('sketch-box-hover');
        this.setAttribute('style', ``);
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

eraseButton.addEventListener('click', buttonFunction);
rainbowButton.addEventListener('click', buttonFunction);
shadeButton.addEventListener('click', buttonFunction);

function buttonFunction(event){
    if(this.value == 0){
        this.value = 1;
        this.setAttribute('style', 'background-color: lightgreen;');
    }

    else{
        this.value = 0;
        this.setAttribute('style', 'background-color: default;');
    }
}

const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

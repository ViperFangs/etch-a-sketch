const sketchBoxContainerDiv = document.createElement('div');
const middleBottomContainerDiv = document.querySelector('.middle-bottom-container');

let sketchBoxRowContainer = document.createElement('div');
let sketchBox = document.createElement('div');

sketchBoxContainerDiv.setAttribute('id', 'sketch-box-container-div');

function changeColor(event){
    this.classList.add('sketch-box-hover');
}

let amountOfBoxes = 16;

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

middleBottomContainerDiv.appendChild(sketchBoxContainerDiv);


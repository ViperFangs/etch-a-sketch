const sketchBoxContainerDiv = document.createElement('div');
let sketchBoxRowContainer = document.createElement('div');
let sketchBox = document.createElement('div');

sketchBoxContainerDiv.setAttribute('id', 'sketch-box-container-div');
sketchBoxContainerDiv.setAttribute('style', 'display: flex;');

sketchBox.setAttribute('style', 'background-color: black; width:20px; height:20px;');
sketchBox.classList.add('sketch-box');

function changeColor(event){
    this.setAttribute('style', 'background-color: black; width:20px; height:20px; margin-right: 5px; margin-bottom: 5px; border: 2px solid black;');
}

let amountOfBoxes = 16;

for(let i = 0; i<amountOfBoxes; i++)
{
    sketchBoxRowContainer = document.createElement('div');
    sketchBoxRowContainer.classList.add('sketch-box-row-container');

    for(let j = 0; j<amountOfBoxes; j++)
    {
    sketchBox = document.createElement('div');
    sketchBox.setAttribute('style', 'width:20px; height:20px; margin-right: 5px; margin-bottom: 5px; border: 2px solid black;');
    sketchBox.classList.add('sketch-box');
    sketchBox.addEventListener('mouseover', changeColor)

    sketchBoxRowContainer.appendChild(sketchBox);
    }

    sketchBoxContainerDiv.appendChild(sketchBoxRowContainer);
}

document.body.appendChild(sketchBoxContainerDiv);


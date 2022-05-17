const sketchBoxContainerDiv = document.createElement('div');
const middleRightContainerDiv = document.querySelector('.middle-right-container');

let sketchBoxRowContainer = document.createElement('div');
let sketchBox = document.createElement('div');

sketchBoxContainerDiv.setAttribute('id', 'sketch-box-container-div');
sketchBoxContainerDiv.setAttribute('style', 'display: flex; width:500px; height: 500px;');

sketchBox.setAttribute('style', 'background-color: black; width:20px; height:20px;');
sketchBox.classList.add('sketch-box');

function changeColor(event){
    this.setAttribute('style', 'background-color: black; margin-right: 1px; margin-bottom: 1px; border: 0.1rem solid black; flex:1 1 0;');
}

let amountOfBoxes = 16;

for(let i = 0; i<amountOfBoxes; i++)
{
    sketchBoxRowContainer = document.createElement('div');
    sketchBoxRowContainer.classList.add('sketch-box-row-container');
    sketchBoxRowContainer.setAttribute('style', 'display: flex; flex-direction:column; flex:1 1 0;');

    for(let j = 0; j<amountOfBoxes; j++)
    {
    sketchBox = document.createElement('div');
    sketchBox.setAttribute('style', 'margin-right: 1px; margin-bottom: 1px; border: 0.1rem solid black; flex: 1 1 0;');
    sketchBox.classList.add('sketch-box');
    sketchBox.addEventListener('mouseover', changeColor)

    sketchBoxRowContainer.appendChild(sketchBox);
    }

    sketchBoxContainerDiv.appendChild(sketchBoxRowContainer);
}

middleRightContainerDiv.appendChild(sketchBoxContainerDiv);


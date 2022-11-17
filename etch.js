const grid = document.getElementById("div-grid");
const gridDivs = document.getElementsByClassName("grid-div");
const canvasSize = document.getElementById("canvas-size");
const resizeCanvas = document.getElementById("resize-canvas");
const clearCanvas = document.getElementById("clear-canvas");
const colourPicker = document.getElementById("colour-picker");
const eraserButton = document.getElementById("eraser-button");

var output = document.getElementById("demo");
canvasSize.value = 9;
output.innerHTML = "Value: "+ canvasSize.value + " x " + canvasSize.value;

let eraser = false;
let isClicked = false;
let chosenColour = "black";

function chooseColour() {
  if (eraser == true) {
    chosenColour = "antiquewhite";
  } else {
    chosenColour = colourPicker.value;
  }
  return chosenColour;
}

canvasSize.oninput = function () {
  output.innerHTML = "Value: " + this.value + " x " + this.value;
};

function deleteChild() {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

function clearGridDivs() {
  Array.from(gridDivs).forEach((element) => {
    element.style.backgroundColor = "antiquewhite";
  });
}

function createDiv(divNumber) {
  deleteChild();
  var loops = divNumber * divNumber;
  for (let i = 0; i < loops; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "grid-div";
    grid.insertAdjacentElement("beforeend", newDiv);
  }
  createListeners();
  grid.style.setProperty("--columnnumber", divNumber);
  grid.style.setProperty("--rownumber", divNumber);
}

function createGridListeners() {
  grid.addEventListener("mousedown", () => {
    isClicked = true;
  });
  grid.addEventListener("mouseup", () => {
    isClicked = false;
  });
}

function createListeners() {
  Array.from(gridDivs).forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.backgroundColor = chooseColour();
    });

    element.addEventListener("mouseenter", () => {
      if (isClicked == true) {
        element.style.backgroundColor = chooseColour();
      }
    });
  });
}

function watchColorPicker(event) {
  chosenColour = event.target.value;
}

eraserButton.addEventListener("click", () => {
  if (eraser == false) {
    eraser = true;
    eraserButton.style.backgroundColor = "yellow";
  } else {
    eraser = false;
    eraserButton.style.backgroundColor = "gainsboro";
  }
  
});
colourPicker.addEventListener("change", watchColorPicker, false);
clearCanvas.addEventListener("click", () => clearGridDivs());
resizeCanvas.addEventListener("click", () => createDiv(canvasSize.value));

createGridListeners();
createDiv(9);

const grid = document.getElementById("div-grid");
const gridDivs = document.getElementsByClassName("grid-div");
const canvasSize = document.getElementById("canvas-size");
const resizeCanvas = document.getElementById("resize-canvas");

var output = document.getElementById("demo");
canvasSize.value = 9;
output.innerHTML = canvasSize.value;

let isClicked = false;

canvasSize.oninput = function () {
  output.innerHTML = this.value;
};

function deleteChild() {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
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
    element.addEventListener("click", () => {
      element.style.backgroundColor = "purple";
    });

    element.addEventListener("mouseenter", () => {
      if (isClicked == true) {
        element.style.backgroundColor = "purple";
      }
    });
  });
}

function clearGridDivs(params) {
  Array.from(gridDivs).forEach((element) => {
    element.addEventListener("click", () => {
      element.style.backgroundColor = "white";
    });

    );
}


resizeCanvas.addEventListener("click", () => createDiv(canvasSize.value));

createGridListeners();
createDiv(9);

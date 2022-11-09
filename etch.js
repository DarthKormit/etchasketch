const grid = document.getElementById("div-grid");
const gridDivs = document.getElementsByClassName("grid-div");

function createDiv(divNumber) {
  var loops = divNumber;
  for (let i = 0; i < loops; i++) {
    let newDiv = document.createElement("div");
    const newContent = document.createTextNode("");
    newDiv.appendChild(newContent);
    newDiv.className = "grid-div";
    const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
    grid.insertBefore(newDiv, currentDiv);
  }
}

function createListeners() {
  let isClicked = false;
  grid.addEventListener("mousedown", () => {
    isClicked = true;
  });
  grid.addEventListener("mouseup", () => {
    isClicked = false;
  });

  Array.from(gridDivs).forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.backgroundColor = "purple";
      console.log("data-wow value is: ");
    });

    element.addEventListener("mouseenter", () => {
      if (isClicked == true) {
        element.style.backgroundColor = "purple";
      }
    });
  });
}

createDiv(9);
createListeners();

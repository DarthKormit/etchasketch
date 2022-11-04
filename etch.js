const grid = document.getElementById("div-grid");

function createDiv(divNumber) {
    var loops = divNumber;
    for (let i = 0; i < loops; i++) {
        let newDiv = document.createElement("div");
        const newContent = document.createTextNode("Hi there and greetings!");
        newDiv.appendChild(newContent)
        newDiv.className = "grid-div"
        const currentDiv = document.getElementById("div1");
        // document.body.insertBefore(newDiv, currentDiv);
        grid.insertBefore(newDiv, currentDiv)
    }
}


createDiv(9);
const container = document.getElementById("container");

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function addEventListeners() {
    const squares = document.getElementsByClassName("square");
    for (const square of squares) {
        square.addEventListener("mouseover", changeBackgroundColor);
    }

}

function loadGrid(variable) {
    clearGrid();

    let borderWidth = 1;
    let totalBorderWidth = borderWidth * 2;
    let squareSize = (container.clientWidth - (variable * totalBorderWidth)) / variable;

    for (let i = 0; i < variable; i++) {
        for (let j = 0; j < variable; j++) {
            const divToAppend = document.createElement("div");
            divToAppend.className = "square"

            divToAppend.style.width = `${squareSize}px`;
            divToAppend.style.height = `${squareSize}px`;
            divToAppend.style.border = "1px solid white";

            container.append(divToAppend);
        }
    }
    addEventListeners();
}

loadGrid(16);

function changeBackgroundColor() {
    let style = window.getComputedStyle(this);
    let backgroundColor = style.backgroundColor;
    console.log(backgroundColor);
    if (backgroundColor === "rgb(0, 0, 0)" || backgroundColor === "rgba(0, 0, 0, 0)")
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}


document.addEventListener("DOMContentLoaded", function() {
    let slider = document.getElementById("grid-size");
    let output = document.getElementById("grid-size-value");

    output.textContent = slider.value + 'x' + slider.value;

    slider.oninput = function() {
        output.textContent = this.value + 'x' + this.value;
        loadGrid(slider.value);
    }
});

const container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const divToAppend = document.createElement("div");
        divToAppend.className = "square"

        divToAppend.style.width = "14px";
        divToAppend.style.height = "14px";
        divToAppend.style.border = "1px solid black";

        container.append(divToAppend);
    }
}

function changeBackgroundColor() {
    let style = window.getComputedStyle(this);
    let backgroundColor = style.backgroundColor;
    console.log(backgroundColor);
    if (backgroundColor === "rgb(0, 0, 0)" || backgroundColor === "rgba(0, 0, 0, 0)")
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}


const squares = document.getElementsByClassName("square");
for (const square of squares) {
    square.addEventListener("mouseover", changeBackgroundColor);
}


document.addEventListener("DOMContentLoaded", function() {
    let slider = document.getElementById("grid-size");
    let output = document.getElementById("grid-size-value");

    output.textContent = slider.value + 'x' + slider.value;

    slider.oninput = function() {
        output.textContent = this.value + 'x' + this.value;
    }
});


const container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
    const divToAppend = document.createElement("div");
    divToAppend.className = "square"

    divToAppend.style.width = "150px";
    divToAppend.style.height = "150px";
    divToAppend.style.border = "2px solid crimson";
    divToAppend.style.borderRadius = "5px"

    container.append(divToAppend);
}

function changeBackgroundColor() {
    this.style.backgroundColor = "red";
}

function resetBackgroundColor() {
    this.style.backgroundColor = "white";
}

const squares = document.getElementsByClassName("square");
for (const square of squares) {
    square.addEventListener("click", changeBackgroundColor);
}

const container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
    const divToApped = document.createElement("div");

    divToApped.style.width = "150px";
    divToApped.style.height = "150px";
    divToApped.style.border = "2px solid crimson";
    divToApped.style.borderRadius = "5px"


    container.append(divToApped);
}
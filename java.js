
const button = document.getElementById("button");
const mainDiv = document.getElementById("masterdiv");

button.addEventListener("click", () => {
    if (mainDiv.style.display === "none") {
        mainDiv.style.display = "block";
        button.textContent = "Apagar";
    } else {
        mainDiv.style.display = "none";
        button.textContent = "Encender";
    }
});
function toggleCode() {
    var codeContainer = document.getElementById("codeContainer");
    var button = document.querySelector(".toggle-button");

    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block";
        button.innerHTML = "Ocultar Código";
    } else {
        codeContainer.style.display = "none";
        button.innerHTML = "Mostrar Código";
    }
}

document.querySelector(".toggle-button").addEventListener('click', toggleCode)
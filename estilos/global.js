function toggleCode() {
    var codeContainer = document.getElementById("codeContainer");
    var button = document.querySelector(".toggle-button");

    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block";
        button.innerHTML = "Hide Code";
    } else {
        codeContainer.style.display = "none";
        button.innerHTML = "Show Code";
    }
}

document.querySelector(".toggle-button").addEventListener('click', toggleCode)
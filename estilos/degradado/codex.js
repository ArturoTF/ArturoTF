document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const listItems = document.querySelectorAll("#menu ul li");
    const body = document.body;

    // Muestra y oculta el menú
    menuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    // Cambia el fondo al hacer clic en cada opción del menú
    listItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remueve las clases de gradiente anteriores
            body.className = ""; 
            body.classList.add("gradient", item.getAttribute("data-gradient"));

            // Oculta el menú después de seleccionar un gradiente
            menu.classList.remove("show");
        });
    });
});

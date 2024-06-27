//!MODO OSCURO

const btnSwitch = document.querySelector("#switch");

function toggleDarkMode() {
    var nav = document.getElementById("mi-nav");
    var footer  = document.getElementById("mi-footer");

    document.body.classList.toggle("dark");
    nav.classList.toggle("dark");
    footer.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guarda la preferencia en localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Cargar la preferencia guardada en localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add("dark");
    document.getElementById("mi-nav").classList.add("dark");
    document.getElementById("mi-footer").classList.add("dark");
    btnSwitch.classList.add("active");
}

btnSwitch.addEventListener("click", toggleDarkMode);
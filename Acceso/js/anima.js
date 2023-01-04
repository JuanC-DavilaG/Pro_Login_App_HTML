const btn_registrar = document.querySelector("#Registrar");
const btn_entrada = document.querySelector("#Entrada");
const contenedor = document.querySelector(".ctn");

btn_registrar.addEventListener("click", function() {

    contenedor.classList.add("Registrar-mode");
    
});

btn_entrada.addEventListener("click", function () {

        contenedor.classList.remove("Registrar-mode");
});
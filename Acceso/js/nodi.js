const nodi = document.querySelector('#nodi');
const iniciar = document.querySelector("#inicio");
const cerrar = document.getElementById("cerrar");
const conten = document.querySelector(".ctn");
const mensaje = document.querySelector(".msj");

nodi.addEventListener('click',() =>{

    conten.classList.toggle('dark');
    mensaje.classList.toggle('dark');
    nodi.classList.toggle('active');

    if(conten.classList.contains('dark')){
        localStorage.setItem('modo-dark', 'true');
    }

    else{
        localStorage.setItem('modo-dark', 'false');
    }

});

if(localStorage.getItem('modo-dark') === 'true'){
    conten.classList.add('dark');
    mensaje.classList.add('dark');
    nodi.classList.add('active');
}

else{
    conten.classList.remove('dark');
    mensaje.classList.remove('dark');
    nodi.classList.remove('active');
}

function msj(){

    conten.classList.add('blur');
    document.getElementsByClassName('solido')[0].style.pointerEvents = "none";
    document.getElementsByClassName('transparente')[0].style.pointerEvents = "none";
    document.getElementById('usuario_log').disabled = true;
    document.getElementById('contraseña_log').disabled = true;
    document.getElementsByClassName("msj")[0].classList.add("accion");
    document.getElementById("can").style.animation = "rotacion 2.5s";
    document.getElementById("prb").style.animation = "animacion 2.2s";

}

function msjerror(){

    msj();
    document.getElementById("prb").style.stroke = "#ff0000";
    document.getElementsByClassName('alt')[0].innerHTML = "Error al Iniciar la Sesion!";
    document.getElementsByClassName('descripcion')[0].innerHTML = "Le ofrecemos una disculapa no a sido posible identificarlo, es necesario que se comunique con el adminstrador para encontrar una solución.";
    

}

function msjexito(){

    msj();
    document.getElementById("prb").style.stroke = "#4dff6a";
    document.getElementsByClassName('alt')[0].innerHTML = "Exito!";
    document.getElementsByClassName('descripcion')[0].innerHTML = "Hemos logrado identificarlo satisfactoriamente, Bienvenido al proyecto Thulu.";
    

}

cerrar.addEventListener('click',() =>{

    conten.classList.remove('blur');
    document.getElementsByClassName('solido')[0].style.pointerEvents = "all";
    document.getElementsByClassName('transparente')[0].style.pointerEvents = "";
    document.getElementsByClassName('descripcion')[0].innerHTML = "";
    document.getElementsByClassName('alt')[0].innerHTML = "";
    document.getElementById('usuario_log').disabled = false;
    document.getElementById('contraseña_log').disabled = false;
    document.getElementsByClassName("msj")[0].classList.remove("accion");
    document.getElementById("can").style.animation = "";
    document.getElementById("prb").style.animation = "";
    document.getElementById("prb").style.stroke = "";

});
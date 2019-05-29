var document = document || {};
var imagenes = document.querySelector(".imagenes");
var botonesImagenes = document.querySelector(".botonesImagenes");
var Carrusel = Carrusel || {};
var barra = document.getElementById("barra");

document.addEventListener("DOMContentLoaded", function() {
    cargaImagenes();
    visualizarImagenes();
    cargaBotonImagen();
});

function cargaImagenes() {
    for (var i = 0; i < Carrusel.images.length; i++) {
        var imagen = document.createElement("img");
        imagen.id = i;
        imagen.src = Carrusel.images[i];
        imagen.classList.add("imagen");
        imagen.style.display = "none";
        imagenes.appendChild(imagen);
        asignarAnimacion(imagen);
    }
}

function asignarAnimacion(imagen) {
    if(Carrusel.animacion == 0){
        imagen.classList.add("animacion-rotation");
    } else if(Carrusel.animacion == 1) {
        imagen.classList.add("animacion-transparency");
    } else if(Carrusel.animacion == 2) {
        imagen.classList.add("animacion-escala");
    } 
}

function visualizarImagenes() {
    var imagenVisualizada = document.getElementById(Carrusel.posicion);
    var imagenes = document.getElementsByClassName("imagen");
    for (var i = 0; i < imagenes.length; i++) {
	      imagenes[i].style.display = "none";  
	}
    imagenVisualizada.style.display = "block";
} 

function cargaBotonImagen() {
    for (var i = 0; i < Carrusel.images.length; i++) {
        var botonImagen = document.createElement("button");
        botonImagen.innerHTML = i + 1;
        botonImagen.id = "botonImagen" + i;
        botonImagen.setAttribute("imagenNumero", i);
        botonImagen.addEventListener("click", cambiarImagen)
        botonImagen.classList.add("botonImagen");
        botonesImagenes.appendChild(botonImagen);
    }
}

function cambiarAnimacion() {
    if (Carrusel.animacion == 2) {
        Carrusel.animacion = 0;
   } else {
        Carrusel.animacion = Carrusel.animacion + 1;
    }
    imagenes.innerHTML = "";
    cargaImagenes();
    visualizarImagenes();
}

function cambiarImagen(event) {
    Carrusel.posicion = event.target.getAttribute("imagenNumero");
    visualizarImagenes();
}

function atras() {
    if (Carrusel.posicion > 0) {
        Carrusel.posicion = Carrusel.posicion - 1;
    } else {
        Carrusel.posicion = (Carrusel.images.length - 1);
    }
    visualizarImagenes();
    console.log(Carrusel.posicion);
}

function adelante() {
    if (Carrusel.posicion == (Carrusel.images.length - 1)) {
        Carrusel.posicion = 0;
    } else {
        Carrusel.posicion = Carrusel.posicion + 1;
    }
    visualizarImagenes();
}
    
function iniciar() {
	var botonAtras = document.getElementById('botonAtras');
	var	botonAdelante = document.getElementById('botonAdelante');
	var	botonPlay = document.getElementById("botonPlay");
	var	botonStop = document.getElementById("botonStop");
    var botonesImagenes = document.getElementsByClassName("botonImagen");
    
    BarraProgreso.enPause = false;
	iniciarBarraProgreso();
    
    for (var i = 0; i < botonesImagenes.length; i++) {
        var botonImagen = botonesImagenes.item(i);
        botonImagen.setAttribute('disabled', true);
    }
    
    botonAtras.setAttribute('disabled', true);
    botonAdelante.setAttribute('disabled', true);
    botonPlay.setAttribute('disabled', true);
    botonStop.removeAttribute('disabled');
}

function parar() {
	resetearBarraProgreso();
	var botonAtras = document.getElementById('botonAtras');
	var	botonAdelante = document.getElementById('botonAdelante');
	var	botonPlay = document.getElementById("botonPlay");
	var	botonStop = document.getElementById("botonStop");
	var botonesImagenes = document.getElementsByClassName("botonImagen");
	
	BarraProgreso.enPause = true;
	resetearBarraProgreso();
    
    for (var i = 0; i < botonesImagenes.length; i++) {
        var botonImagen = botonesImagenes.item(i);
        botonImagen.removeAttribute('disabled');
    }
    
    botonAtras.removeAttribute('disabled');
    botonAdelante.removeAttribute('disabled');
    botonPlay.removeAttribute('disabled');
    botonStop.setAttribute('disabled', true);
}

function iniciarBarraProgreso() {
	resetearBarraProgreso();
	BarraProgreso.progreso = 0;
    BarraProgreso.intervalo = setInterval(interval, TIEMPO_INTERVALO);
}

function interval() {
    if (BarraProgreso.enPause === false) {
    	BarraProgreso.progreso += 1;
      	barra.style.width = BarraProgreso.progreso + "%";
      	if (BarraProgreso.progreso >= 100) {
      		adelante();
        	iniciarBarraProgreso();
      	}
    }
}

function resetearBarraProgreso() {
	barra.style.width = "0%";
    clearTimeout(BarraProgreso.intervalo);
}

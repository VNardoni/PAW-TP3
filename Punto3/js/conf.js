var Carrusel = Carrusel  || {};
var BarraProgreso = BarraProgreso || {};

const TIEMPO_INTERVALO = 20;

Carrusel.images = ['images/image1.jpg','images/image2.png','images/image3.jpg'];
Carrusel.animacion = 0;
Carrusel.posicion = 0;

BarraProgreso.enPausa = true;
BarraProgreso.progreso = 0;
BarraProgreso.intervalo;
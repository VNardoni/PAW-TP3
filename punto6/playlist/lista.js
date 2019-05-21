var document=document||{};
var lista = document.getElementById("reproductor");
var links = reproductor.getElementsByTagName('a');



var html="<li><a href='videosMp4/'";

for (var i = 0; i < links.length; i++) {
  links[i].onclick = manejaReproductor;
    
}
function manejaReproductor(e) {
  e.preventDefault();
  var ruta = this.getAttribute("href");
  var archivo = ruta.substr(0, ruta.lastIndexOf('.')) || ruta;
  var video = document.querySelector("#reproductor");
  video.removeAttribute('poster');
  var source = document.querySelectorAll("#reproductor video source");
  source[0].src = archivo + ".mp4";
  video.load();
  video.play();

    document.write("<div style='color:white;font-size:18pt;text-align:center;'></div>");
    var boton=document.createElement("button");
    boton.type='button';
    boton.innerHTML='boton';
    video.appendChild(boton);
    

}

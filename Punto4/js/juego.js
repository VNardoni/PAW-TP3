var 
document=document ||{};
var window=window ||{};

var i = 0;
var respuestasCorrectas = 0;

var console	=console	 ||{};


var cantidadDeClaves = (Object.keys(jsonJuego).length-2);

//window.alert(cantidadDeClaves);

var numero=Math.floor(Math.random()*cantidadDeClaves+1);
//window.alert(numero);

var usadosArray = new Array();
usadosArray.push(numero);
iniciar(numero);

//window.alert(usadosArray);


function random(){
var repe=true;
    while (repe != false) {
 var cantidadDeClaves = (Object.keys(jsonJuego).length-2); 
     numero=Math.floor(Math.random()*(cantidadDeClaves+1));

   // window.alert("salio el numero"+ numero);
      
        repe = repetido(numero);
}
usadosArray.push(numero);
 iniciar(numero);
}
    
    
    
   
 
   



function repetido(num){
var repe=false;
var j;
    //window.alert(" usados" + usadosArray.length);
    for (j=0;j<=3; j++) {

    
if (num == usadosArray[j]) {
repe = true;
//window.alert("esta repetido");
}
}
return repe;
}


function iniciar(numero) {
    document.getElementById("question").innerHTML = jsonJuego["preguntas"][numero]["pregunta"];
    document.getElementById("opcion1").innerHTML = jsonJuego["preguntas"][numero]["respuestas"][0];
    document.getElementById("opcion2").innerHTML =jsonJuego["preguntas"][numero]["respuestas"][1];
    document.getElementById("opcion3").innerHTML = jsonJuego["preguntas"][numero]["respuestas"][2];
    document.getElementById("opcion4").innerHTML = jsonJuego["preguntas"][numero]["respuestas"][3];
}

function verRespuesta() {
// window.alert("el numero es : "+ numero);
  //  window.alert(jsonJuego["preguntas"][numero]["respuestas"][0]);
    //window.alert(jsonJuego["preguntas"][numero]["correctas"][0]);
    if (document.getElementById("o1").checked && jsonJuego["preguntas"][numero]["respuestas"][0] == jsonJuego["preguntas"][numero]["correctas"][0]) {
        respuestasCorrectas++;
    //window.alert("correcta"+ respuestasCorrectas);
  
                  }
 
       if (document.getElementById("o2").checked && jsonJuego["preguntas"][numero]["respuestas"][1] == jsonJuego["preguntas"][numero]["correctas"][0]) {
        respuestasCorrectas++;
        //window.alert("correcta"+ respuestasCorrectas);
    }
 
    if (document.getElementById("o3").checked && jsonJuego["preguntas"][numero]["respuestas"][2] == jsonJuego["preguntas"][numero]["correctas"][0]) {
        respuestasCorrectas++;
      //  window.alert("correcta"+ respuestasCorrectas);
 
    }
    if (document.getElementById("o4").checked && jsonJuego["preguntas"][numero]["respuestas"][3] == jsonJuego["preguntas"][numero]["correctas"][0]) {
        respuestasCorrectas++;
       // window.alert("correcta"+ respuestasCorrectas);
    }
    i++;
  // window.alert("muestra i : " + i);
    if (jsonJuego["cantidadAPreguntar"] ==i) {
      
    document.write("<body style='background-color:skyblue;border: solid;border-color: black;'>");
        document.write("<div style='color:black;text-align: center;font-size:35pt;background-color: coral;border: solid;border-color: black;'>Respuestas Correctas: " +respuestasCorrectas + "<\div>"  );
      document.write( "<button class='boto' onclick='location.reload()' style='margin-top:80px; border: solid;border-color: black; width: 20%;'  >Reiniciar</button>");
      //  window.alert("entro aca");
    }else{
   
    random();
   
}
}


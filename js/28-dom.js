'use strict'

//DOM Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); //para seleccionar como si llamaar de css
caja.innerHTML = "TExto que se remplaza desde js";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.className = "hola";
//console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
//console.log(todosLosDivs);

/*
var contenidoEnTexto = todosLosDivs[2]; //.textContent muestra en consola la info que trae el div
contenidoEnTexto.innerHTML = "innerHTML insertando nuevo contenido en 2do div";
contenidoEnTexto.style.background = "#761adcd6";
console.log(contenidoEnTexto);
*/

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p");	
		var texto = document.createTextNode(todosLosDivs[valor].textContent);	
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}

seccion.append(hr);

//Conseguir elementos por su clase css 
/* En este caso estamos pidiendo que reconozca los div de clase 'rojo',
el if los recorre y si corresponde a rojo, los pinta de ese color
*/


var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = "red";
	}
}



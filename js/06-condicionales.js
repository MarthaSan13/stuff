'use strict'

// Condicional IF

var edad1 =72;
var edad2 =42;

if(edad1 > edad2){
	console.log("Edad 1 es mayor");
}else {
	console.log("La edad 1 es inferior");
}

var edad =40;
var nombre = "David perez";

if(edad >= 18 ){
	console.log(nombre + " tiene " +edad+ ", Es mayor de edad");

	if (edad <= 33){
		console.log(nombre + " tiene " +edad+ ", Es mayor de edad y todavia es milenial");
	}else if(edad >= 70){
		console.log("Es de la tercera edad");
	} else {
		console.log("Ya no eres milenial");
	}


}else {
	console.log(nombre + " tiene " +edad+ ", Es menor de edad");
}

/* Operadores lógicos 
AND && 
OR ||
NEGACION !
*/

var year =2008;

// ! 
if(year != 2016){
	console.log("Año no es 2016");
}


// &&
if(year >= 2000 && year <= 2020 && year != 2018){
	console.log("Estamos en la era actual");
}else {console.log("Estamos en la era post");}


// ||
if(year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año acaba en 8");
}else {
	console.log("El año no esta registrado");
}

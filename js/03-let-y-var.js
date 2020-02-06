'use strict'

// Prueba con Var
var numero = 40;
console.log(numero); //valor 40

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

// Prueba con let

var texto = "curso";
console.log(texto);

if(true){
	let texto = "Curso JS"; // Crea o modifica la variable local, a nivel de bloque
	console.log(texto);
} 

console.log(texto);
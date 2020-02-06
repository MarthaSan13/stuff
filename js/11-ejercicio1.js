'use strict'

/* Programa q pida 2 numeros y que nos diga cual es mayor
el menor y si son iguales, si lo digitado no es un numero 
o son menos o iguales a 0, pedir q lo vuelva a digitar*/

var num1 = Number(prompt("Ingrese el primer numero", 0)); //o parseInt tambien sirve para convertirlo a numero entero
var num2 = Number(prompt("Ingrese el segundo numero", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){ //con while pide comprobar si lo digitado es correcto y solo deja pasar al if de operacion de ambos digitos son number
	alert("Introduzca un numero valido");
	num1 = Number(prompt("Ingrese el primer numero", 0)); //o parseInt tambien sirve para convertirlo a numero entero
	num2 = Number(prompt("Ingrese el segundo numero", 0));
}

 if(num1 > num2){
		console.log("El 1er numero "+num1+" es mayor"); 
	} else if(num1 < num2){
		console.log("El 2do numero "+num2+" es mayor");
	} else if(num1 == num2){
		console.log("los numeros son iguales");
	} 

console.log(num1, num2);



/*
if(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){ //Asi solo lo pide los numeros una vez 
	console.log("Introduzca un numero valido");
} else if(num1 > num2){
		console.log("El 1er numero "+num1+" es mayor"); 
	} else if(num1 < num2){
		console.log("El 2do numero "+num2+" es mayor");
	} else if(num1 == num2){
		console.log("los numeros son iguales");
	} 

//console.log(typeof num1);
*/
//con while



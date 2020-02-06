'use strict'

// Switch

var edad =8;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Eres un adulto";
	break;	
	case 40:
		imprime = "Crisis de los 40";
	break;
	case 75:
		imprime = "Eres de la 3ra edad";
	break;
	default:
		imprime = "Tu edad es neutra";
	break;
}	
console.log(imprime);
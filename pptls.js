function OMachine(min, max)
{
	var n = Math.floor( Math.random() * (max + 1));
	return n;
}

var papel = 0;
var piedra = 1;
var tijera = 2;
var lagarto = 3;
var spoke = 4;

var user;
var machine;

var opcion = ["Papel", "Piedra", "Tijera", "Lagarto", "Spoke"];
	
 user = prompt("Elige una opción: \n Papel - 0 \n Piedra - 1 \n Tijera - 2 \n Lagarto - 3 \n Spoke - 4 ", 0);
 machine = OMachine(0,4);

 if(user >=0 && user <= 4){

 	alert("Opción usuario: " + opcion[user]);
 	alert("Opción machine: " + opcion[machine]);


	 if(opcion[user] == "Papel"){
	 	if (opcion[machine] == "Papel") {
	 		alert("Empate!");
	 	}
	 	if(opcion[machine] == "Piedra" || opcion[machine] == "Spoke"){
	 		alert("Ganaste!!! (: ");
	 	}
	 	if(opcion[machine] == "Tijera" || opcion[machine] == "Lagarto"){
	 		alert("Perdiste :( ");
	 	}
	 }

	 if(opcion[user] == "Piedra"){
	 	if (opcion[machine] == "Piedra") {
	 		alert("Empate!");
	 	}
	 	if(opcion[machine] == "Lagarto" || opcion[machine] == "Tijera"){
	 		alert("Ganaste!!! (: ");
	 	}
	 	if(opcion[machine] == "Papel" || opcion[machine] == "Spoke"){
	 		alert("Perdiste :( ");
	 	}
	 }

	  if(opcion[user] == "Tijera"){
	 	if (opcion[machine] == "Tijera") {
	 		alert("Empate!");
	 	}
	 	if(opcion[machine] == "Lagarto" || opcion[machine] == "Papel"){
	 		alert("Ganaste!!! (: ");
	 	}
	 	if(opcion[machine] == "Piedra" || opcion[machine] == "Spoke"){
	 		alert("Perdiste :( ");
	 	}
	 }

	  if(opcion[user] == "Lagarto"){
	 	if (opcion[machine] == "Lagarto") {
	 		alert("Empate!");
	 	}
	 	if(opcion[machine] == "Spoke" || opcion[machine] == "Papel"){
	 		alert("Ganaste!!! (: ");
	 	}
	 	if(opcion[machine] == "Piedra" || opcion[machine] == "Tijera"){
	 		alert("Perdiste :( ");
	 	}
	 }

	 if(opcion[user] == "Spoke"){
	 	if (opcion[machine] == "Spoke") {
	 		alert("Empate!");
	 	}
	 	if(opcion[machine] == "Tijera" || opcion[machine] == "Piedra"){
	 		alert("Ganaste!!! (: ");
	 	}
	 	if(opcion[machine] == "Lagarto" || opcion[machine] == "Papel"){
	 		alert("Perdiste :( ");
	 	}
	 }
}
else {
	alert("Elige una opcion valida");
}
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista"

var paciente =  document.querySelectorAll(".paciente")
for(var i=0; i < paciente.length;i++){
	console.log(paciente[i])//parei aqui 
}
var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura =tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

/*console.log("Peso: " + tdPeso)
console.log("Altura: " + tdAltura)
console.log("IMC :" + imc)*/

//--validação--
var pesoValido = true;
var alturaValida = true;

if(peso < 0 || peso > 800){
	console.log("Peso inválido!");
	tdImc.textContent = "Peso inválido!"
	pesoValido = false
}
if(altura < 0 || altura > 10){
	console.log("Altura inválida")
	tdImc.textContent = "Altura inválida!"
	alturaValida = false;
}
if(alturaValida && pesoValido){
	var imc =  peso/(altura * altura)
	paciente.querySelector(".info-imc").textContent = imc;
}else{
	tdImc.textContent= "Altura e/ou peso inválidos!"
}



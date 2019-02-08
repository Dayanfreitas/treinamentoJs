var title = document.querySelector(".title");
title.textContent = "Pâmela Piscóloga (Nutricionista)"

var pacientes =  document.querySelectorAll(".paciente")
for(var i=0; i < pacientes.length;i++){
	//console.log(pacientes[i]); 
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura");
	var altura =tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");

	//--validação--
	var pesoValido = true;
	var alturaValida = true;
	
	if(peso < 0 || peso > 800){
		console.log("Peso inválido!");
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}
	if(altura < 0 || altura > 10){
		console.log("Altura inválida")
		alturaValida = false;
		tdImc.textContent = "Altura inválida!"
		paciente.classList.add(".paciente-invalido");
	}
	if(alturaValida && pesoValido){
		var imc =  peso/(altura * altura)
		paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}
}
//Evento 
/*title.addEventListener("click", function(){
	console.log("Olá eu sou uma função anonima")
})*/
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	event.preventDefault();
	var form = document.querySelector("#forme-adiciona"); 
	
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");
	
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
})




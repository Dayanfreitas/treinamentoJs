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



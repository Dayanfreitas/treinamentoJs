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
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);
	
	if(!pesoValido){
		console.log("Peso inválido!");
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}
	if(!alturaValida){
		console.log("Altura inválida")
		alturaValida = false;
		tdImc.textContent = "Altura inválida!"
		paciente.classList.add(".paciente-invalido");
	}
	if(alturaValida && pesoValido){
		var imc =  calcularImc(peso,altura)
		paciente.querySelector(".info-imc").textContent = imc;
		
		var dado = verificaStatus(imc)
		paciente.appendChild(montaTd(dado,"info-status"))	
		
	}
}
function validaPeso(peso){
	if(peso >= 0 && peso < 1000){return true;}
	else{return false;}
}
function validaAltura(altura){
	if(altura >=0 && altura  <=3.0 ){return true}
	else{return false}
}
function calcularImc(peso,altura){
	var imc =  peso/(altura * altura)
	return imc.toFixed(2)
}
function verificaStatus(imc){
	var msg = ""
	if(imc <= 18.5){
		msg = "Abaixo do peso"
	}else if(imc >= 18.6 && imc <=24.9 ){
		msg = "Peso ideal"
	}else if(imc >= 25 && imc <= 29.9){
		msg = "Levemente acima do peso"
	}else if(imc >= 30 && imc <=34.9){
		msg = "Obesidade grau I"
	}else if(imc >=35 && imc <=39.9){
		msg = "Obesidade grau II"
	}else{
		msg = "Obesidade grau III"
	}
	return msg
}
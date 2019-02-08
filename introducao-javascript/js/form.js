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




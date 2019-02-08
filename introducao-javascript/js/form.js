//Evento 
/*title.addEventListener("click", function(){
	console.log("Olá eu sou uma função anonima")
})*/

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	event.preventDefault();
  
    var form = document.querySelector("#forme-adiciona"); 
    var paciente = obterPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
  
    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
  
    form.reset();
})
function obterPacienteDoFormulario(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calcularImc(form.peso.value,form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);
    return td;
}
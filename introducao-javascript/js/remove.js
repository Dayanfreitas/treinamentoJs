var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes")
tabela.addEventListener("dblclick",function(){
		event.target.parentNode.remove();
		
		/*var alvoEvento = event.target;
		var paiDoAlvo  = alvoEvento.parentNode;
		paiDoAlvo.remove();*/
})
/*acientes.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(){
		this.remove();
	})
})*/
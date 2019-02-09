var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes")
tabela.addEventListener("dblclick",function(event){
		var op = confirm("Confirma excluir?");
		console.log(op)	
		validaExclusao(op,event)
		
		/*var alvoEvento = event.target;
		var paiDoAlvo  = alvoEvento.parentNode;
		paiDoAlvo.remove();*/
})
function validaExclusao(op,event){
	if(op){
		event.target.parentNode.classList.add("fadeOut");
		setTimeout(function(){
			event.target.parentNode.remove();
		}, 500);
	}else{return;}
}
/*acientes.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(){
		this.remove();
	})
})*/
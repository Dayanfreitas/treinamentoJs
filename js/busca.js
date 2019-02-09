//requisição ajax
var botaoAdd = document.querySelector("#buscar-paciente")
botaoAdd.addEventListener("click",function(){
	console.log("Buscando pacientes...");
	var tipo = "GET";
	var endereço = "https://api-pacientes.herokuapp.com/pacientes";
	
	var xhr = new XMLHttpRequest();
	xhr.open(tipo,endereço)
	xhr.addEventListener("load",function(){
	var erroAjax = document.querySelector("#erro-ajax");

	if(xhr.status == 200){
			erroAjax.classList.add("some")
			
			var resposta = xhr.responseText
			var paciente =  JSON.parse(resposta)
			paciente.forEach(function(i){
			addPacienteNaTabela(i)
			});
		}else{
			erroAjax.classList.remove("some")
			erroAjax.style.color="red"
			console.log(xhr.status)
			console.logs(xhr.responseText)
			
		}
	})
	xhr.send()
})

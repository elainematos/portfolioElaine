//função para mostrar nome digitado
window.addEventListener("load", carregarNome)
function carregarNome() {
    var nome = localStorage.getItem("nome")
    //console.log(nome)
    document.getElementById("recebeNome").innerHTML = nome;
}


//Função para recolher menu

function recolheMenu() {
	var recolhe = document.getElementById('menu');

	if (recolhe.style.display == 'block') {
		recolhe.style.display = 'none'
	} else {
		recolhe.style.display = "block"
	}
}

//Função para subir a tela ao topo
function subiraoTopo() {
	window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}



//posição do linkSobre
/*const p = document.querySelector("#sobre");
const posicoes = p.getBoundingClientRect();
console.log(posicoes);*/

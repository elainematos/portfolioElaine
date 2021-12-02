var nomeDigitado = "";
var nomeInput = document.getElementById("nome");
nomeInput.addEventListener("change", digitouNome)

function digitouNome(event){
    //console.log(event);
    nomeDigitado = event.target.value;
    //console.log(nomeDigitado);
    localStorage.setItem("nome", nomeDigitado)
    /*nomeDigitado = document.getElementById("nome").value;
        if(nomeDigitado == ""){
            alert("Você não digitou seu nome!");
        }else {
            document.getElementById("recebeNome").innerHTML = nomeDigitado;
               

        }*/
        //document.getElementById("nome").value = "";
        

};


 





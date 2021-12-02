var nomes = ["Luffy","Sanji","Zoro","Ace","Nami","Robin","Usopp","Chopper","Brook","Franky","Vivi","Karoo","Corazon","Law","Doflamingo"];
var num = ""

function aleatorio() {
   num = parseInt(Math.floor(Math.random() * 15));
   document.getElementById("nome").innerHTML = nomes[num];
}

function compara(){
  var digitado = parseInt(document.getElementById("texto").value);
  if(digitado == (num+1)){
   document.getElementById("resultado").innerHTML = "Acertou Miseravi";

  }
  else{
  document.getElementById("resultado").innerHTML = "Errou Abestado";
     
    
  }
  document.getElementById("texto").value = "";
 
  document.getElementById("nome").innerHTML = "";
  
  
}
   
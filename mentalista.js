var numSorteado="";
var tentativas = 3;

  function sortear() {
  numSorteado = parseInt(Math.floor(Math.random() * 10));
   /*document.getElementById("numAleatorio").innerHTML = numSorteado;*/
   alert("Número Sorteado! Digite um número!")
   

}

  function compara() { 
    
    while (tentativas > 0) { 
        /*if(numSorteado == isNaN()) {
            alert("Digite um número!")
            break;
        
        
        };*/
        
       
        var digitado = parseInt(document.getElementById("digito").value);
        if(numSorteado == digitado){
           document.getElementById("resultado").innerHTML = "Acerto Miseravi!" + " " + "Sorteie outro número!";  
         tentativas = 3;
       break;

     }else if (digitado > numSorteado){
           document.getElementById("resultado").innerHTML = "O número sorteado é menor";
      tentativas = tentativas -1;
         break;
       
     }else if (digitado < numSorteado){
           document.getElementById("resultado").innerHTML = "O número sorteado é maior";
       tentativas = tentativas -1;
       break;
       
    } 
  };
   
      if (tentativas==0) {
       document.getElementById("resultado").innerHTML = "Suas tentativas acabaram. O número sorteado era"  + " " + numSorteado + " - " + "Sorteie outro número!";  
       limpar();
     
      }
        
 }; 
 function limpar() {
  document.getElementById("digito").value = "";
  document.getElementById("resultado").value = "";
}
 
 

 


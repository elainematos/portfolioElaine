<?php
//verificação
if(isset($_POST['email']) && !empty($_POST['email'])){
//variaveis
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']); 
$mensagem = addslashes($_POST['mensagem']);

//dados do envio
$para = "nanymatos22@gmail.com";
$assunto = "Contato portifólio";
$corpoMensagem = "Nome:".$nome. "\r\n".
                 "Email:".$email."\r\n".
                 "Mensagem:".$mensagem;

$header = "From:nany.sara@hotmail.com"."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$corpoMensagem,$header)) {
    echo("Email enviado com sucesso!");
}else {
    echo("O email nãopode ser enviado");
}

}

?>
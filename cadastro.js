const formulario = document.getElementById("formulario");
const nome = document.getElementById("inome");
const email = document.getElementById("imail");
const senha = document.getElementById("isenha1");
const confirma = document.getElementById("iconfsen");
const mensagem = document.querySelector(".mensagem")

formulario.onsubmit = evento => {
    if (nome.value == ""){
        mensagem.innerHTML = "Digite seu nome";
        evento.preventDefault();
        return null;
    }
    if (email.value == ""){
        mensagem.innerHTML = "Digite se e-mail";
        evento.preventDefault();
        return null;
    }
    if (senha.value == ""){
        mensagem.innerHTML = "Digite sua senha";
        evento.preventDefault();
        return null;
    }
    if (confirma.value == ""){
        mensagem.innerHTML = "Confirme sua senha";
        evento.preventDefault();
        return null;
    } 
    if (senha.value != confirma.value){
        mensagem.innerHTML = "As senhas devem ser iguais";
        evento.preventDefault();
        return null;
    }
    let dados =  JSON.parse(localStorage.getItem("dados")) || [];
   dados.push({
    nome : nome.value,
    email : email.value,
    senha : senha.value
   })

   localStorage.setItem("dados", JSON.stringify(dados));
   evento.preventDefault();
   mensagem.innerHTML="<p> Parabéns Cadastro feito com sucesso </p>";
   setTimeout(()=>{
    window.location.assign("entrar.html");
   }, 2000);
}
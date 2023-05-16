const mensagem = document.querySelector("mensagem");
const email = document.getElementById("imail");
const senha = document.getElementById("isenha1");
const conf = document.getElementById("iconfsen");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("base"));

    dados.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha == senha.value) {
            evento.preventDefault();
            return true;
        } else {
            mensagem.innerHTML ="Senha ou E-mail Incorreto"
        }
    });
}
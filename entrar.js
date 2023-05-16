const fomulario = document.getElementById("formulario");
const usuario = document.getElementById("iuser");
const senha = document.getElementById("senhhaa");
const mensagem = document.querySelector(".mensagem");

formulario.onsubmit = evento => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email == usuario.value && elemento.senha == senha.value) {
        
            evento.preventDefault();
            mensagem.innerHTML ="Logado";
            setTimeout(()=>{
                 window.location.assign("catalogo.html");
                }, 1000);

            return true;
            
        } else {
            evento.preventDefault();
            mensagem.innerHTML ="Senha ou E-mail Incorreto";
        }
    });
}
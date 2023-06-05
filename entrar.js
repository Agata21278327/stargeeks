const fomulario = document.getElementById("formulario");
const email = document.getElementById("iemail");
const senha = document.getElementById("senhhaa");
const mensagem = document.querySelector(".mensagem");

formulario.onsubmit = evento => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha == senha.value) {
            mensagem.innerHTML ="Logado";
        
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
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
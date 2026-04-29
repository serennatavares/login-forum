document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";

    if (usuario.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Nome de usuário muito curto!</p></div>";
        return;
    }
    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta!</p></div>";
        return;
    }
    if (usuario === "") {
        mensagem.innerHTML = "<div class='erro'><p> Campo obrigatório! </p></div>";
        return;

    }
    if (senha === "") {
        mensagem.innerHTML = "<div class='erro'><p> Campo obrigatório! </p></div>";
        return;

    }

    document.getElementById("form-login").reset();
    window.location.href = "home.html";
}
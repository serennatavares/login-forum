document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p> Email Invalido !</p></div>";
        return;

    }
    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta !</p></div>";
        return;
    }
    if (email === ""){
        

    }


    document.getElementById("form-login").reset();
}
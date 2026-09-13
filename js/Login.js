document.addEventListener("DOMContentLoaded", function () {

    const openLogin = document.getElementById("openLogin");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("CloseLogin");
    const loginForm = document.getElementById("loginForm");

    // Verificar se os elementos existem
    if (!openLogin || !loginModal || !closeLogin || !loginForm) {
        console.error("Erro: elementos do login não foram encontrados.");
        return;
    }

    // Abrir modal de login
    openLogin.addEventListener("click", function (event) {

        event.preventDefault();

        loginModal.classList.add("active");

    });

    // Fechar pelo X
    closeLogin.addEventListener("click", function () {

        loginModal.classList.remove("active");

    });

    // Fechar clicando fora do modal
    loginModal.addEventListener("click", function (event) {

        if (event.target === loginModal) {

            loginModal.classList.remove("active");

        }

    });
});

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document
        .getElementById("loginEmail")
        .value
        .trim();

    const senha = document
        .getElementById("loginSenha")
        .value
        .trim();


    // Buscar utilizadores cadastrados
    const utilizadores = JSON.parse(
        localStorage.getItem("utilizadores")
    ) || [];


    // Procurar utilizador
    const utilizador = utilizadores.find(function (u) {

        return (
            u.email === email &&
            u.senha === senha
        );

    });


    // Login inválido
    if (!utilizador) {

        alert("Email ou palavra-passe incorrectos.");

        return;
    }


    // Guardar utilizador logado
    localStorage.setItem(
        "utilizadorLogado",
        JSON.stringify(utilizador)
    );


    // Mensagem de boas-vindas
    alert(
        "Bem-vindo ao MozTrip, " +
        utilizador.nome +
        "!"
    );


    // Limpar formulário
    loginForm.reset();


    // Fechar modal
    loginModal.classList.remove("active");


    // Actualizar o menu sem sair da página
    const userName =
        document.getElementById("userName");

    const userMenu =
        document.getElementById("userMenu");

    const openLogin =
        document.getElementById("openLogin");

    const openRegister =
        document.getElementById("openRegister");


    if (userName) {
        userName.textContent =
            utilizador.nome;
    }

    if (userMenu) {
        userMenu.style.display = "block";
    }

    if (openLogin) {
        openLogin.style.display = "none";
    }

    if (openRegister) {
        openRegister.style.display = "none";
    }

});
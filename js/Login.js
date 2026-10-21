
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTOS DO LOGIN
    const openLogin = document.getElementById("openLogin");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("CloseLogin");
    const loginForm = document.getElementById("loginForm");

    // ELEMENTOS DA RECUPERAÇÃO
    const linkEsqueciSenha = document.getElementById("esqueciSenha");
    const modalRecuperacao = document.getElementById("recuperarSenhaModal");
    const fecharRecuperacao = document.getElementById("fecharRecuperacao");
    const voltarAoLogin = document.getElementById("voltarAoLogin");
    const formularioRecuperacao = document.getElementById("recuperarSenhaForm");

    // ABRIR LOGIN
    if (openLogin && loginModal) {
        openLogin.addEventListener("click", function (event) {
            event.preventDefault();
            loginModal.classList.add("active");
        });
    }

    // FECHAR LOGIN
    if (closeLogin && loginModal) {
        closeLogin.addEventListener("click", function () {
            loginModal.classList.remove("active");
        });
    }

    // FECHAR LOGIN AO CLICAR FORA
    if (loginModal) {
        loginModal.addEventListener("click", function (event) {
            if (event.target === loginModal) {
                loginModal.classList.remove("active");
            }
        });
    }

    // PROCESSAR LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const senha = document.getElementById("loginSenha").value;

            let utilizadores = [];

            try {
                utilizadores = JSON.parse(localStorage.getItem("utilizadores")) || [];
            } catch (erro) {
                alert("Não foi possível consultar as contas registadas.");
                return;
            }

            const utilizador = utilizadores.find(function (u) {
                return u.email &&
                    u.email.trim().toLowerCase() === email &&
                    u.senha === senha;
            });

            if (!utilizador) {
                alert("Email ou palavra-passe incorrectos.");
                return;
            }

            localStorage.setItem("utilizadorLogado", JSON.stringify(utilizador));

            alert("Bem-vindo ao MozTrip, " + (utilizador.nome || utilizador.email) + "!");

            loginForm.reset();
            loginModal.classList.remove("active");

            const userName = document.getElementById("userName");
            const userMenu = document.getElementById("userMenu");
            const botaoLogin = document.getElementById("openLogin");
            const botaoRegisto = document.getElementById("openRegister");

            if (userName) {
                userName.textContent = utilizador.nome || utilizador.email;
            }

            if (userMenu) userMenu.style.display = "block";
            if (botaoLogin) botaoLogin.style.display = "none";
            if (botaoRegisto) botaoRegisto.style.display = "none";
        });
    }

    // ABRIR RECUPERAÇÃO DA PALAVRA-PASSE
    if (linkEsqueciSenha && modalRecuperacao) {
        linkEsqueciSenha.addEventListener("click", function (event) {
            event.preventDefault();

            if (loginModal) {
                loginModal.classList.remove("active");
            }

            modalRecuperacao.classList.add("active");
        });
    } else {
        console.error(
            "Não foi encontrado o link #esqueciSenha ou o modal #recuperarSenhaModal."
        );
    }

    // FECHAR RECUPERAÇÃO
    if (fecharRecuperacao && modalRecuperacao) {
        fecharRecuperacao.addEventListener("click", function () {
            modalRecuperacao.classList.remove("active");
        });
    }

    // VOLTAR AO LOGIN
    if (voltarAoLogin && modalRecuperacao && loginModal) {
        voltarAoLogin.addEventListener("click", function (event) {
            event.preventDefault();
            modalRecuperacao.classList.remove("active");
            loginModal.classList.add("active");
        });
    }

    // FECHAR RECUPERAÇÃO AO CLICAR FORA
    if (modalRecuperacao) {
        modalRecuperacao.addEventListener("click", function (event) {
            if (event.target === modalRecuperacao) {
                modalRecuperacao.classList.remove("active");
            }
        });
    }

    // ALTERAR PALAVRA-PASSE
    if (formularioRecuperacao) {
        formularioRecuperacao.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("emailRecuperacao").value.trim().toLowerCase();
            const novaSenha = document.getElementById("novaSenha").value;
            const confirmarNovaSenha = document.getElementById("confirmarNovaSenha").value;

            if (novaSenha.length < 8) {
                alert("A palavra-passe deve ter pelo menos 8 caracteres.");
                return;
            }

            if (novaSenha !== confirmarNovaSenha) {
                alert("As palavras-passe não coincidem.");
                return;
            }

            let utilizadores = [];

            try {
                utilizadores = JSON.parse(localStorage.getItem("utilizadores")) || [];
            } catch (erro) {
                alert("Não foi possível consultar as contas registadas.");
                return;
            }

            const utilizador = utilizadores.find(function (u) {
                return u.email &&
                    u.email.trim().toLowerCase() === email;
            });

            if (!utilizador) {
                alert("Não foi encontrada uma conta com esse email.");
                return;
            }

            utilizador.senha = novaSenha;

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores));

            alert("Palavra-passe alterada. Já pode entrar com a nova palavra-passe.");

            formularioRecuperacao.reset();
            modalRecuperacao.classList.remove("active");

            if (loginModal) {
                loginModal.classList.add("active");
            }

            document.getElementById("loginEmail").value = email;
            document.getElementById("loginSenha").value = "";
        });
    }

});

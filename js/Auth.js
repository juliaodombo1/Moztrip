const utilizadorLogado =
    JSON.parse(
        localStorage.getItem("utilizadorLogado")
    );

if (utilizadorLogado) {

    console.log(
        "Utilizador autenticado:",
        utilizadorLogado
    );

}


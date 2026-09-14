document.addEventListener("DOMContentLoaded", () => {

    const utilizador = JSON.parse(
        localStorage.getItem("utilizadorLogado")
    );

    if (utilizador) {

        const nome =
            utilizador.nome ||
            utilizador.nomeEmpresa ||
            utilizador.nomeHotel ||
            "Turista";

        const nomeTurista =
            document.getElementById("nomeTurista");

        const saudacaoTurista =
            document.getElementById("saudacaoTurista");

        if (nomeTurista) {
            nomeTurista.textContent = nome;
        }

        if (saudacaoTurista) {
            saudacaoTurista.textContent = nome;
        }
    }

});
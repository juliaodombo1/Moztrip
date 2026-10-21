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

/** publicar experiencia */

const botoesPublicar =
    document.querySelectorAll(".btn-publicar");

const modal =
    document.getElementById("modalExperiencia");

const fecharModal =
    document.getElementById("fecharModal");

    
const preview =
    document.getElementById("previewFicheiros");


// Abrir modal
botoesPublicar.forEach(botao => {

    botao.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});


// Fechar modal
fecharModal.addEventListener("click", () => {

    modal.style.display = "none";

});










function actualizarContadorExperiencias() {
    const contador = document.getElementById("totalExperiencias");

    // Verifica se o contador existe nesta página
    if (!contador) return;

    // Vai buscar as experiências guardadas
    let experiencias = [];

    try {
        experiencias = JSON.parse(
            localStorage.getItem("experiencias")
        ) || [];
    } catch (erro) {
        console.error("Erro ao ler experiências:", erro);
    }

    // Vai buscar o utilizador autenticado
    let utilizador = null;

    try {
        utilizador = JSON.parse(
            localStorage.getItem("utilizadorLogado")
        );
    } catch (erro) {
        console.error("Erro ao ler utilizador:", erro);
    }

    // Sem utilizador autenticado, não conta publicações
    if (!utilizador) {
        contador.textContent = "0";
        return;
    }

    // Compara o email do utilizador com o email da publicação
    const emailUtilizador = utilizador.email?.toLowerCase();

    const minhasExperiencias = experiencias.filter(experiencia => {
        return experiencia.email?.toLowerCase() === emailUtilizador;
    });

    // Actualiza o cardgit
    contador.textContent = minhasExperiencias.length;
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorExperiencias();
});
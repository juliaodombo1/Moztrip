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

const inputFicheiros =
    document.getElementById("ficheirosExperiencia");

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


// Preview de fotos e vídeos
inputFicheiros.addEventListener("change", () => {

    preview.innerHTML = "";

    [...inputFicheiros.files].forEach(ficheiro => {

        const url =
            URL.createObjectURL(ficheiro);

        if (
            ficheiro.type.startsWith("image/")
        ) {

            const img =
                document.createElement("img");

            img.src = url;

            preview.appendChild(img);

        }

        else if (
            ficheiro.type.startsWith("video/")
        ) {

            const video =
                document.createElement("video");

            video.src = url;

            video.controls = true;

            preview.appendChild(video);

        }

    });

});
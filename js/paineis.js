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




// ==========================================
// PUBLICAR EXPERIÊNCIA
// ==========================================

const formExperiencia =
    document.getElementById("formExperiencia");

if (formExperiencia) {

    formExperiencia.addEventListener("submit", function (event) {

        event.preventDefault();

        const titulo =
            document.getElementById("tituloExperiencia").value.trim();

        const descricao =
            document.getElementById("descricaoExperiencia").value.trim();

        const utilizador =
            JSON.parse(
                localStorage.getItem("utilizadorLogado")
            );

        // Verificar se existe utilizador
        if (!utilizador) {

            alert("Precisa estar autenticado para publicar.");

            return;
        }

        // Recuperar experiências existentes
        let experiencias =
            JSON.parse(
                localStorage.getItem("experiencias")
            ) || [];

        // Criar nova experiência
        const novaExperiencia = {

            id: Date.now(),

            titulo: titulo,

            descricao: descricao,

            autor:
                utilizador.nome ||
                utilizador.nomeEmpresa ||
                utilizador.nomeHotel ||
                utilizador.email ||
                "Turista",

            email: utilizador.email || "",

            data: new Date().toLocaleString("pt-PT"),

            ficheiros: []

        };

        // Guardar experiência
        experiencias.push(novaExperiencia);

        localStorage.setItem(
            "experiencias",
            JSON.stringify(experiencias)
        );

        alert("Experiência publicada com sucesso!");

        // Limpar formulário
        formExperiencia.reset();

        preview.innerHTML = "";

        // Fechar modal
        modal.style.display = "none";

        // Atualizar experiências do painel
        carregarMinhasExperiencias();

    });

}

function carregarMinhasExperiencias() {

    const container =
        document.querySelector(".experiencias-section");

    if (!container) {
        return;
    }

    const utilizador =
        JSON.parse(
            localStorage.getItem("utilizadorLogado")
        );

    if (!utilizador) {
        return;
    }

    const experiencias =
        JSON.parse(
            localStorage.getItem("experiencias")
        ) || [];

    const emailUtilizador =
        utilizador.email;

    const minhasExperiencias =
        experiencias.filter(
            experiencia =>
                experiencia.email === emailUtilizador
        );

    const vazio =
        container.querySelector(".experiencias-vazio");

    // Se não houver experiências
    if (minhasExperiencias.length === 0) {

        if (vazio) {
            vazio.style.display = "block";
        }

        return;
    }

    // Esconder estado vazio
    if (vazio) {
        vazio.style.display = "none";
    }

    // Criar container
    let lista =
        document.getElementById(
            "minhasExperiencias"
        );

    if (!lista) {

        lista =
            document.createElement("div");

        lista.id =
            "minhasExperiencias";

        container.appendChild(lista);
    }

    lista.innerHTML = "";

    minhasExperiencias
        .slice()
        .reverse()
        .forEach(experiencia => {

            const card =
                document.createElement("div");

            card.className =
                "experiencia-card";

            card.innerHTML = `

                <div class="experiencia-card-conteudo">

                    <h3>
                        ${experiencia.titulo}
                    </h3>

                    <p>
                        ${experiencia.descricao}
                    </p>

                    <small>
                        Publicado em ${experiencia.data}
                    </small>

                </div>

            `;

            lista.appendChild(card);

        });
}



document.addEventListener(
    "DOMContentLoaded",
    carregarMinhasExperiencias
);

// Obter experiências guardadas
function obterExperiencias() {
    try {
        return JSON.parse(
            localStorage.getItem("experiencias") || "[]"
        );
    } catch (erro) {
        console.error("Erro ao ler experiências:", erro);
        return [];
    }
}

// Mostrar experiências no feed
function carregarExperiencias() {
    const feed = document.getElementById("feedExperiencias");
    const lista = document.getElementById("listaExperiencias");

    const experiencias = obterExperiencias()
        .slice()
        .reverse();

    const destinos = [feed, lista].filter(Boolean);

    destinos.forEach(container => {
        container.innerHTML = "";

        if (experiencias.length === 0) {
            container.innerHTML = `
                <p class="feed-vazio">
                    Ainda não existem experiências publicadas.
                    Sê o primeiro a partilhar!
                </p>
            `;
            return;
        }

        experiencias.forEach(experiencia => {
            const card = document.createElement("article");
            card.className = "feed-experiencia-card";

            const cabecalho = document.createElement("div");
            cabecalho.className = "feed-experiencia-header";

            const avatar = document.createElement("div");
            avatar.className = "feed-avatar";
            avatar.innerHTML = '<i class="fa-solid fa-user"></i>';

            const autorInfo = document.createElement("div");

            const autor = document.createElement("h3");
            autor.textContent = experiencia.autor || "Viajante";

            const data = document.createElement("small");
            data.textContent = experiencia.data || "";

            autorInfo.append(autor, data);
            cabecalho.append(avatar, autorInfo);

            const conteudo = document.createElement("div");
            conteudo.className = "feed-experiencia-conteudo";

            const titulo = document.createElement("h2");
            titulo.textContent = experiencia.titulo || "";

            conteudo.appendChild(titulo);

            if (experiencia.imagem) {
                const imagem = document.createElement("img");
                imagem.src = experiencia.imagem;
                imagem.alt = experiencia.titulo || "Fotografia da experiência";
                imagem.className = "feed-experiencia-imagem";
                imagem.loading = "lazy";

                imagem.addEventListener("error", () => {
                    imagem.remove();
                });

                conteudo.appendChild(imagem);
            }

            const descricao = document.createElement("p");
            descricao.textContent = experiencia.descricao || "";

            conteudo.appendChild(descricao);
            card.append(cabecalho, conteudo);
            container.appendChild(card);
        });
    });
}

// Inicializar formulário e pré-visualização
function inicializarFormularioExperiencia() {
    const form = document.getElementById("formExperiencia");
    const campoImagem = document.getElementById("imagemExperiencia");
    const preview = document.getElementById("previewImagem");
    const mensagem = document.getElementById("mensagemExperiencia");

    // Esta função também é carregada na página principal,
    // onde o formulário pode não existir.
    if (!form || !campoImagem || !preview || !mensagem) return;

    let imagemSelecionada = "";

    campoImagem.addEventListener("change", () => {
        imagemSelecionada = "";
        preview.innerHTML = "";
        mensagem.textContent = "";

        const ficheiro = campoImagem.files[0];
        if (!ficheiro) return;

        if (!ficheiro.type.startsWith("image/")) {
            mensagem.textContent = "Selecciona um ficheiro de imagem válido.";
            campoImagem.value = "";
            return;
        }

        if (ficheiro.size > 2 * 1024 * 1024) {
            mensagem.textContent =
                "A fotografia deve ter no máximo 2 MB.";
            campoImagem.value = "";
            return;
        }

        const leitor = new FileReader();

        leitor.onload = () => {
    imagemSelecionada = leitor.result;

    console.log(
        "Fotografia carregada:",
        imagemSelecionada.startsWith("data:image/")
    );

    const imagem = document.createElement("img");
    imagem.src = imagemSelecionada;
    imagem.alt = "Pré-visualização da fotografia";

    preview.replaceChildren(imagem);
};

        leitor.onerror = () => {
            mensagem.textContent = "Não foi possível ler a fotografia.";
        };

        leitor.readAsDataURL(ficheiro);
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const titulo = document
            .getElementById("tituloExperiencia")
            .value.trim();

        const descricao = document
            .getElementById("descricaoExperiencia")
            .value.trim();

        if (!titulo || !descricao || !imagemSelecionada) {
            mensagem.textContent =
                "Preenche o título, a descrição e selecciona uma fotografia.";
            return;
        }

        // Usar a conta autenticada, se existir
        let utilizador = {};

        try {
            utilizador = JSON.parse(
                localStorage.getItem("utilizadorLogado") || "{}"
            );
        } catch (erro) {
            utilizador = {};
        }

const novaExperiencia = {
    id: Date.now(),

    autor: utilizador.nome || utilizador.email || "Viajante MozTrip",

    // Guardar o email para identificar o dono da publicação
    email: utilizador.email || "",
    autorEmail: utilizador.email || "",

    titulo: titulo,
    descricao: descricao,
    imagem: imagemSelecionada,

    data: new Date().toLocaleDateString("pt-PT")
};

console.log(
    "Fotografia antes de guardar:", 
    Boolean(novaExperiencia.imagem),
    novaExperiencia.imagem?.slice(0, 30)
);

        try {
            const experiencias = obterExperiencias();
            experiencias.push(novaExperiencia);

            localStorage.setItem(
                "experiencias",
                JSON.stringify(experiencias)
            );

            form.reset();
            preview.innerHTML = "";
            imagemSelecionada = "";
            mensagem.textContent = "Experiência publicada com sucesso!";

            carregarExperiencias();
            carregarMinhasExperiencias();
            
        } catch (erro) {
            console.error("Erro ao guardar experiência:", erro);

            mensagem.textContent =
                "Não foi possível guardar. Experimenta uma fotografia menor.";
        }
    });
}



function obterExperienciasDoTurista() {
    let utilizador = {};

    try {
        utilizador = JSON.parse(
            localStorage.getItem("utilizadorLogado") || "{}"
        );
    } catch (erro) {
        console.error("Erro ao ler utilizador:", erro);
    }

    const email = (utilizador.email || "").toLowerCase().trim();
    const nome = (utilizador.nome || "").toLowerCase().trim();

    return obterExperiencias().filter(experiencia => {
        const emailAutor = (experiencia.autorEmail || "")
            .toLowerCase()
            .trim();

        const autor = (experiencia.autor || "")
            .toLowerCase()
            .trim();

        // Preferir a correspondência exacta pelo e-mail
        if (email && emailAutor) {
            return email === emailAutor;
        }

        // Compatibilidade com publicações antigas
        return (email && autor === email) || (nome && autor === nome);
    });
}

function carregarMinhasExperiencias() {
    const lista = document.getElementById("listaExperiencias");
    const vazio = document.getElementById("experienciasVazio");
    const total = document.getElementById("totalExperiencias");

    if (!lista) return;

    const minhas = obterExperienciasDoTurista().slice().reverse();

    if (total) {
        total.textContent = minhas.length;
    }

    lista.innerHTML = "";

    if (vazio) {
        vazio.style.display = minhas.length ? "none" : "block";
    }

    minhas.forEach(experiencia => {
        const card = document.createElement("article");
        card.className = "feed-experiencia-card";

        const imagem = document.createElement("img");
        imagem.className = "feed-experiencia-imagem";
        imagem.src = experiencia.imagem || "";
        imagem.alt = experiencia.titulo || "Fotografia da experiência";

        const conteudo = document.createElement("div");
        conteudo.className = "feed-experiencia-conteudo";

        const titulo = document.createElement("h2");
        titulo.textContent = experiencia.titulo || "";

        const descricao = document.createElement("p");
        descricao.textContent = experiencia.descricao || "";

        const acoes = document.createElement("div");
        acoes.className = "acoes-experiencia";

        const editar = document.createElement("button");
        editar.type = "button";
        editar.textContent = "Editar";
        editar.dataset.acao = "editar";
        editar.dataset.id = experiencia.id;

        const apagar = document.createElement("button");
        apagar.type = "button";
        apagar.textContent = "Apagar";
        apagar.dataset.acao = "apagar";
        apagar.dataset.id = experiencia.id;

        acoes.append(editar, apagar);
        conteudo.append(titulo, descricao, acoes);
        card.append(imagem, conteudo);
        lista.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    carregarExperiencias();
    inicializarFormularioExperiencia();
    carregarMinhasExperiencias();
});
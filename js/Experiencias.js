function carregarFeedExperiencias() {

    const feed =
        document.getElementById(
            "feedExperiencias"
        );

    if (!feed) return;

    const experiencias =
        JSON.parse(
            localStorage.getItem(
                "experiencias"
            )
        ) || [];


        const novaExperiencia = {

    id: Date.now(),

    autor:
        utilizador.nome ||
        utilizador.email,

    titulo,

    descricao,

    data:
        new Date()
        .toLocaleDateString()

};

    feed.innerHTML = "";

    experiencias.reverse().forEach(
        experiencia => {

            feed.innerHTML += `

                <div class="card-experiencia">

                    <strong>
                        ${experiencia.autor}
                    </strong>

                    <h3>
                        ${experiencia.titulo}
                    </h3>

                    <p>
                        ${experiencia.descricao}
                    </p>

                    <small>
                        ${experiencia.data}
                    </small>

                </div>

            `;

        }
    );

}

document.addEventListener(
    "DOMContentLoaded",
    carregarFeedExperiencias
);


function carregarExperiencias() {

    const lista =
        document.getElementById(
            "listaExperiencias"
        );

    if (!lista) return;

    lista.innerHTML = "";

    const experiencias =
        JSON.parse(
            localStorage.getItem(
                "experiencias"
            )
        ) || [];

    experiencias.reverse().forEach(
        experiencia => {

            lista.innerHTML += `

                <div class="card-experiencia">

                    <div class="autor">

                        <i class="fa-solid fa-user"></i>

                        <strong>
                            ${experiencia.autor}
                        </strong>

                    </div>

                    <h3>
                        ${experiencia.titulo}
                    </h3>

                    <p>
                        ${experiencia.descricao}
                    </p>

                    <small>
                        ${experiencia.data}
                    </small>

                </div>

            `;

        }
    );

}

document.addEventListener("DOMContentLoaded", () => {

    const feed =
        document.getElementById("feedExperiencias");

    if (!feed) {
        return;
    }

    const experiencias =
        JSON.parse(
            localStorage.getItem("experiencias")
        ) || [];

    if (experiencias.length === 0) {

        feed.innerHTML = `
            <p class="feed-vazio">
                Ainda não existem experiências publicadas.
            </p>
        `;

        return;
    }

    feed.innerHTML = "";

    experiencias
        .slice()
        .reverse()
        .forEach(experiencia => {

            const card =
                document.createElement("article");

            card.className =
                "feed-experiencia-card";

            card.innerHTML = `

                <div class="feed-experiencia-header">

                    <div class="feed-avatar">

                        <i class="fa-solid fa-user"></i>

                    </div>

                    <div>

                        <h3>
                            ${experiencia.autor}
                        </h3>

                        <small>
                            ${experiencia.data}
                        </small>

                    </div>

                </div>

                <div class="feed-experiencia-conteudo">

                    <h2>
                        ${experiencia.titulo}
                    </h2>

                    <p>
                        ${experiencia.descricao}
                    </p>

                </div>

                <div class="feed-acoes">

                    <button>
                        <i class="fa-regular fa-heart"></i>
                        Gostar
                    </button>

                    <button>
                        <i class="fa-regular fa-comment"></i>
                        Comentar
                    </button>

                    <button>
                        <i class="fa-solid fa-share"></i>
                        Partilhar
                    </button>

                </div>

            `;

            feed.appendChild(card);

        });

});
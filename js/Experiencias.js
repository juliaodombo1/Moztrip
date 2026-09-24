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
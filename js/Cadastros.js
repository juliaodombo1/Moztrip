
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // ELEMENTOS
    // ==============================

    const openRegister =
        document.getElementById("openRegister");

    const registarModal =
        document.getElementById("registarModal");

    const closeRegister =
        document.getElementById("CloseRegister");

    const tipoUsuario =
        document.getElementById("tipoUsuario");

    const camposCadastro =
        document.getElementById("camposCadastro");

    const cadastroForm =
        document.getElementById("cadastroForm");


    // ==============================
    // ABRIR MODAL
    // ==============================

    openRegister.addEventListener("click", function (event) {

        event.preventDefault();

        registarModal.classList.add("active");

        document.body.classList.add("modal-aberto");

    });


    // ==============================
    // FECHAR MODAL
    // ==============================

    closeRegister.addEventListener("click", function () {

        registarModal.classList.remove("active");

        document.body.classList.remove("modal-aberto");

    });


    // Fechar clicando fora do formulário

    registarModal.addEventListener("click", function (event) {

        if (event.target === registarModal) {

            registarModal.classList.remove("active");

            document.body.classList.remove("modal-aberto");

        }

    });


    // ==============================
    // CAMPOS ESPECÍFICOS
    // ==============================

    tipoUsuario.addEventListener("change", function () {

        const tipo = this.value;

        camposCadastro.innerHTML = "";


        // ==========================
        // TURISTA
        // ==========================

        if (tipo === "turista") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nome">
                        Nome completo
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-user"></i>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite o seu nome completo"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // GUIA TURÍSTICO
        // ==========================

        else if (tipo === "guia") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nome">
                        Nome completo
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-user"></i>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome completo"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="numeroGuia">
                        Número de identificação profissional
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-id-card"></i>

                        <input
                            type="text"
                            id="numeroGuia"
                            name="numeroGuia"
                            placeholder="Número profissional"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="provincia">
                        Província onde trabalha
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="provincia"
                            name="provincia"
                            placeholder="Ex.: Maputo"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // RENT-A-CAR
        // ==========================

        else if (tipo === "rentacar") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeEmpresa">
                        Nome da empresa
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-building"></i>

                        <input
                            type="text"
                            id="nomeEmpresa"
                            name="nomeEmpresa"
                            placeholder="Nome da Rent-a-Car"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="nuit">
                        NUIT
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-file-invoice"></i>

                        <input
                            type="text"
                            id="nuit"
                            name="nuit"
                            placeholder="NUIT da empresa"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // HOTEL
        // ==========================

        else if (tipo === "hotel") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeHotel">
                        Nome do Hotel
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-hotel"></i>

                        <input
                            type="text"
                            id="nomeHotel"
                            name="nomeHotel"
                            placeholder="Nome do hotel"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="nuit">
                        NUIT
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-file-invoice"></i>

                        <input
                            type="text"
                            id="nuit"
                            name="nuit"
                            placeholder="NUIT"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // INSTÂNCIA TURÍSTICA
        // ==========================

        else if (tipo === "instancia") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeInstancia">
                        Nome da Instância Turística
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-umbrella-beach"></i>

                        <input
                            type="text"
                            id="nomeInstancia"
                            name="nomeInstancia"
                            placeholder="Nome do estabelecimento"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="nuit">
                        NUIT
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-file-invoice"></i>

                        <input
                            type="text"
                            id="nuit"
                            name="nuit"
                            placeholder="NUIT"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // AGÊNCIA DE VIAGENS
        // ==========================

        else if (tipo === "agencia") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeAgencia">
                        Nome da Agência
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-plane"></i>

                        <input
                            type="text"
                            id="nomeAgencia"
                            name="nomeAgencia"
                            placeholder="Nome da agência"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="nuit">
                        NUIT
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-file-invoice"></i>

                        <input
                            type="text"
                            id="nuit"
                            name="nuit"
                            placeholder="NUIT"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // RESTAURANTE
        // ==========================

        else if (tipo === "restaurante") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeRestaurante">
                        Nome do Restaurante
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-utensils"></i>

                        <input
                            type="text"
                            id="nomeRestaurante"
                            name="nomeRestaurante"
                            placeholder="Nome do restaurante"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // EXPERIÊNCIAS
        // ==========================

        else if (tipo === "experiencia") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nomeEmpresa">
                        Nome do negócio
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-star"></i>

                        <input
                            type="text"
                            id="nomeEmpresa"
                            name="nomeEmpresa"
                            placeholder="Nome da empresa ou actividade"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="localizacao">
                        Localização
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-location-dot"></i>

                        <input
                            type="text"
                            id="localizacao"
                            name="localizacao"
                            placeholder="Cidade ou endereço"
                            required
                        >

                    </div>

                </div>

            `;

        }


        // ==========================
        // OUTRO
        // ==========================

        else if (tipo === "outro") {

            camposCadastro.innerHTML = `

                <div class="form-group">

                    <label for="nome">
                        Nome / Nome da empresa
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-building"></i>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite o nome"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label for="descricao">
                        Tipo de actividade
                    </label>

                    <div class="input-icon">

                        <i class="fa-solid fa-briefcase"></i>

                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            placeholder="Descreva a actividade"
                            required
                        >

                    </div>

                </div>

            `;

        }

    });

  });

    // Cadastro
cadastroForm.addEventListener("submit",function(event){
  event.preventDefault();

  const tipo = tipoUsuario.value;

  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  
  if (senha!==confirmarSenha){
    alert ("As senhas nao coincidem.");
    return;
  }

  let utilizadores = JSON.parse(
    localStorage.getItem("utilizadores")
  ) || [];

  const utilizadoresExiste = utilizadores.find(
    u=> u.email=== email
  );

if (utilizadoresExiste){
  alert("Este email ja esta registado.");
  return;

}
/*usuarios definicao*/

let nome = "";

if (document.getElementById("nome")) {
  nome = document.getElementById("nome").value;
}
else if (document.getElementById("nomeEmpresa")) {
  nome = document.getElementById("nomeEmpresa").value;
}
else if (document.getElementById("nomeHotel")) {
  nome = document.getElementById("nomeHotel").value;
}
else if (document.getElementById("nomeInstancia")) {
  nome = document.getElementById("nomeInstancia").value;
}
else if (document.getElementById("nomeAgencia")) {
  nome = document.getElementById("nomeAgencia").value;
}
else if (document.getElementById("nomeRestaurante")) {
  nome = document.getElementById("nomeRestaurante").value;
}

const novoUtilizador = {
  nome: nome,
  tipo: tipo,
  email: email,
  telefone: telefone,
  senha: senha
};

utilizadores.push(novoUtilizador);

localStorage.setItem("utilizadores",
  JSON.stringify(utilizadores)
);

alert("Conta Criada com Sucesso!");

cadastroForm.reset();

camposCadastro.innerHTML ="";

registarModal.classList.remove("active");


});

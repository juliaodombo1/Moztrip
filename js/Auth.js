
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

document.addEventListener("DOMContentLoaded", function () {


const utilizadorLogado =
    JSON.parse(
        localStorage.getItem("utilizadorLogado")
    );

if (utilizadorLogado) {

    const userName =
        document.getElementById("userName");

    const userMenu =
        document.getElementById("userMenu");


    if (userName) {
        userName.textContent =
            utilizadorLogado.nome ||
            utilizadorLogado.email;
    }

    if (userMenu) {
        userMenu.style.display = "flex";
    }

    

}
    
const meuperfil=
document.getElementById("meuPerfil");
console.log("Meu Perfil encontrado:", meuPerfil);

if (meuperfil) {

    meuperfil.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("CLIQUEI NO MEU PERFIL");

        const utilizadorLogado =
            JSON.parse(
                localStorage.getItem("utilizadorLogado")
            );
             if(!utilizadorLogado){
    return;
}

             switch (utilizadorLogado.tipo) {
                case "turista":
                    window.location.href = "paineis/turista.html";
                    break;
                
                    case "guia":
                    window.location.href = "paineis/guia.html";
                    break; 

                    case"hotel":
                    window.location.href = "paineis/hotel.html";
                    break;

                    case "agencia":
                        window.location.href = "paineis/agencia.html";
                        break;
                        

                        case "rentacar":
                            window.location.href = "paineis/rentacar.html";
                            break;

                            case "restaurante":
                                window.location.href = "paineis/restaurante.html";
                                break;
 case "experiencia":
                window.location.href =
                    "paineis/experiencia.html";
                break;

            case "instancia":
                window.location.href =
                    "paineis/instancia.html";
                break;

            default:
                alert(
                    "Painel não encontrado para este tipo de conta."
                );



            
        }
    });
}


    const userMenuButton =
        document.getElementById("userMenuButton");

    const userDropdown =
        document.getElementById("userDropdown");

    const menuSair =
        document.getElementById("menuSair");

    // Abrir / fechar menu
    if (userMenuButton && userDropdown) {

        userMenuButton.addEventListener("click", function () {

            userDropdown.classList.toggle("active");

        });

    }

    // Logout
    if (menuSair) {

        menuSair.addEventListener("click", function (event) {

            event.preventDefault();

            localStorage.removeItem(
                "utilizadorLogado"
            );

            location.reload();

        });

    }

});



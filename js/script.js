// Botão Voltar ao Topo
const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }
});

voltarTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Validação do formulário
const formulario = document.getElementById("formularioContato");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}
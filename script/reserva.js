document.getElementById("reservaForm").addEventListener("submit", function(event) {
    let hospedes = document.getElementById("hospedes").value;
    let erroHospedes = document.getElementById("erroHospedes");

    if (hospedes <= 0) {
        erroHospedes.style.display = "block";
        event.preventDefault(); // Impede o envio do formulário
    } else {
        erroHospedes.style.display = "none"; // Oculta a mensagem de erro se for válido
    }
});
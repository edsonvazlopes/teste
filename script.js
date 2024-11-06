// Obtém os elementos da página
const modal = document.getElementById("modal");
const downloadButton = document.getElementById("downloadButton");
const closeModal = document.getElementById("closeModal");
const agreeButton = document.getElementById("agreeButton");

// Função para abrir a modal
downloadButton.onclick = function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    modal.style.display = "block"; // Exibe a modal
};

// Função para fechar a modal
closeModal.onclick = function() {
    modal.style.display = "none"; // Oculta a modal
};

// Função para concordar e baixar o currículo
agreeButton.onclick = function() {
    modal.style.display = "none"; // Oculta a modal
    window.location.href = "caminho/para/seu/curriculo.pdf"; // Substitua pelo caminho do seu currículo
};

// Fecha a modal se o usuário clicar fora dela
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Oculta a modal
    }
};

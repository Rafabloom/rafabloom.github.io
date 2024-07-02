// Função para alternar entre os estilos de tema claro e escuro
function toggleDarkMode() {
    const html = document.documentElement;
    const body = document.body;
    const isDarkMode = html.classList.contains('dark-mode');
    const logo = document.querySelector('.logo');
    const logoFooter = document.querySelector('.logo-footer'); // Selecionar logo do footer
    const setaEsquerda = document.querySelector('.seta-imagem-esquerda');
    const setaDireita = document.querySelector('.seta-imagem-direita');

    // Toggle entre modo claro e escuro
    if (isDarkMode) {
        html.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        logo.classList.remove('logo-dark');
        logoFooter.classList.remove('logo-dark'); // Remover classe escura do logo do footer
        // Trocar para o logo claro
        logo.src = 'portifolio-arquivos/logo-light.svg';
        logoFooter.src = 'portifolio-arquivos/logo-light.svg'; // Trocar para o logo claro no footer
        // Trocar para as setas claras
        setaEsquerda.src = 'portifolio-arquivos/setaesquerda-formacao-light.svg';
        setaDireita.src = 'portifolio-arquivos/seta-formacao-light.svg';
    } else {
        html.classList.add('dark-mode');
        body.classList.add('dark-mode');
        logo.classList.add('logo-dark');
        logoFooter.classList.add('logo-dark'); // Adicionar classe escura ao logo do footer
        // Trocar para o logo escuro
        logo.src = 'portifolio-arquivos/logo-dark.svg';
        logoFooter.src = 'portifolio-arquivos/logo-dark.svg'; // Trocar para o logo escuro no footer
        // Trocar para as setas escuras
        setaEsquerda.src = 'portifolio-arquivos/setaesquerda-formacao-dark.svg';
        setaDireita.src = 'portifolio-arquivos/seta-formacao-dark.svg';
    }
}

// Adiciona um evento de clique ao toggle
const darkModeToggle = document.getElementById('darkmode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

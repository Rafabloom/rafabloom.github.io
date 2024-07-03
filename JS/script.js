/* ----- ADIÇÃO DA SOMBRA NO MENU APÓS A ROLAGEM ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");
    let defaultHeight = 90;
    let scrolledHeight = 70;
    
    if (window.innerWidth <= 943) { 
        defaultHeight = 60;
        scrolledHeight = 50;
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.5)";
        navHeader.style.height = `${scrolledHeight}px`;
        navHeader.style.lineHeight = `${scrolledHeight}px`;
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = `${defaultHeight}px`;
        navHeader.style.lineHeight = `${defaultHeight}px`;
    }
}

/* ----- MENU HAMBURGER SCRIPT ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("navbarNav");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
    let icon = document.querySelector(".nav-toggle i");
    mudarNavBtn(icon);
}

function mudarNavBtn(icon) {
    icon.classList.toggle("fa-xmark");
}


/* ----- ATIVANDO link-ativo NO MENU ----- */
const linksMenu = document.querySelectorAll('.nav-menu li a');

linksMenu.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        linksMenu.forEach(link => {
            link.classList.remove('link-ativo');
        });

        this.classList.add('link-ativo');

        // Scroll suave até a seção correspondente
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function () {
    linksMenu.forEach(link => {
        const secaoId = link.getAttribute('href').substring(1);
        const secao = document.getElementById(secaoId);

        if (secao) {
            const limiteSuperior = secao.offsetTop;
            const limiteInferior = limiteSuperior + secao.offsetHeight;
            const scrollAtual = window.pageYOffset;
            const alturaJanela = window.innerHeight;

            if ((limiteSuperior <= scrollAtual + alturaJanela / 2) && (limiteInferior >= scrollAtual + alturaJanela / 2)) {
                linksMenu.forEach(link => {
                    link.classList.remove('link-ativo');
                });
                link.classList.add('link-ativo');
            }
        }
    });
});

/* ----- BOTÃO DOWNLOAD CURRICULO ----- */
const btnDownload = document.querySelector('.btn-download');
const loaderDownload = document.querySelector('.loading');

btnDownload.addEventListener('click', function() {
    loaderDownload.style.display = 'block';

    setTimeout(function() {
        loaderDownload.style.display = 'none';
    }, 2000);
});


/* ----- EFEITO DE ESCREVER ----- */
let textoDigitado = new Typed(".textoDigitado", {
    strings: ["Rafael Matos"],
    loop: true,
    typeSpeed: 95,
    backSpeed: 30,
    backDelay: 2500
})

/* ----- SEÇÃO FORMAÇÃO - PASSAR CERTIFICADOS ----- */
document.addEventListener("DOMContentLoaded", function () {
    const certificadosContainer = document.querySelector('.carousel');
    const certificados = Array.from(certificadosContainer.children);
    let currentIndex = 0;

    function mostrarCertificados() {
        let numCertificadosVisiveis;

        if (window.innerWidth <= 810) {
            numCertificadosVisiveis = 1;
        } else if (window.innerWidth <= 1200) {
            numCertificadosVisiveis = 2;
        } else {
            numCertificadosVisiveis = 3;
        }

        // Ajustar currentIndex se estiver fora do intervalo válido
        if (currentIndex > certificados.length - numCertificadosVisiveis) {
            currentIndex = Math.max(certificados.length - numCertificadosVisiveis, 0);
        }

        certificados.forEach((certificado, index) => {
            if (index >= currentIndex && index < currentIndex + numCertificadosVisiveis) {
                certificado.style.display = 'block';
            } else {
                certificado.style.display = 'none';
            }
        });

        // Mostrar ou esconder a seta esquerda
        const setaEsquerda = document.querySelector('.seta-esquerda');
        setaEsquerda.style.display = currentIndex > 0 ? 'block' : 'none';

        // Mostrar ou esconder a seta direita
        const setaDireita = document.querySelector('.seta-direita');
        setaDireita.style.display = currentIndex + numCertificadosVisiveis >= certificados.length ? 'none' : 'block';
    }

    function avancarCertificados() {
        let numCertificadosVisiveis;

        if (window.innerWidth <= 810) {
            numCertificadosVisiveis = 1;
        } else if (window.innerWidth <= 1200) {
            numCertificadosVisiveis = 2;
        } else {
            numCertificadosVisiveis = 3;
        }

        if (currentIndex + numCertificadosVisiveis <= certificados.length) {
            currentIndex++;
            mostrarCertificados();
        }
    }

    function retrocederCertificados() {
        if (currentIndex > 0) {
            currentIndex--;
            mostrarCertificados();
        }
    }

    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    setaEsquerda.addEventListener('click', retrocederCertificados);
    setaDireita.addEventListener('click', avancarCertificados);

    mostrarCertificados();

    window.addEventListener('resize', mostrarCertificados);
});

/* ----- SEÇÃO FORMAÇÃO - BALÃO DE FALA PROGRESSO ----- */
function showBalaoFala() {
    const balaoFala = document.querySelector('.balao-fala');
    balaoFala.style.display = 'block';
}

function hideBalaoFala() {
    const balaoFala = document.querySelector('.balao-fala');
    balaoFala.style.display = 'none';
}

/* ----- LÓGICA PARA BOTÃO MOSTRAR MAIS (PROJETOS) ----- */
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrando-mais')) {
        mostrarMenosProjetos();
    } else {
        mostrarMaisProjetos();
    }
    toggleBotao();
});

function toggleBotao() {
    botaoMostrarProjetos.classList.toggle('mostrando-mais');
    if (botaoMostrarProjetos.classList.contains('mostrando-mais')) {
        botaoMostrarProjetos.textContent = 'Mostrar Menos';
    } else {
        botaoMostrarProjetos.textContent = 'Mostrar Mais';
    }
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

/* ----- COPIAR E-MAIL PAGINA CONTATO ----- */
function copiarEmail() {
    var textoEmail = document.querySelector('.dados-email').textContent;
    navigator.clipboard.writeText(textoEmail)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'E-mail Copiado!',
                text: 'Endereço de e-mail copiado para a área de transferência.',
                confirmButtonColor: '#06f',
                iconColor: ' #06f',
            });
        })
        .catch(err => {
            console.error('Erro ao copiar o endereço de e-mail: ', err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Houve um erro ao copiar o endereço de e-mail. Por favor, tente novamente.',
                confirmButtonColor: '#06f',
            });
        });
}

/* ----- ANIMAÇÕES FORMULÁRIO CONTATO ----- */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/* ----- ALERTAS FORMULÁRIO CONTATO ----- */
const form = document.getElementById('formulario-contato');
const loader = document.getElementById('loader');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    loader.style.display = 'block';

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        loader.style.display = 'none';

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: '<span style="color: green;">E-mail enviado com sucesso!</span>',
                html: '<span style="color: #096544;">Obrigado por entrar em contato. Em breve entraremos em contato com você.</span>',
                confirmButtonText: 'OK',
                iconHtml: '<i class="fas fa-check-circle" style="color: green;"></i>'
            });
            form.reset();
        } else {
            console.error('Erro na resposta do servidor:', response.status, response.statusText);
            throw new Error('Erro ao enviar e-mail');
        }
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        loader.style.display = 'none';
        Swal.fire({
            icon: 'error',
            title: 'Erro ao enviar e-mail',
            text: 'Ocorreu um problema ao enviar seu e-mail. Por favor, tente novamente mais tarde.',
            confirmButtonText: 'OK'
        });
    }
});

/* ----- LIMITANDO CARACTERES FORMULÁRIO ----- */
document.addEventListener('DOMContentLoaded', function() {
    let inputName = document.getElementById('name');

    inputName.addEventListener('input', function() {
        let cleanedValue = '';

        for (let i = 0; i < this.value.length; i++) {
            let char = this.value.charAt(i);
            if (/[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(char) || char === ' ') {
                cleanedValue += char;
            }
        }
        let words = cleanedValue.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        this.value = words;
    });
});

function formatarTelefone(input) {
    // Remove caracteres não numéricos
    let numeros = input.value.replace(/\D/g, '');
    
    // Formatação no padrão (99) 99999-9999
    let formatted = '';
    if (numeros.length > 0) {
        formatted += '(' + numeros.substring(0, 2);
    }
    if (numeros.length > 2) {
        formatted += ') ' + numeros.substring(2, 7);
    }
    if (numeros.length > 7) {
        formatted += '-' + numeros.substring(7, 11);
    }
    
    // Atualiza o valor do input
    input.value = formatted;
}
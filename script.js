// Função simulando o clique para entrar no servidor
function conectarServidor() {
    alert("Iniciando o FiveM... Certifique-se de que o seu GTA V está aberto!");
    // Link padrão do FiveM para testes
    window.location.href = "https://fivem.net"; 
}

// Lógica para simular o número de players alterando em tempo real
setInterval(() => {
    const contadorElemento = document.getElementById('contador');
    let jogadoresAtuais = parseInt(contadorElemento.innerText);
    
    // Sorteia se entra ou sai alguém para dar efeito de servidor ativo
    const alteracao = Math.floor(Math.random() * 3) - 1; // Gera -1, 0 ou 1
    
    contadorElemento.innerText = jogadoresAtuais + alteracao;
}, 4000); // Executa a cada 4 segundos

// Função para simular a escolha do VIP
function comprarVip(nomeVip) {
    alert("Você selecionou o " + nomeVip + "! Redirecionando para o checkout do Paraíso SP...");
}
function toggleMúsica() {
    const musica = document.getElementById('musica-cidade');
    const icone = document.getElementById('icone-audio');
    
    if (musica.paused) {
        musica.play().catch(error => {
            console.log("O áudio não pôde ser iniciado: ", error);
            alert("Certifique-se de que o arquivo 'musica.mp3' está na pasta correta!");
        });
        icone.innerText = "⏸️";
    } else {
        musica.pause();
        icone.innerText = "🎵";
    }
}
function toggleMúsica() {
    const musica = document.getElementById('musica-cidade');
    const icone = document.getElementById('icone-audio');
    
    if (musica.paused) {
        musica.play().catch(error => {
            console.log("O áudio não pôde ser iniciado: ", error);
            alert("Certifique-se de que o arquivo 'musica.mp3' está na pasta correta!");
        });
        icone.innerText = "⏸️";
    } else {
        musica.pause();
        icone.innerText = "🎵";
    }
}
// Função para abrir e fechar o menu de 3 pontinhos
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}
// Função para rolar a página suavemente até o topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' /* Faz a rolagem ser suave e elegante */
    });
}
// Sensor para mostrar ou esconder o botão de voltar ao topo
window.addEventListener('scroll', function() {
    const botaoTopo = document.getElementById('btn-topo');
    
    // Se rolou mais de 300 pixels para baixo, mostra o botão
    if (window.scrollY > 300) {
        botaoTopo.classList.add('show');
    } else {
        botaoTopo.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ativa o Dark Mode se o sistema do usuário estiver configurado
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // 2. Função para atualizar o status da barbearia
    function atualizarStatus() {
        const agora = new Date();
        const hora = agora.getHours();
        const statusContainer = document.getElementById('status-loja');

        // Proteção: só executa se o elemento existir na página
        if (!statusContainer) return;

        const statusTexto = statusContainer.querySelector('.status-texto');

        // Configuração de horário (09h às 19h)
        const horaAbertura = 9;
        const horaFechamento = 19;

        if (hora >= horaAbertura && hora < horaFechamento) {
            statusContainer.classList.remove('fechado');
            statusTexto.innerHTML = "Aberto agora • Até às 19:00";
        } else {
            statusContainer.classList.add('fechado');
            statusTexto.innerHTML = "Fechado agora • Abre às 09:00";
        }
    }

    // Executa a função
    atualizarStatus();

    // 3. Mensagem automática no WhatsApp
    const mensagem = encodeURIComponent(
        "Olá! Gostaria de agendar um horário na Françoa Barbearia ✂️"
    );

    const linksWhatsapp = document.querySelectorAll('a[href*="wa.me"]');

    linksWhatsapp.forEach(link => {
        link.href = `https://wa.me/5543988051559?text=${mensagem}`;
    });
});
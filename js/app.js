document.addEventListener('DOMContentLoaded', () => {

    // DARK MODE
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // STATUS LOJA
    function atualizarStatus() {
        const agora = new Date();
        const hora = agora.getHours();
        const statusContainer = document.getElementById('status-loja');

        if (!statusContainer) return;

        const statusTexto = statusContainer.querySelector('.status-texto');

        if (hora >= 9 && hora < 19) {
            statusContainer.classList.remove('fechado');
            statusTexto.innerHTML = "Aberto agora • Até às 19:00";
        } else {
            statusContainer.classList.add('fechado');
            statusTexto.innerHTML = "Fechado agora • Abre às 09:00";
        }
    }

    atualizarStatus();

    // WHATSAPP
    const mensagem = encodeURIComponent(
        "Olá! Gostaria de agendar um horário na Françoa Barbearia ✂️"
    );

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = `https://wa.me/5543988051559?text=${mensagem}`;
    });

    // CARROSSEL FEEDBACKS
    const slider = document.querySelector('.feedback-slider');

    if (slider) {
        new Swiper('.feedback-slider', {
            loop: true,
            speed: 800,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 25,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },

            observer: true,
            observeParents: true
        });
    }

});
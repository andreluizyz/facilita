function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    
    const isMenuVisible = menu.style.display === 'flex';
    
    menu.style.display = isMenuVisible ? 'none' : 'flex';
    overlay.classList.toggle('active', !isMenuVisible);
    content.classList.toggle('blur', !isMenuVisible);
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2024-11-03T00:00:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o timer a cada segundo
setInterval(updateCountdown, 1000);

// Chama a função uma vez para exibir o tempo imediatamente ao carregar a página
updateCountdown();

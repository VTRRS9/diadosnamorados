// -->> ALTERE AQUI A DATA DE INÍCIO <<--
// Formato: ANO-MÊS-DIA T HORA:MINUTO:SEGUNDO
const startDate = new Date('2023-05-19T12:00:00');

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    // Cálculos de tempo
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Ajustes para valores negativos
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Pega o último dia do mês anterior
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Função para adicionar um zero à esquerda se o número for menor que 10
    const pad = (num) => String(num).padStart(2, '0');

    // Atualiza o HTML com os valores
    document.getElementById('years').innerText = pad(years);
    document.getElementById('months').innerText = pad(months);
    document.getElementById('days').innerText = pad(days);
    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Chama a função uma vez para não esperar 1s para aparecer


// Lógica para criar os corações animados
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duração aleatória (entre 5s e 10s)
    heart.innerText = '❤️';
    
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove o coração depois que a animação termina para não sobrecarregar
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Cria um novo coração a cada 500ms (meio segundo)
setInterval(createHeart, 500);
document.querySelector('.animate-btn').addEventListener('click', function () {
    const messages = [
        "С 8 Марта! Пусть в вашем сердце всегда будет весна!",
        "Желаем счастья, любви и исполнения мечт!",
        "Вы достойны самых красивых цветов и лучших слов!"
    ];
    
    let message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = message;
});
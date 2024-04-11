// Скрипт для обработки выбора места в кинозале и отправки данных о бронировании
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все доступные места в кинозале
    const seats = document.querySelectorAll('.buying-scheme__chair');
    
    // При клике на место, обрабатываем его выбор
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            // Проверяем, доступно ли место для выбора
            if (!seat.classList.contains('buying-scheme__chair_disabled')) {
                // Если место доступно, то обрабатываем выбор
                if (seat.classList.contains('buying-scheme__chair_selected')) {
                    // Если место уже выбрано, то отменяем выбор
                    seat.classList.remove('buying-scheme__chair_selected');
                } else {
                    // Иначе делаем место выбранным
                    seat.classList.add('buying-scheme__chair_selected');
                }
            }
        });
    });

    // Обработка отправки данных о бронировании
    const reserveButton = document.querySelector('.acceptin-button');
    reserveButton.addEventListener('click', function() {
        // Здесь вы можете собрать данные о выбранных местах и отправить их на сервер для бронирования
        // Например, с помощью AJAX запроса или формы
        // После успешной отправки вы можете перенаправить пользователя на страницу оплаты или показать сообщение об успешном бронировании
        // В этом примере я просто перенаправлю пользователя на страницу оплаты
        window.location.href = 'payment.html';
    });
});

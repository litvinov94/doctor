const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    }
});

// Popup

const header__popup = document.querySelector('.header__popup');
const popup__body = document.querySelector('.popup__body');

const openPopupButtons = document.querySelector('.open-popup')
const closePopupButton = document.querySelector('.close-popup')

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});
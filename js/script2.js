// Функция, которая будет выполняться при нажатии на кнопку
function playVideo() {

    // Получаем ссылки на кнопку и видео
    const button = document.querySelector('.header-button');
    const video = document.querySelector('.bg-vid');
    const header = document.querySelector('.header-container');
    const header2 = document.querySelector('.header-container2');
    const bgvidsrc = document.querySelector('.bg-vid-source');
  
    // Добавляем обработчик события при клике на кнопку
    button.addEventListener('click', function() {
      // Запускаем проигрывание видео
      video.play();
  
      // Добавляем класс "filter-remove" к видео
      video.classList.add('filter-remove');
      header.classList.remove('animation-header-add');
      header.classList.add('animation-header-add');

      video.addEventListener('ended', function() {
        // Добавляем класс "show-header" к блоку header-container
        header.classList.add('header-container1');
        header2.classList.add('show-header');
      });
    });
  }
  
  // Вызываем функцию после полной загрузки страницы
  window.addEventListener('load', playVideo);
  
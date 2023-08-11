// Функция, которая будет выполняться при нажатии на кнопку
function playVideo() {
  const button = document.querySelector('.header-button');
  const button2 = document.querySelector('.header-button2');
  const fasterBtn = document.querySelector('.fasterBtn');
  const video = document.querySelector('#bg-vid');
  const video2 = document.querySelector('.bg-vid2');
  const video3 = document.querySelector('.bg-vid3');
  const header = document.querySelector('.header-container');
  const header2 = document.querySelector('.header-container2');
  const audio = document.querySelector('#myAudio');
  const dragon = document.querySelector('.dragon');

  video2.pause();

  button.addEventListener('click', function() {
    video.classList.add('bg-vid-dissapper');
    header.classList.add('animation-header-add');
    fasterBtn.classList.add('fasterBtn-addAppear');
    audio.play();
    video2.play();
    video2.classList.add('filter-remove');
    dragon.classList.add('header-container1');


    video2.addEventListener('ended', function() {
      // Добавляем класс "show-header" к блоку header-container
      header.classList.add('header-container1');
      header2.classList.add('show-header');
      audio.pause();
      video2.classList.add('filter-add');
    });
    button2.addEventListener('click', function() {
      video2.classList.add('bg-vid-dissapper');
      video3.play();
      video3.classList.add('filter-remove');

      video3.addEventListener('ended', function() {
        video3.classList.add('filter-add');
      });

    });
  });

  fasterBtn.addEventListener('click', function() {
    video2.playbackRate = 5;
  });
  }
  
  // Вызываем функцию после полной загрузки страницы
  window.addEventListener('load', playVideo);
  
// window.onload = function() {
//   //   var video = document.getElementById("video");
//   //   // video.pause(); // При загрузке страницы видео будет на паузе
//   // console.log(video)
//   //   setTimeout(function() {
//   //     while(true){
//   //       video.play();
//   //     }
//   //      // Воспроизведение видео после заданной задержки (в миллисекундах)
//   //   }, 5000); // Например, 5000 миллисекунд (5 секунд)
//   video.play();
//   };

   // Поиск видеоэлемента
   var video = document.querySelector('video');
   console.log(video)
   // Обработчик события "ended" (когда видео заканчивается)
   video.addEventListener("ended", function() {
     // Сбросить время видео на 0 и воспроизвести снова
     this.currentTime = 0;
     this.play();
   });
   // Поиск видеоэлемента
   var video = document.querySelector('video');
   console.log(video)
   // Обработчик события "ended" (когда видео заканчивается)
   video.addEventListener("ended", function() {
     // Сбросить время видео на 0 и воспроизвести снова
     this.currentTime = 0;
     this.play();
   });
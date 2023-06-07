window.onload = function() {
    var video = document.getElementById("video");
    // video.pause(); // При загрузке страницы видео будет на паузе
  console.log(video)
    setTimeout(function() {
      video.play(); // Воспроизведение видео после заданной задержки (в миллисекундах)
    }, 5000); // Например, 5000 миллисекунд (5 секунд)
  };
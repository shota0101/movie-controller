const volumeDiff = 0.01;

window.onload = function() {
  const backGround = document.getElementById('back-ground');
  const video = document.getElementById('video');
  video.volume = 0.5;
  
  document.addEventListener('keypress', (event) => {
    switch (event.key) {
    case 'd':
      video.play();
      break;
    case 's':
      video.pause();
      break;
    case 'f':
      if (video.volume < 1)
        video.volume = video.volume + volumeDiff;
      break;
    case 'b':
      if (video.volume > 0)
        video.volume = video.volume - volumeDiff;
      break;
    case 'p':
      if (video.volume < 1)
        video.volume = video.volume + volumeDiff * 10;
      break;
    case 'n':
      if (video.volume > 0)
        video.volume = video.volume - volumeDiff * 10;
      break;
    case 'a':
      video.volume = 0;
      break;
    case 'e':
      video.volume = 1;
      break;
    case 'w':
      backGround.setAttribute('class', 'back-ground-white');
      break;
    case 'q':
      backGround.setAttribute('class', 'back-ground-black');
      break;
    default:
      console.log(`keypress:${event.key}`);
      break;
    };
  });
};  

const volumeDiff = 0.01;

function save() {
  const video = document.getElementById('video');
  if (video.currentTime !== 0)
    localStorage.setItem('movie-resume', video.currentTime);
}

window.onload = function() {
  const backGround = document.getElementById('back-ground');
  const video = document.getElementById('video');
  video.volume = 0.5;
  window.setInterval(save, 1000 * 10); // 10秒ごとに保存
  
  document.addEventListener('keypress', (event) => {
    switch (event.key) {

      // レジューム関連
    case 'c':
      save();
      alert(video.currentTime / 60);
      break;
    case 'r':
      video.currentTime = localStorage.getItem('movie-resume');
      break;

      // 停止・再生
    case 's':
      video.play();
      break;
    case 'd':
      video.pause();
      save();
      break;

      // 早送り
    case 'f':
      video.currentTime = video.currentTime + 15;
      break;
    case 'b':
      video.currentTime = video.currentTime - 15;
      break;

      // 音量系
    case 'p':
      if (video.volume < 1)
        video.volume = video.volume + volumeDiff;
      break;
    case 'n':
      if (video.volume > 0)
        video.volume = video.volume - volumeDiff;
      break;
    case 'P':
      if (video.volume < 1)
        video.volume = video.volume + volumeDiff * 10;
      break;
    case 'N':
      if (video.volume > 0)
        video.volume = video.volume - volumeDiff * 10;
      break;
    case 'a':
      video.volume = 0;
      break;
    case 'e':
      video.volume = 1;
      break;
      
    // case 'w':
    //   backGround.setAttribute('class', 'back-ground-white');
    //   break;
    // case 'q':
    //   backGround.setAttribute('class', 'back-ground-black');
    //   break;
    default:
      console.log(`keypress:${event.key}`);
      break;
    };
  });
};  

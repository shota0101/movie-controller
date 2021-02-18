const volumeDiff = 0.01;

function save() {
  const audio = document.getElementById('audio');
  if (audio.currentTime !== 0)
    localStorage.setItem('audio-resume', audio.currentTime);
}

window.onload = function() {
  const backGround = document.getElementById('back-ground');
  const audio = document.getElementById('audio');
  audio.volume = 0.5;
  window.setInterval(save, 1000 * 10); // 10秒ごとに保存
  
  document.addEventListener('keypress', (event) => {
    switch (event.key) {

      // レジューム関連
    case 'c':
      save();
      alert(audio.currentTime / 60);
      break;
    case 'r':
      audio.currentTime = localStorage.getItem('movie-resume');
      break;

      // 停止・再生
    case 's':
      audio.play();
      break;
    case 'd':
      audio.pause();
      save();
      break;

      // 早送り
    case 'f':
      audio.currentTime = audio.currentTime + 10;
      break;
    case 'b':
      audio.currentTime = audio.currentTime - 10;
      break;

      // 音量系
    case 'p':
      if (audio.volume < 1)
        audio.volume = audio.volume + volumeDiff;
      break;
    case 'n':
      if (audio.volume > 0)
        audio.volume = audio.volume - volumeDiff;
      break;
    case 'P':
      if (audio.volume < 1)
        audio.volume = audio.volume + volumeDiff * 10;
      break;
    case 'N':
      if (audio.volume > 0)
        audio.volume = audio.volume - volumeDiff * 10;
      break;
    case 'a':
      audio.volume = 0;
      break;
    case 'e':
      audio.volume = 1;
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

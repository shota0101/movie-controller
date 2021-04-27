const volumeDiff = 0.01;
let resumeKey = 'resumeKey';

function save() {
  const media = document.getElementById('media');
  if (media.currentTime !== 0)
    localStorage.setItem(resumeKey, media.currentTime);
}

window.onload = function() {
  const backGround = document.getElementById('back-ground');
  const media = document.getElementById('media');
  let isPlaying = false;

  media.onplaying = function() {
    isPlaying = true;
  };
  media.onpause = function() {
    isPlaying = false;
  };
  
  resumeKey = document.getElementById('resume_key').value;
  media.volume = document.getElementById('volume').value;
  window.setInterval(save, 1000 * 10); // 10秒ごとに保存
  
  document.addEventListener('keypress', (event) => {
    switch (event.key) {

      // レジューム関連
    case 'c':
      save();
      alert(media.currentTime / 60);
      break;
    case 'r':
      media.currentTime = localStorage.getItem(resumeKey);
      break;

      // 停止・再生
    case ' ':
      if (isPlaying === false) {
	media.play();
      } else {
	media.pause();
      }
      break;

      break;

      // 早送り
    case 'b':
      media.currentTime = media.currentTime - 3;
      break;
    case 'f':
      media.currentTime = media.currentTime + 3;
      break;
    case '1':
      media.currentTime = media.currentTime - 1;
      break;
    case '!':
      media.currentTime = media.currentTime + 1;
      break;
    case '2':
      media.currentTime = media.currentTime - 10;
      break;
    case '@':
      media.currentTime = media.currentTime + 10;
      break;
    case '3':
      media.currentTime = media.currentTime - 30;
      break;
    case '#':
      media.currentTime = media.currentTime + 30;
      break;
    case '4':
      media.currentTime = media.currentTime - 40;
      break;
    case '$':
      media.currentTime = media.currentTime + 40;
      break;
    case '5':
      media.currentTime = media.currentTime - 50;
      break;
    case '%':
      media.currentTime = media.currentTime + 50;
      break;
    case '6':
      media.currentTime = media.currentTime - 60;
      break;
    case '^':
      media.currentTime = media.currentTime + 60;
      break;
    case '7':
      media.currentTime = media.currentTime - 180;
      break;
    case '&':
      media.currentTime = media.currentTime + 180;
      break;
    case '8':
      media.currentTime = media.currentTime - 300;
      break;
    case '*':
      media.currentTime = media.currentTime + 300;
      break;
    case '9':
      media.currentTime = media.currentTime - 600;
      break;
    case '(':
      media.currentTime = media.currentTime + 600;
      break;
    case '0':
      media.currentTime = media.currentTime - 1800;
      break;
    case ')':
      media.currentTime = media.currentTime + 1800;
      break;

      // 音量系
    case 'p':
      if (media.volume < 1)
        media.volume = media.volume + volumeDiff;
      console.log('volume : ' + media.volume);
      break;
    case 'n':
      if (media.volume > 0)
        media.volume = media.volume - volumeDiff;
      console.log('volume : ' + media.volume);
      break;
    case 'P':
      if (media.volume < 1)
        media.volume = media.volume + volumeDiff * 10;
      console.log('volume : ' + media.volume);
      break;
    case 'N':
      if (media.volume > 0)
        media.volume = media.volume - volumeDiff * 10;
      console.log('volume : ' + media.volume);
      break;
    case 'a':
      media.volume = 0;
      break;
    case 'e':
      media.volume = 1;
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

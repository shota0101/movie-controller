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
    case 's':
      media.play();
      break;
    case 'd':
      media.pause();
      save();
      break;

      // 早送り
    case 'f':
      media.currentTime = media.currentTime + 10;
      break;
    case 'b':
      media.currentTime = media.currentTime - 10;
      break;
    case 'q':
      media.currentTime = media.currentTime + 1;
      break;
    case 'Q':
      media.currentTime = media.currentTime - 1;
      break;
    case 'w':
      media.currentTime = media.currentTime + 2;
      break;
    case 'W':
      media.currentTime = media.currentTime - 2;
      break;
    case 'e':
      media.currentTime = media.currentTime + 4;
      break;
    case 'E':
      media.currentTime = media.currentTime - 4;
      break;
    case 'r':
      media.currentTime = media.currentTime + 8;
      break;
    case 'R':
      media.currentTime = media.currentTime - 8;
      break;
    case 't':
      media.currentTime = media.currentTime + 16;
      break;
    case 'T':
      media.currentTime = media.currentTime - 16;
      break;
    case 'y':
      media.currentTime = media.currentTime + 32;
      break;
    case 'Y':
      media.currentTime = media.currentTime - 32;
      break;
    case 'u':
      media.currentTime = media.currentTime + 64;
      break;
    case 'U':
      media.currentTime = media.currentTime - 64;
      break;
    case 'i':
      media.currentTime = media.currentTime + 128;
      break;
    case 'I':
      media.currentTime = media.currentTime - 128;
      break;
    case 'o':
      media.currentTime = media.currentTime + 256;
      break;
    case 'O':
      media.currentTime = media.currentTime - 256;
      break;
    case 'p':
      media.currentTime = media.currentTime + 512;
      break;
    case 'P':
      media.currentTime = media.currentTime - 512;
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

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
  window.setInterval(save, 1000 * 60); // 1分ごとに保存
  
  document.addEventListener('keypress', (event) => {
    switch (event.key) {

      // レジューム関連
    case '`':
      save();
      alert(media.currentTime / 60);
      break;
    case 'Enter':
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
      // Heliumだと何故かSpaceが効かなかったりするので
    case 'q':
      media.pause();
      break;
    case 'w':
      media.play();
      break;

      // 音量系
    case 'y':
    case '[':
      if (media.volume > 0)
        media.volume = media.volume - volumeDiff * 10;
      console.log('volume : ' + media.volume);
      break;
    case 'u':
    case '{':
      if (media.volume > 0)
        media.volume = media.volume - volumeDiff;
      console.log('volume : ' + media.volume);
      break;
    case 'i':
    case '}':
      if (media.volume < 1)
        media.volume = media.volume + volumeDiff;
      console.log('volume : ' + media.volume);
      break;
    case 'o':
    case ']':
      if (media.volume < 1)
        media.volume = media.volume + volumeDiff * 10;
      console.log('volume : ' + media.volume);
      break;
    case '<':
      media.volume = 0;
      break;
    case '>':
      media.volume = 1;
      break;

      // case 'w':
      //   backGround.setAttribute('class', 'back-ground-white');
      //   break;
      // case 'q':
      //   backGround.setAttribute('class', 'back-ground-black');
      //   break;

      // 時刻移動系
    case 'a':
      media.currentTime = media.currentTime - 60;
      break;
    case 's':
      media.currentTime = media.currentTime - 30;
      break;
    case 'd':
      media.currentTime = media.currentTime - 10;
      break;
    case 'f':
      media.currentTime = media.currentTime - 3;
      break;
    case 'g':
      media.currentTime = media.currentTime - 1;
      break;
    case 'h':
      media.currentTime = media.currentTime + 1;
      break;
    case 'j':
      media.currentTime = media.currentTime + 3;
      break;
    case 'k':
      media.currentTime = media.currentTime + 10;
      break;
    case 'l':
      media.currentTime = media.currentTime + 30;
      break;
    case ';':
      media.currentTime = media.currentTime + 60;
      break;

    case 'x':
      media.currentTime = media.currentTime - 60 * 30;
      break;
    case 'c':
      media.currentTime = media.currentTime - 60 * 10;
      break;
    case 'v':
      media.currentTime = media.currentTime - 60 * 3;
      break;
    case 'b':
      media.currentTime = media.currentTime + 60 * 3;
      break;
    case 'n':
      media.currentTime = media.currentTime + 60 * 10;
      break;
    case 'm':
      media.currentTime = media.currentTime + 60 * 30;
      break;

    default:
      console.log(`keypress:${event.key}`);
      break;
    };
  });
};  

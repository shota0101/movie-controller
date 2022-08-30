const volumeUnit = 0.05;
let resumeKey = 'resumeKey';

function save(name) {
  const video = document.getElementById('video');
  if (video.currentTime !== 0)
    localStorage.setItem(resumeKey, video.currentTime);
}

window.onload = function() {
  // ファイルパスを取得
  const filePath = new URLSearchParams(window.location.search.substring(1)).get('path');

  // ↓のようなHTMLを追加する
  // <video id='video' width='100%' height='100%' controls>
  //   <source src='パラメータで指定された動画ファイルパス'>
  // </video>
  const video = document.createElement('video');
  video.setAttribute('id', 'video');
  video.setAttribute('controls', true);
  const sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', filePath);
  video.appendChild(sourceElement);
  document.getElementById('left').appendChild(video);

  // 続きのデータがあれば、続きからの位置で初期化
  resumeKey = filePath;
  if (localStorage.getItem(resumeKey) !== null)
    video.currentTime = localStorage.getItem(resumeKey);
  window.setInterval(save, 1000 * 3); // 3分ごとに保存

  let isPlaying = false;
  video.onplaying = function() {
    isPlaying = true;
  };
  video.onpause = function() {
    isPlaying = false;
  };
  
  // keydownだと⌘Lのような修飾キーを利用したキー入力に反応するのでkeypressを利用
  document.addEventListener('keypress', (event) => {
    switch (event.code) {
    case 'KeyP': // 停止・再生
      // SpaceやEnterはvideo要素本来の機能と衝突するので不要
      if (isPlaying === true)
	video.pause();
      else
	video.play();
      break;

    case 'KeyT': // 時刻をtempに記録
      localStorage.setItem('temp', video.currentTime);
      alert(`rキーで${Math.round(video.currentTime)}秒に戻ります`);
      console.log(`keypress : ${event.code}`);
      break;
    case 'KeyR': // 時刻をtempに移動
      video.currentTime = localStorage.getItem('temp');
      break;

    case 'KeyA': // 時刻移動系
      video.currentTime = video.currentTime - 60;
      break;
    case 'KeyS':
      video.currentTime = video.currentTime - 10;
      break;
    case 'KeyD':
      video.currentTime = video.currentTime - 3;
      break;
    case 'KeyF':
      video.currentTime = video.currentTime - 1;
      break;
    case 'KeyJ':
      video.currentTime = video.currentTime + 1;
      break;
    case 'KeyK':
      video.currentTime = video.currentTime + 3;
      break;
    case 'KeyL':
      video.currentTime = video.currentTime + 10;
      break;
    case 'Semicolon':
      video.currentTime = video.currentTime + 60;
      break;
      // 十字キーの→←は15秒+-する（video要素の機能）

    default:
      console.log(`keypress : ${event.code}`);
      break;
    };
  });

  // keypressだと方向キーが取得できないためkeydownを利用
  document.addEventListener('keydown', (event) => {
    switch (event.code) {

    case 'ArrowUp': // 音量
      if (video.volume < 1)
        video.volume = video.volume + volumeUnit;
      console.log('volume : ' + video.volume);
      break;
    case 'ArrowDown':
      if (video.volume > 0)
        video.volume = video.volume - volumeUnit;
      console.log('volume : ' + video.volume);
      break;

    default:
      console.log(`keydown : ${event.code}`);
      break;
    };
  });

};  


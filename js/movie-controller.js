const volumeUnit = 0.1;
const prefixDigit = 'Digit';
let resumeKey = 'before_initialization';
let resumeKeyVolume = 'before_initialization';
let resumeKeyPlaybackRate = 'before_initialization';

function save(name) {
  const video = document.getElementById('video');
  if (video.currentTime !== 0)
    localStorage.setItem(resumeKey, video.currentTime);
}

function copy(text) {
  const textarea = document.querySelector('#copy');
  textarea.textContent = text;
  textarea.select();
  document.execCommand('copy');
  alert(text);
}

// 表示上有効桁数以下を切り捨てる
function displayVolume(video) {
  document.getElementById('volume').innerHTML = Math.round(video.volume * 10) / 10;
}

function onVolumeChanged(video) {
  displayVolume(video);
  localStorage.setItem(resumeKeyVolume, video.volume);
}

function onPlaybackRateChanged(video) {
  document.getElementById('speed').innerHTML = video.playbackRate;
  localStorage.setItem(resumeKeyPlaybackRate, video.playbackRate);
}

window.onload = function() {
  // ファイルパスを取得
  const filePath = new URLSearchParams(window.location.search.substring(1)).get('path');

  document.title = filePath;

  // ↓のようなHTMLを追加する
  // <video id='video' controls>
  //   <source src='パラメータで指定された動画ファイルパス'>
  // </video>
  const video = document.createElement('video');
  video.setAttribute('id', 'video');
  video.setAttribute('controls', true);
  const sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', filePath);
  video.appendChild(sourceElement);
  document.getElementById('left').appendChild(video);

  resumeKey = filePath; // 前回再生時の情報取得・記録ためのキー
  // 続きのデータがあれば、続きからの位置で初期化
  if (localStorage.getItem(resumeKey) !== null)
    video.currentTime = localStorage.getItem(resumeKey);
  window.setInterval(save, 1000 * 3); // 3秒ごとに保存
  
  video.volume = 0.5; // 音量の初期化
  resumeKeyVolume = `${resumeKey}_volume`;
  const resumeVolume = localStorage.getItem(resumeKeyVolume);
  if (resumeVolume !== null)
    video.volume = resumeVolume;
  displayVolume(video);
  
  video.playbackRate = 1.25; // 再生スピードの初期化
  resumeKeyPlaybackRate = `${resumeKey}_playbackRate`;
  const resumePlaybackRate = localStorage.getItem(resumeKeyPlaybackRate);
  if (resumePlaybackRate !== null)
    video.playbackRate = resumePlaybackRate;
  document.getElementById('speed').innerHTML = video.playbackRate;

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

    case 'KeyQ': // 時刻移動系
      video.currentTime = video.currentTime - 60;
      break;
    case 'KeyW':
      video.currentTime = video.currentTime - 30;
      break;
    case 'KeyE':
      video.currentTime = video.currentTime - 15;
      break;
    case 'KeyR':
      video.currentTime = video.currentTime - 3;
      break;
    case 'KeyT':
      video.currentTime = video.currentTime - 1;
      break;
    case 'KeyY':
      video.currentTime = video.currentTime + 1;
      break;
    case 'KeyU':
      video.currentTime = video.currentTime + 3;
      break;
    case 'KeyI':
      video.currentTime = video.currentTime + 15;
      break;
    case 'KeyO':
      video.currentTime = video.currentTime + 30;
      break;
    case 'KeyP':
      video.currentTime = video.currentTime + 60;
      break;
      // 十字キーの→←は15秒+-する（video要素の機能）

    case 'KeyA': // 時刻をtempに記録
      localStorage.setItem('temp', video.currentTime);
      alert(`sキーで${Math.round(video.currentTime)}秒に戻ります`);
      console.log(`keypress : ${event.code}`);
      break;
    case 'KeyS': // 時刻をtempに移動
      video.currentTime = localStorage.getItem('temp');
      break;

    case 'KeyD': // 削除用のコマンドをコピー
      copy(`rm /Volumes/GoogleDrive/My\\ Drive/air/movie-controller/${filePath.substr(0, 10)}`);
      break;

    case 'KeyF': // 全画面
      if (!!video.requestFullScreen) {
	video.requestFullScreen();
      } else if (!!video.webkitRequestFullScreen) {
	video.webkitRequestFullScreen();
      } else if (!!video.webkitEnterFullscreen) {
	video.webkitEnterFullscreen();
      }else if (!!video.mozRequestFullScreen) {
	video.mozRequestFullScreen();
      }else if (!!video.msRequestFullscreen) {
	video.msRequestFullscreen();
      }
      break;

    case 'KeyJ':
      video.currentTime = video.currentTime - 10;
      break;
      // Kは一時停止
    case 'KeyL':
      video.currentTime = video.currentTime + 10;
      break;

    case 'KeyC': // ファイルの先頭9文字をコピー
      copy(filePath.substr(0, 9));
      break;

    default:
      
      if (event.code.indexOf(prefixDigit) === 0) {
	// 動画の 0～90% の位置に移動
	const number = parseInt(event.code.replace(prefixDigit, ''));
	video.currentTime = video.duration * number * 0.1;
      } else {
	console.log(`keypress : ${event.code}`);
      }

      break;
    };
  });

  // keypressだと方向キーが取得できないためkeydownを利用
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
    case 'Enter':
      alert('Enterキーは押さないで!');
      break;

    // 一時停止
    case 'Backspace':
    case 'Space':
    case 'KeyK':
      // SpaceやEnterはvideo要素本来の機能と衝突する
      if (isPlaying === true)
	video.pause();
      else
	video.play();
      break;

    case 'ArrowUp': // 音量
      if (video.volume < 1)
        video.volume = video.volume + volumeUnit;
      onVolumeChanged(video);
      break;
    case 'ArrowDown':
      if (video.volume > 0)
        video.volume = video.volume - volumeUnit;
      onVolumeChanged(video);
      break;

    // ArrowLeftとArrowRightは動画の時刻変更と干渉
    // BracketLeftとBracketRightはタブ切り替えと干渉
    case 'Comma': // 再生速度
      video.playbackRate-=0.25;
      onPlaybackRateChanged(video);
      break;
    case 'Period':
      video.playbackRate+=0.25;
      onPlaybackRateChanged(video);
      break;

    default:
      console.log(`keydown : ${event.code}`);
      break;
    };
  });

};  


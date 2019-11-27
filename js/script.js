const volumeDiff = 0.01;

window.onload = function() {
    const backGround = document.getElementById('back-ground');
    const video = document.getElementById('video');
    video.volume = 0.05;

    document.addEventListener('keypress', (event) => {
        switch (event.key) {
            case 's':
                video.play();
                break;
            case 'p':
                video.pause();
                break;
            case 'a':
                video.volume = 0;
                break;
            case 'e':
                video.volume = 1;
                break;
            case 'l':
                if (video.volume < 1)
                    video.volume = video.volume + volumeDiff;
                break;
            case 'j':
                if (video.volume > 0)
                    video.volume = video.volume - volumeDiff;
                break;
            case 'i':
                if (video.volume < 1)
                    video.volume = video.volume + volumeDiff * 10;
                break;
            case 'k':
                if (video.volume > 0)
                    video.volume = video.volume - volumeDiff * 10;
                break;
            case 'w':
                backGround.setAttribute('class', 'back-ground-white');
                break;
            case 'b':
                backGround.setAttribute('class', 'back-ground-black');
                break;
            default:
                console.log(`keypress:${event.key}`);
                break;
        };
    });
};  
const volumeDiff = 0.01;

window.onload = function() {
    const backGround = document.getElementById('back-ground');
    const video = document.getElementById('video');
    video.volume = 0.05;

    document.addEventListener('keypress', (event) => {
        switch (event.key) {
            case 'd':
                video.play();
                break;
            case 'a':
                video.pause();
                break;
            case 'w':
                if (video.volume < 1)
                    video.volume = video.volume + volumeDiff;
                break;
            case 's':
                if (video.volume > 0)
                    video.volume = video.volume - volumeDiff;
                break;
            case 'e':
                if (video.volume < 1)
                    video.volume = video.volume + volumeDiff * 10;
                break;
            case 'q':
                if (video.volume > 0)
                    video.volume = video.volume - volumeDiff * 10;
                break;
            case 'z':
                video.volume = 0;
                break;
            case 'c':
                video.volume = 1;
                break;
            case 'r':
                backGround.setAttribute('class', 'back-ground-white');
                break;
            case 'f':
                backGround.setAttribute('class', 'back-ground-black');
                break;
            default:
                console.log(`keypress:${event.key}`);
                break;
        };
    });
};  

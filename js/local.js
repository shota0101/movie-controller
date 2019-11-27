const volumeDiff = 0.01;

window.onload = function() {
    const video = document.getElementById("video");

    document.addEventListener('keypress', (event) => {
        switch (event.key) {
            case 's':
                video.play();
                break;
            case 'p':
                video.pause();
                break;
            case 'i':
                if (video.volume < 1)
                    video.volume = video.volume + volumeDiff;
                break;
            case 'k':
                if (video.volume > 0)
                    video.volume = video.volume - volumeDiff;
                break;
            case 'z':
                alert("test");
                break;
            default:
                console.log(`keypress:${event.key}`);
                break;
        };
    });
};  
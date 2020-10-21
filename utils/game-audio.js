

export function createGameAudio(){
    // let audioDiv = document.createElement('div')
    let audioElement = new Audio ('../assets/game-play-music.mp3');

    let dialSection = document.getElementById('dial');

    audioElement.id = 'game-play-music';
    audioElement.loop = true;
    audioElement.volume = .3;
    dialSection.appendChild(audioElement);
}

export function playGameAudio(){
    let audioElement = document.getElementById('game-play-music');
    audioElement.play();
}

export function pauseGameAudio(){
    let audioElement = document.getElementById('game-play-music');
    audioElement.pause();
    audioElement.currentTime = 0;
}


export function createGameAudio(){
    // let audioDiv = document.createElement('div')
    let audioElement = new Audio ('../assets/game-play-music.mp3');

    let dialSection = document.getElementById('dial');

    audioElement.id = 'game-play-music';
    dialSection.appendChild(audioElement);
}

export function playGameAudio(){
    console.log('play')

    let audioElement = document.getElementById('game-play-music');
    audioElement.play();
}

export function pauseGameAudio(){
    console.log('pause')
    let audioElement = document.getElementById('game-play-music');
    audioElement.pause();
    audioElement.currentTime = 0;
}
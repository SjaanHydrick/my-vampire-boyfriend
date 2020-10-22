import { getVolumeLevel, setVolumeLevel } from './manage-local-storage.js';

export function createGameAudio() {
    let audioElement = new Audio('../assets/game-play-music.mp3');
    let dialSection = document.getElementById('dial');

    audioElement.id = 'game-play-music';
    audioElement.loop = true;
    audioElement.volume = getVolumeLevel();

    dialSection.appendChild(audioElement);
}

export function playGameAudio() {
    let audioElement = document.getElementById('game-play-music');
    audioElement.src = ('../assets/game-play-music.mp3');
    audioElement.play();
}

export function playTransitionAudio() {
    let audioElement = document.getElementById('game-play-music');
    audioElement.pause();
    audioElement.src = ('../assets/transition-clip.mp3');
    audioElement.play();
}


export function renderVolumeSlider() {
    let sliderDiv = document.createElement('div');
    let sliderElement = document.createElement('input');
    const ventSection = document.getElementById('vent');

    sliderDiv.id = 'slider-div';

    sliderElement.type = 'range';
    sliderElement.min = 0;
    sliderElement.max = 10;
    sliderElement.value = getVolumeLevel() * 10;
    sliderElement.id = 'volume-slider';


    sliderElement.oninput = function () {
        const volumeLevel = sliderElement.value / 10;
        const gamePlayMusic = document.getElementById('game-play-music');

        setVolumeLevel(volumeLevel);

        if (gamePlayMusic) {
            gamePlayMusic.volume = volumeLevel;
        }

    };

    sliderDiv.appendChild(sliderElement);
    ventSection.appendChild(sliderDiv);
}
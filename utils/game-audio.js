import { getVolumeLevel, setVolumeLevel } from './manage-local-storage.js';

// creates the audio element, appends it to dial section
export function createGameAudio() {
    let audioElement = new Audio('../assets/game-play-music.mp3');
    let dialSection = document.getElementById('dial');

    audioElement.id = 'game-play-music';
    audioElement.loop = true;
    // pulls volume level from local storage
    audioElement.volume = getVolumeLevel();

    dialSection.appendChild(audioElement);
}
// reassigns audio source to game play music and sets it to play.
export function playGameAudio() {
    let audioElement = document.getElementById('game-play-music');
    audioElement.src = ('../assets/game-play-music.mp3');
    audioElement.play();
}
// reassigns audio source to transition music and sets it to play
export function playTransitionAudio() {
    let audioElement = document.getElementById('game-play-music');
    audioElement.src = ('../assets/transition-clip.mp3');
    audioElement.play();
}

// creates volume slider element and appends it to 'vent' section
export function renderVolumeSlider() {
    let sliderDiv = document.createElement('div');
    let sliderElement = document.createElement('input');
    const ventSection = document.getElementById('vent');

    sliderDiv.id = 'slider-div';
    // assigns attributes of volume slider
    sliderElement.type = 'range';
    sliderElement.min = 0;
    sliderElement.max = 10;
    // sliders can only hold integers, volume attributes at percentages
    // we need to do some math to make them match
    // getVolumeLevel pulls volume from local storage
    sliderElement.value = getVolumeLevel() * 10;
    sliderElement.id = 'volume-slider';

    // function that executes as slider moves
    // provides realtime feedback for user 
    sliderElement.oninput = function() {
        const volumeLevel = sliderElement.value / 10;
        const gamePlayMusic = document.getElementById('game-play-music');
        // sets volume level in local storage
        setVolumeLevel(volumeLevel);
        // if there is a music element, sets volume level
        if (gamePlayMusic) {
            gamePlayMusic.volume = volumeLevel;
        }

    };

    sliderDiv.appendChild(sliderElement);
    ventSection.appendChild(sliderDiv);
}
import { setVolumeLevel } from './manage-local-storage.js';
import { renderAvatar, renderUserName } from './render-avatar.js';
import { renderHeart } from './render-heart.js'

export function renderVent(){
    const vent = document.getElementById('vent');

    const volumeSlider = renderVolumeSlider();
    vent.appendChild(volumeSlider);

    const avatar = renderAvatar();
    vent.appendChild(avatar);

    const playerName = renderUserName();
    vent.appendChild(playerName);

    const hearts = renderHeart(vent);

}  

export function renderVolumeSlider(){
    let sliderDiv = document.createElement('div');
    let sliderElement = document.createElement('input');

    sliderElement.type = 'range';
    sliderElement.min = 0;
    sliderElement.max = 10;
    sliderElement.value = 5;
    sliderElement.id = 'volume-slider';
    

    sliderElement.onchange = function() {
        const volumeLevel = sliderElement.value / 10;
        const gamePlayMusic = document.getElementById('game-play-music');
        const transitionMusic = document.getElementById('transition-music');

        setVolumeLevel(volumeLevel);

        if(gamePlayMusic){
            gamePlayMusic.volume = volumeLevel;
        }

        if(transitionMusic){
            transitionMusic.volume = volumeLevel;

        }

    };

    sliderDiv.appendChild(sliderElement);

    return sliderDiv;
}
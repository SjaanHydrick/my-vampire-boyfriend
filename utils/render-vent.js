import { renderVolumeSlider } from './game-audio.js';
import { renderAvatar, renderUserName } from './render-avatar.js';
import { renderHeart } from './render-heart.js'

export function renderVent(){
    const vent = document.getElementById('vent');

    renderVolumeSlider();

    const avatar = renderAvatar();
    vent.appendChild(avatar);

    const playerName = renderUserName();
    vent.appendChild(playerName);

   renderHeart(vent); 

}  

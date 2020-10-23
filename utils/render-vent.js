import { renderVolumeSlider } from './game-audio.js';
import { renderAvatar, renderUserName } from './render-avatar.js';
import { renderHeart } from './render-heart.js';

// renders the vent section of the screen at each new scene
export function renderVent() {
    const vent = document.getElementById('vent');

    renderVolumeSlider();
    // renders Avatar image for vent
    const avatar = renderAvatar();
    vent.appendChild(avatar);
    // renders playerName for vent
    const playerName = renderUserName();
    vent.appendChild(playerName);
    // updates heart counter for vent
    renderHeart(vent);

}  

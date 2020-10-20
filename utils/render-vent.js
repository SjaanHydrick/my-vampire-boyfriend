import { renderAvatar, renderUserName } from './render-avatar.js';

export function renderVent(){
    const vent = document.getElementById('vent');

    const avatar = renderAvatar();
    vent.appendChild(avatar);

    const playerName = renderUserName();
    vent.appendChild(playerName);

}
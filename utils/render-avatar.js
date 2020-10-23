
import { getFromLocalStorage } from './manage-local-storage.js';

// pulls userData from Local Storage, creates an image element, returns it
export function renderAvatar() {

    const userData = getFromLocalStorage();

    const avatar = document.createElement('img');
    avatar.id = 'avatar';
    avatar.src = `../assets/${userData.avatar}`;

    return avatar;
}

// pulls userData from Local Storage, creates a text element, returns it
export function renderUserName() {
    const userData = getFromLocalStorage();

    const playerName = document.createElement('p');
    playerName.id = 'player-name';
    playerName.textContent = userData.name;

    return playerName;
}

import { getFromLocalStorage } from './manage-local-storage.js';


export function renderAvatar(){
    const userData = getFromLocalStorage();

    const avatar = document.createElement('img');
    avatar.id = "avatar";
    avatar.src = `../assets/${userData.avatar}`;

    return avatar;
}

export function renderUserName(){
    const userData = getFromLocalStorage();

    const playerName = document.createElement('p');
    playerName.id = "player-name";
    playerName.textContent = userData.name;

    return playerName;
}

import { getFromLocalStorage } from './manage-local-storage.js';


export function renderAvatar(){
    const userData = getFromLocalStorage();

    let section = document.createElement('section');
    let img = document.createElement('img');
    let span = document.createElement('span');

    section.id = 'avatar';

    img.id = 'avatar-image';
    img.src = `./assets/${userData.gender}`;

    span.id = 'user-name';
    span.textContent = user.name;

    section.appendChild(img);
    section.appendChild(span);

    return section;
}
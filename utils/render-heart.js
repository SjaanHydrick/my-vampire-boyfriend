import { getFromLocalStorage } from './manage-local-storage.js';

const storageKey = 'USERKEY';


function heart(section){
    const heartSpan1 = document.createElement('img');
    heartSpan1.src = '../assets/heart.png';
    heartSpan1.classList.add('heart');
    section.appendChild(heartSpan1);
}

export function renderHeart(section) {
    const player = getFromLocalStorage(storageKey);

    for (let i = 0; i < player.chapters; i++) {
        heart(section);
    }
}
    

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
    

    if (player.chapters === 5) {

        heart(section);
        heart(section);
        heart(section);
        heart(section);
        heart(section);

    }

    if (player.chapters === 4) {

        heart(section);
        heart(section);
        heart(section);
        heart(section);

    }

    if (player.chapters === 3) {
      
        heart(section);
        heart(section);
        heart(section);

    }
    if (player.chapters === 2) {

        heart(section);
        heart(section);

    }
    if (player.chapters === 1) {
    
        heart(section);

    }
}
    

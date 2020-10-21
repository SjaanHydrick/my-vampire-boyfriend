import { getFromLocalStorage } from './manage-local-storage.js';


const storageKey = 'USERKEY';


export function renderHeart(section) {
    const player = getFromLocalStorage(storageKey);
    

    if (player.chapters === 3 ) {
        const heartSpan1 = document.createElement('img');
        heartSpan1.src = '../assets/heart.png';
        heartSpan1.classList.add('heart');
        section.appendChild(heartSpan1)
        const heartSpan2 = document.createElement('img');
        heartSpan2.src = '../assets/heart.png';
        heartSpan2.classList.add('heart');
        section.appendChild(heartSpan2)
        const heartSpan3 = document.createElement('img');
        heartSpan3.src = '../assets/heart.png';
        heartSpan3.classList.add('heart');
        section.appendChild(heartSpan3)
        const heartSpan4 = document.createElement('img');
        heartSpan4.src = '../assets/heart.png';
        heartSpan4.classList.add('heart');
        section.appendChild(heartSpan4)


    }

    if (player.chapters === 2 ) {
        const heartSpan1 = document.createElement('img');
        heartSpan1.src = '../assets/heart.png';
        heartSpan1.classList.add('heart');
        section.appendChild(heartSpan1)
        const heartSpan2 = document.createElement('img');
        heartSpan2.src = '../assets/heart.png';
        heartSpan2.classList.add('heart');
        section.appendChild(heartSpan2)
        const heartSpan3 = document.createElement('img');
        heartSpan3.src = '../assets/heart.png';
        heartSpan3.classList.add('heart');
        section.appendChild(heartSpan3)


    }
    if (player.chapters === 1 ) {
        const heartSpan1 = document.createElement('img');
        heartSpan1.src = '../assets/heart.png';
        heartSpan1.classList.add('heart');
        section.appendChild(heartSpan1)
        const heartSpan2 = document.createElement('img');
        heartSpan2.src = '../assets/heart.png';
        heartSpan2.classList.add('heart');
        section.appendChild(heartSpan2)


    }
    if (player.chapters === 0 ) {
        const heartSpan1 = document.createElement('img');
        heartSpan1.src = '../assets/heart.png';
        heartSpan1.classList.add('heart');
        section.appendChild(heartSpan1)
       


    }
    

}

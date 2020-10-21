import { getFromLocalStorage } from './manage-local-storage.js';




export function renderHeart() {
    const player = getFromLocalStorage();
    console.log(player);
    const heartSpan1 = document.createElement('img');
    heartSpan1.classList.add('heart');

    if (player.chapters === 0) {

        heartSpan1.src = '../assets/heart.png';


    }
    if (player.chapters === 1) {

        heartSpan1.src = '../assets/heart2.png';


    }
    if (player.chapters === 2) {

        heartSpan1.src = '../assets/heart3.png';


    }
    if (player.chapters === 3) {

        heartSpan1.src = '../assets/heart4.png';



    }
    if (player.chapters === 4) {

        heartSpan1.src = '../assets/heart5.png';

    }
    return heartSpan1;

}

import { getFromLocalStorage } from './manage-local-storage.js';


const storageKey = 'USERKEY';





export function renderHeart() {
    const player = getFromLocalStorage(storageKey);
    const heartSpan1 = document.createElement('img');
    

    if (player.chapters === 0) {

        heartSpan1.src = '../assets/heart1.png';
       
        
    } else if (player.chapters === 1) {

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
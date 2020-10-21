
import { setInLocalStorage, getFromLocalStorage } from './manage-local-storage.js';

// const storageKey = 'USERKEY';


export function gameOverYouDied(){
    const player = getFromLocalStorage();
    player.player = 'dead';
    setInLocalStorage(player);
    window.location.href = '../results';
}


export function gameOverVampireDied(){
    const player = getFromLocalStorage();
    player.vampire = 'dead';
    setInLocalStorage(player);
    window.location.href = '../results';
}

export function gameOver(resultObject){
    let userData = getFromLocalStorage();
    userData.results = resultObject;
    setInLocalStorage(userData);


}


export function tofu(){
    const player = getFromLocalStorage();
    player.tofu = true;
    setInLocalStorage(player);
}

export function nextChapter() {
    const player = getFromLocalStorage();
    player.chapters++;
    console.log(player);
    setInLocalStorage(player);
}

export function gameOverMothMan(){
    const player = getFromLocalStorage();
    player.tofu = true;
    setInLocalStorage(player);
    window.location.href = '../results';

}

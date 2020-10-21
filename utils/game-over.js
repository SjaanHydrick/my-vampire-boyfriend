
import { setInLocalStorage, getFromLocalStorage } from './manage-local-storage.js';

// const storageKey = 'USERKEY';


export function gameOverYouDied(){
    const player = getFromLocalStorage();
    player.playerAlive = false;
    setInLocalStorage(player);
    window.location.href = '../results';
}


export function gameOverVampireDied(){
    const player = getFromLocalStorage();
    player.vampireAlive = false;
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
    player.mothMan = true;
    setInLocalStorage(player);
    window.location.href = '../results';

}

export function youWin(){
    const player = getFromLocalStorage();
    player.win = true;
    setInLocalStorage(player);
    window.location.href = '../results';

}
export function isVampire(){
    const player = getFromLocalStorage();
    player.isVampire = true;
    setInLocalStorage(player);
}

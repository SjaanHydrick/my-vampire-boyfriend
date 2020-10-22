import { setInLocalStorage, getFromLocalStorage } from './manage-local-storage.js';

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
export function shallowGrave(){
    const player = getFromLocalStorage();
    player.shallowGrave = true;
    setInLocalStorage(player);
}
export function river(){
    const player = getFromLocalStorage();
    player.river = true;
    setInLocalStorage(player);
}
export function tea(){
    const player = getFromLocalStorage();
    player.tea = true;
    setInLocalStorage(player);
}

export function coffee(){
    const player = getFromLocalStorage();
    player.coffee = true;
    setInLocalStorage(player);
}

export function nextChapter() {
    const player = getFromLocalStorage();
    player.chapters++;
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

export function muchTeeth() {
    const player = getFromLocalStorage();
    player.muchTeeth = true;
    setInLocalStorage(player);
}

export function vampireHunter() {
    const player = getFromLocalStorage();
    player.vampireHunter = true;
    setInLocalStorage(player);
}
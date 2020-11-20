import { setInLocalStorage, getFromLocalStorage } from './manage-local-storage.js';

function sendHome() {
    window.location.href = '../results';
}
export function gameOverYouDied(){
    const player = getFromLocalStorage();
    player.playerAlive = false;
    setInLocalStorage(player);
    sendHome();
}

export function gameOverVampireDied(){
    const player = getFromLocalStorage();
    player.vampireAlive = false;
    setInLocalStorage(player);
    sendHome();
}

export function gameOver(resultObject){
    let userData = getFromLocalStorage();
    userData.results = resultObject;
    setInLocalStorage(userData);
}

function makePlayerTrueSetter(key) {
    return function() {
        const player = getFromLocalStorage();
        player[key] = true;
        setInLocalStorage(player);    
    };
}

export function gameOverMothMan() {
    const mothMan = makePlayerTrueSetter('mothMan');
    mothMan();
    sendHome();
}

export function youWin() {
    const setWin = makePlayerTrueSetter('win');
    setWin();
    sendHome();
}

export function nextChapter() {
    const player = getFromLocalStorage();
    player.chapters++;
    setInLocalStorage(player);
}

export const tofu = makePlayerTrueSetter('tofu');
export const shallowGrave = makePlayerTrueSetter('shallowGrave');
export const river = makePlayerTrueSetter('river');
export const tea = makePlayerTrueSetter('tea');
export const coffee = makePlayerTrueSetter('coffee');
export const isVampire = makePlayerTrueSetter('isVampire');
export const muchTeeth = makePlayerTrueSetter('muchTeeth');
export const vampireHunter = makePlayerTrueSetter('vampireHunter');
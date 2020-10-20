
import { setInLocalStorage, getFromLocalStorage} from './manage-local-storage.js'

const storageKey = 'USERKEY';


export function gameOverYouDied(){
    const player = getFromLocalStorage(storageKey);
    player.player = 'dead';
    setInLocalStorage(player);
    window.location.href = '../results';
}


export function gameOverVampireDied(){
    const player = getFromLocalStorage(storageKey);
    player.vampire = 'dead';
    setInLocalStorage(player);
    window.location.href = '../results';
}

export function gameOver(resultObject){
    let userData = getFromLocalStorage();
    userData.results = resultObject;
    setInLocalStorage(userData);


}
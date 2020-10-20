import { getFromLocalStorage, setInLocalStorage } from './manage-local-storage.js';

export function gameOver(resultObject){
    let userData = getFromLocalStorage();
    userData.results = resultObject;
    setInLocalStorage(userData);

    window.location.href = '../results';
}
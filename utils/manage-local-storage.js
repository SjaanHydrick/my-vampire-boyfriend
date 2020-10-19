
const storageKey = 'USERKEY';

export function setInLocalStorage(newObject){
    localStorage.setItem(storageKey, JSON.stringify(newObject));
}

export function getFromLocalStorage(newObject){
    return JSON.parse(localStorage.getItem(storageKey));
}

export function clearLocalStorage(){
    localStorage.removeItem(storageKey);
}
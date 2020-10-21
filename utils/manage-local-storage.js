
const storageKey = 'USERKEY';
const volumeKey = 'VOLUMEKEY';

export function setInLocalStorage(newObject){
    localStorage.setItem(storageKey, JSON.stringify(newObject));
}

export function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem(storageKey));
}

export function clearLocalStorage(){
    localStorage.removeItem(storageKey);
}


export function setVolumeLevel(volumeLevel){
    localStorage.setItem(volumeKey, JSON.stringify(volumeLevel));
}

export function getVolumeLevel(){
    return JSON.parse(localStorage.getItem(volumeKey));
}
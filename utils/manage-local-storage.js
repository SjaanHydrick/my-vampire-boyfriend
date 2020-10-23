const textKey = 'TEXTKEY';
const storageKey = 'USERKEY';
const volumeKey = 'VOLUMEKEY';

export function setInLocalStorage(newObject) {
    localStorage.setItem(storageKey, JSON.stringify(newObject));
}

export function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(storageKey));
}

export function clearLocalStorage() {
    localStorage.removeItem(storageKey);
}

export function setVolumeLevel(volumeLevel) {
    localStorage.setItem(volumeKey, JSON.stringify(volumeLevel));
}

export function getVolumeLevel() {
    return JSON.parse(localStorage.getItem(volumeKey))
}

export function getTextSpeed() {
    return JSON.parse(localStorage.getItem(textKey));
}

export function setTextSpeed(textSpeed) {
    const array = [65, 55, 45, 35, 25, 15, 5];
    localStorage.setItem(textKey, JSON.stringify(array[textSpeed]));
}
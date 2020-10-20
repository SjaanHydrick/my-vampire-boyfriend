import { getFromLocalStorage } from './manage-local-storage.js';

export function returnUsername(){
    return getFromLocalStorage().name;
}

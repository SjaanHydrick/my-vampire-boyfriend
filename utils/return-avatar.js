import { getFromLocalStorage } from './manage-local-storage.js';

export function returnAvatar() {
    return getFromLocalStorage().avatar;

}
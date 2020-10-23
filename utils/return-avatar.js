import { getFromLocalStorage } from './manage-local-storage.js';
// returns user avatar for JSON generation
export function returnAvatar() {
    return getFromLocalStorage().avatar;

}
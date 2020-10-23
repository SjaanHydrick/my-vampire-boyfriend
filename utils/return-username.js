import { getFromLocalStorage } from './manage-local-storage.js';
// returns userName attributes for JSON
export function returnUsername() {
    return getFromLocalStorage().name;
}

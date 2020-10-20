import { getFromLocalStorage } from './manage-local-storage.js'


const storageKey = 'USERKEY';





export function renderResultText(resultText) {
    const player = getFromLocalStorage(storageKey);
    if (player.vampire === 'dead' && player.tofu === true) {

        resultText.textContent = 'Your vampire BF dies of garlic';

    }


}

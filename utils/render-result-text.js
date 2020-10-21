import { getFromLocalStorage } from './manage-local-storage.js';




export function renderResultText(resultText) {
    const player = getFromLocalStorage();

    if (player.vampire === 'dead' && player.tofu === true) {

        resultText.textContent = `Your tofu is drenched in garlic sauce! Upon taking a whiff, your boyfriend starts to choke and suddenly explodes into a pile of ash!` ;

    }


}



export function renderDatesText(datesText) {
    const player = getFromLocalStorage();

    if (player.chapters === 0) {

        datesText.textContent = `You didn't make it through a single date with your boyfriend.` ;

    }


}






import { getFromLocalStorage } from './manage-local-storage.js';




export function renderResultText(resultText) {
    const player = getFromLocalStorage();

    if (player.vampire === 'dead' && player.tofu === true) {

        resultText.textContent = `Your tofu is drenched in garlic sauce! Upon taking a whiff, your boyfriend starts to choke and suddenly explodes into a pile of ash!` ;

    }

    if (player.mothMan === true){

        resultText.textContent = 'Your vampire boyfirend is lame. It\'s all about the Mothman';
    }

}



export function renderResultImage(image){
    const player = getFromLocalStorage();
    if (player.mothMan === true){
        image.src = '../assets/Vampire_BF.png'
    }

}




export function renderDatesText(datesText) {
    const player = getFromLocalStorage();

    if (player.chapters === 0) {

        datesText.textContent = `You didn't make it through a single date with your boyfriend.` ;

    }
    if (player.chapters === 1) {

        datesText.textContent = `You  made it through a single date with your boyfriend.` ;

    }
    if (player.chapters === 2) {

        datesText.textContent = `You made it through two whole dates with your boyfriend.` ;

    }
    if (player.chapters === 3) {

        datesText.textContent = `You made  it through three  dates with your boyfriend. Do I hear wedding bells?` ;

    }
    if (player.chapters === 4) {

        datesText.textContent = `You made it through four dates with your boyfriend, that pretty impressive.` ;

    }
    if (player.chapters === 5) {

        datesText.textContent = `You made it through all  five dates!` ;

    }


}




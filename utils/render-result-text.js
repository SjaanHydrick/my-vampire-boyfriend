import { coffee } from './game-over.js';
import { getFromLocalStorage } from './manage-local-storage.js';




export function renderResultText(resultText) {
    const player = getFromLocalStorage();

    if (player.win === true && player.isVampire === true) {

        resultText.textContent = `You did it! Your vampire boyfriend loves you so much he turned you into a vampire and you can spend eternity forever.` ;

    } else
    if (player.win === true) {

        resultText.textContent = `You survived!  Your vampire boyfriend is so  accustomed to your presence he's not even actively trying to murder you.` ;

    } else
    if (player.tofu === true && player.vampireAlive === false) {

        resultText.textContent = `Your tofu is drenched in garlic sauce! Upon taking a whiff, your boyfriend starts to choke and suddenly explodes into a pile of ash!` ;

    } else

    if (player.mothMan === true){

        resultText.textContent = 'Your vampire boyfirend is lame. It\'s all about the Mothman';
    } else
    if (player.tea === true && player.playerAlive === false){

        resultText.textContent = 'You died, maybe next time drink something a little more American.';
    } else
    if (player.vampireAlive === false && player.coffee === true){

        resultText.textContent = 'You hugged your boyfriend to death, just like that old fortune teller said... ';
    } else
    
    if (player.playerAlive === false){

        resultText.textContent = 'Whelp you died';
    } else
    if (player.vampireAlive === false){

        resultText.textContent = 'Whelp you killed your vampire boyfriend';
    }



}



export function renderResultImage(image){
    const player = getFromLocalStorage();
    if (player.mothMan === true){
        image.src = '../assets/MothMan.png';
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




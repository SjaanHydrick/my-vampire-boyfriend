
import { getFromLocalStorage } from './manage-local-storage.js';




export function renderResultText(resultText) {
    const player = getFromLocalStorage();

    if (player.win === true && player.isVampire === true) {

        resultText.textContent = `You did it! Your vampire boyfriend loves you so much he turned you into a vampire and you can spend eternity together.` ;

    } else
    if (player.win === true) {

        resultText.textContent = `You survived!  Your vampire boyfriend is so  accustomed to your presence he's not even actively trying to murder you.` ;

    } else
    if (player.tofu === true && player.vampireAlive === false) {

        resultText.textContent = `Your tofu is drenched in garlic sauce! Upon taking a whiff, your boyfriend starts to choke and suddenly explodes into a pile of ash!` ;

    } else
    if (player.shallowGrave === true && player.playerAlive === false) {

        resultText.textContent = 'Your boyfriend kills you and burys your body in a shallow grave. Dating is so hard these days!';

    } else
    
    if (player.river === true && player.playerAlive === false) {

        resultText.textContent = `Oh no your vampire boyfriend kills you and dumps your body in the river, better luck next time.` ;

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

        datesText.textContent = `You  survived the cafeteria, but the cafe was your relationships kryptonite.` ;

    }
    if (player.chapters === 2) {

        datesText.textContent = `You made it through the cafeteria and the cafe! The river walk was where your romance ends.` ;

    }
    if (player.chapters === 3) {

        datesText.textContent = `Your love overcame the cafeteria, the cafe, and a walk on the river, but like so many before you, it ends at a bar.` ;

    }
    if (player.chapters === 4) {

        datesText.textContent = `The cafeteria was filling. The cafe was stimulating. The river walk invigorating. The bar was intoxicating. You made it all the way to your vampire boyfriends house. But this is where your adventure ends.` ;

    }
    if (player.chapters === 5) {

        datesText.textContent = `You made it through all  five dates!` ;

    }


}




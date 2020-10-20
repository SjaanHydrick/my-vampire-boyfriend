import { gameOverYouDied } from '../utils/game-over';
import { updateBeat } from '../utils/render-beat.js';

export const S2B1 = {
    id: 'coffee-shop',
    image: 'coffee-shop.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: [
        'I invited my boyfriend to the cutest little coffee shop for a date.',
        'It\'s open late, which is perfect because I think he\'s allergic to the sun or something.',
        'What kind of drink should I order?'],
    choices: [{
        id: 'coffee',
        response: `Coffee, black.`,
        responseFunction: function() {
            updateBeat(S2B2);
        },
    },
    {
        id: 'latte',
        response: `A super yummy latte`,
        responseFunction: function() {
            updateBeat(S2B3);
        },

    }, 
    {
        id: 'greenTea',
        response: `I'm really more of a tea person, a pot of green tea please!`,
        result: {
            dead: 'player',
            resultText: 'While your tea is steeping, your boyfriend creeps up behind you and finishes you off. You died.' 
        },
        responseFunction: function() {
            gameOverYouDied();
        },
    }
    ]
};

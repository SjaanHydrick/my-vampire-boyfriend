import { gameOverVampireDied, gameOverYouDied } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S3B1 } from './scene-three.js';

export const S2B1 = {
    id: 'coffee-shop',
    image: 'coffee-shop.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: `I invited my boyfriend to the cutest late-night coffee shop for a date. He only goes out at night, I think he's allergic to the sun...? What kind of drink should I order?`,
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
        id: 'green-tea',
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

const S2B2 = {
    id: 'uninterested',
    dialogueBox: `OMG he thinks I'm a total loser, he's acting really cold and hobbling away.`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'pout',
            response: `Pout until he notices you're upset`,
            result: {
                resultText: `Well this date wasn't the best idea. But I know our connection is SO strong, he's just SOoOo dreamy!`
            },
            responseFunction: function() {
                updateScene(S3B1);
            }
        },
        {
            id: 'hugAttack',
            response: 'Sneak up and give him a big hug!',
            result: {
                dead: 'vampire',
                resultText: 'Your boyfriend loses his balance and falls into a huge box of coffee stirrers. Why do those look so sharp?!? He dies.'
            },
            responseFunction: function() {
                gameOverVampireDied();
            }
        }
    ]
};

const S2B3 = {
    id: 'showsInterest',
    dialogueBox: 'Uhh, he seems totally interested in me!!',
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modesty',
            response: 'Show some restraint and pull away',
            responseFunction: function() {
                updateScene(S3B1);
            }
        },
        {
            id: 'cuddle',
            response: 'Cuddle with him!',
            result: {
                dead: 'player',
                resultText: 'Ok, big mistake! Your boyfriend took the opportunity and killed you.'
            },
            responseFunction: function() {
                gameOverYouDied();
            }

        }
    ]
};
import { gameOverVampireDied, gameOverYouDied, nextChapter } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S3B1 } from './scene-three.js';

export const S2B1 = {
    id: 'coffee-shop',
    image: 'cafe.jpg',
    transitionTitle: {
        title: 'Date 2:',
        subtitle: 'coffee shop'
    },
    rightResize: true,
    rightFadeIn: true,
    leftChar: null,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `I invited my boyfriend to the cutest late-night coffee shop for a date. He only goes out at night, I think he's allergic to the sun...? What kind of drink should I order?`,
    buttonChoice: 'nav',
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
        responseFunction: function() {
            updateBeat(S2B4);
        },
    }
    ]
};

const S2B2 = {
    id: 'uninterested',
    leftChar: null,
    rightResize: true,
    rightFadeIn: false,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `OMG he thinks I'm a total loser, he's acting really cold and hobbling away.`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'pout',
            response: `Pout until he notices you're upset`,
            responseFunction: function() {
                updateBeat(S2B5);
            }
        },
        {
            id: 'hugAttack',
            response: 'Sneak up and give him a big hug!',
            responseFunction: function() {
                updateBeat(S2B6);
            }
        }
    ]
};

const S2B3 = {
    id: 'showsInterest',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: 'Uhh, he seems totally interested in me!!',
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modesty',
            response: 'Show some restraint and pull away',
            responseFunction: function() {
                updateScene(S3B1);
                nextChapter();
            }
        },
        {
            id: 'cuddle',
            response: 'Cuddle with him!',
            responseFunction: function() {
                updateBeat(S2B7);
            }

        }
    ]
};

const S2B4 = {
    id: 'teaDeath',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `While your tea is steeping, your boyfriend creeps up behind you and finishes you off. You died.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S2B5 = {
    id: 'sickVamp',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Well this date wasn't the best idea. But I know our connection is SO strong, he's just SOoOo dreamy!`,
    responseFunction: function() {
        updateScene(S3B1);
        nextChapter();
    },
};

const S2B6 = {
    id: 'coffeeDeath',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Your boyfriend loses his balance and falls into a huge box of coffee stirrers. Why do those look so sharp?!? He dies.`,
    responseFunction: function() {
        gameOverVampireDied();
    },
};

const S2B7 = {
    id: 'hugDeath',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Ok, big mistake! Your boyfriend took the opportunity and killed you.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};
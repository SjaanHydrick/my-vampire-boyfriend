import { gameOverVampireDied, gameOverYouDied, nextChapter, tea, coffee } from '../utils/game-over.js';
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
    rightFadeIn: true,
    rightResize: true,
    leftChar: null,
    rightChar: 'Vampire_BF_Crop.png',
    buttonChoice: 'nav',
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
    rightChar: 'Vampire_BF_Crop.png',
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
            id: 'hug-attack',
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
    rightFadeIn: false,
    rightChar: 'Vampire_BF_Crop.png',
    dialogueBox: 'Uhh, he seems totally interested in me!!',
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modesty',
            response: 'Show some restraint and pull away!',
            responseFunction: function() {
                nextChapter();
                updateScene(S3B1);
                
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
    id: 'tea-death',
    leftChar: null,
    rightResize: true,
    rightFadeIn: false,
    rightChar: 'Vampire_BF_Crop.png',
    buttonChoice: 'dial',
    dialogueBox: `While your tea is steeping, your boyfriend creeps up behind you and kisses your neck! He uses a lot of teeth...you're feeling weak...`,
    responseFunction: function() {
        gameOverYouDied();
        tea();
    },
};

const S2B5 = {
    id: 'sick-vamp',
    leftChar: null,
    rightChar: 'Vampire_BF_Crop.png',
    rightResize: true,
    rightFadeOut: true,
    buttonChoice: 'dial',
    dialogueBox: `Well this date wasn't the best idea. But I know our connection is SO strong, he's just SOoOo dreamy!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S3B1);
    },
};

const S2B6 = {
    id: 'coffee-death',
    leftChar: null,
    rightChar: 'Vampire_BF_Crop.png',
    rightResize: true,
    rightFadeOut: true,
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend loses his balance and falls into a huge box of coffee stirrers. Why do those look so sharp?!? He explodes into a pile of ash!`,
    responseFunction: function() {
        coffee();
        gameOverVampireDied();
    },
};

const S2B7 = {
    id: 'hug-death',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_Crop.png',
    buttonChoice: 'dial',
    dialogueBox: `Ok, he's REALLY into necking! And he sure does use a lot of teeth! Actually...that really hurts...`,
    responseFunction: function() {
        gameOverYouDied();
    },
};
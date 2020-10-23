import { gameOverVampireDied, gameOverYouDied, nextChapter, tea, coffee, muchTeeth } from '../utils/game-over.js';
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
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        fadeIn: true,
        resize: true,
    },
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
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: false,
    },
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
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: false,
    },
    dialogueBox: 'Uhh, he seems totally interested in me!!',
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modesty',
            response: 'Show some restraint and pull away!',
            responseFunction: function() {
                updateBeat(S2B8);

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
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: false,
    },
    buttonChoice: 'dial',
    buttonText: 'OH NO!',
    dialogueBox: `While my tea is steeping, my boyfriend creeps up behind my and kisses my neck! He's so sweet! He uses a lot of teeth, tho...I'm feeling weak...`,
    responseFunction: function() {
        tea();
        gameOverYouDied();
    },
};

const S2B5 = {
    id: 'sick-vamp',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `My boyfriend leaves! Well this date wasn't the best. But I know our connection is SO strong, he's just SOoOo dreamy!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S3B1);
    },
};

const S2B6 = {
    id: 'coffee-death',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'SHARP!',
    dialogueBox: `My boyfriend loses his balance and falls into a huge box of coffee stirrers. Why do those look so sharp?!?`,
    responseFunction: function() {
        coffee();
        gameOverVampireDied();
    },
};

const S2B7 = {
    id: 'hug-death',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    dialogueBox: `Ok, he's REALLY into necking! And he sure does use a lot of teeth! Actually...that sorta hurts...`,
    responseFunction: function() {
        muchTeeth();
        gameOverYouDied();
    },
};

const S2B8 = {
    id: 'push-away',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        resize: false,
        fadeIn: false,
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `My boyfriend gets sooooo frustrated when I push him away, it's so cute! He storms off, but it's okay! I know a love like ours is worth the wait!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S3B1);
    },
};
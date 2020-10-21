import { gameOverVampireDied, gameOverYouDied } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S5B1 } from './scene-five.js';

export const S4B1 = {
    id: 'halloween-dance',
    image: 'bar.jpg',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `I never went to prom because my ex is totally crazy. My boyfriend is taking me to this super cool Halloween dance tonight, what should we do first?`,
    choices: [{
        id: 'dance',
        response: `Let's dance!`,
        responseFunction: function() {
            updateBeat(S4B2);
        },
    },
    {
        id: 'drinks',
        response: `I need a drink!`,
        result: {
            resultText: `You order two Bloody Mary's. Your boyfriend takes one sip, gets violently ill, and has to leave...What a lightweight!`
        },
        responseFunction: function() {
            updateScene(S5B1);
        }
    }, 
    {
        id: 'small-talk',
        response: `Make small talk`,
        responseFunction: function() {
            updateBeat(S4B3);
        },
    }
    ]
};

const S4B2 = {
    id: 'dance-floor',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `I'm totally workin' this dance floor! My boyfriends seems uncomfortable, he's so shy and cute. He looks like he's moving in for a kiss!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'not-here',
            response: `Not in front of all these people!`,
            responseFunction: function() {
                updateScene(S4B4);
            }
        },
        {
            id: 'pda',
            response: 'A little PDA never hurt!',
            result: {
                dead: 'vampire',
                resultText: 'A man dressed in a lot of leather comes up behind him and stabs him in the heart with a broom handle. OMG MY BOYFRIEND JUST TURNED TO DUST!!'
            },
            responseFunction: function() {
                gameOverVampireDied();
            }
        }
    ]
};

const S4B3 = {
    id: 'mysterious',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `My boyfriend is so quiet and mysterious and that's why I love him, but I want him to open up to me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'try-harder',
            response: `Try harder to get him to talk`,
            result: {
                resultText: `No luck! But it's okay we're still so in love!!!`
            },
            responseFunction: function() {
                updateScene(S5B1);
            }
        },
        {
            id: 'look-down',
            response: 'Bat your eyelashes and look down at your feet',
            result: {
                dead: 'player',
                resultText: 'He looks excited and pulls you in close...to bite your neck and kill you.'
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        }
    ]
};

const S4B4 = {
    id: 'hot-bothered',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `My boyfriend looks totally hot and bothered. Ok gosh!!! What should I do?!?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'turn-around',
            response: `Just turn around and walk away`,
            result: {
                dead: 'player',
                resultText: 'You turn your back on your boyfriend. Big mistake! He kills you without blinking an eye.'
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        },
        {
            id: 'be-nice',
            response: `Be nice person!`,
            result: {
                resultText: `You try and salvage the night but lose him in the crowd. I love him so much and need to make this work no matter what!!`
            },
            responseFunction: function() {
                updateScene(S5B1);
            }
        }
    ]
};
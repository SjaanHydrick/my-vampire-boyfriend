import { gameOverVampireDied, gameOverYouDied, nextChapter } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S5B1 } from './scene-five.js';

export const S4B1 = {
    id: 'halloween-dance',
    image: 'bar.jpg',
    transitionTitle: {
        title: 'Date 4:',
        subtitle: 'the club'
    },
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `I never went to bars because my ex is totally crazy. My boyfriend is taking me to this super cool Halloween show tonight, what should we do first?`,
    buttonChoice: 'nav',
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
        responseFunction: function() {
            updateBeat(S4B3);
        }
    }, 
    {
        id: 'small-talk',
        response: `Make small talk`,
        responseFunction: function() {
            updateBeat(S4B4);
        },
    }
    ]
};

const S4B2 = {
    id: 'dance-floor',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `I'm totally workin' this dance floor! My boyfriends seems uncomfortable, he's so shy and cute. He looks like he's moving in for a kiss!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'not-here',
            response: `Not in front of all these people!`,
            responseFunction: function() {
                updateBeat(S4B5);
            }
        },
        {
            id: 'pda',
            response: 'A little PDA never hurt!',
            responseFunction: function() {
                updateBeat(S4B6);
            }
        }
    ]
};

const S4B3 = {
    id: 'bloody-mary',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You order two Bloody Mary's. Your boyfriend takes one sip, gets violently ill, and has to leave...What a lightweight!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};

const S4B4 = {
    id: 'mysterious',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `My boyfriend is so quiet and mysterious and that's why I love him, but I want him to open up to me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'try-harder',
            response: `Try harder to get him to talk`,
            responseFunction: function() {
                updateBeat(S4B7);
            }
        },
        {
            id: 'look-down',
            response: 'Bat your eyelashes and look down at your feet',
            responseFunction: function() {
                updateBeat(S4B8);
            }
        }
    ]
};

const S4B5 = {
    id: 'hot-bothered',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `My boyfriend looks totally hot and bothered. Ok gosh!!! What should I do?!?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'turn-around',
            response: `Just turn around and walk away`,
            responseFunction: function() {
                updateBeat(S4B9);
            }
        },
        {
            id: 'be-nice',
            response: `Be nice person!`,
            responseFunction: function() {
                updateBeat(S4B10);
            }
        }
    ]
};

const S4B6 = {
    id: 'hunter',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `A man dressed in a lot of leather comes up behind him and stabs him in the heart with a broom handle. OMG MY BOYFRIEND JUST TURNED TO DUST!!`,
    responseFunction: function() {
        gameOverVampireDied();
    },
};

const S4B7 = {
    id: 'no-luck',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `No luck! But it's okay we're still so in love!!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};

const S4B8 = {
    id: 'excited',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `He looks excited and pulls you in close...to bite your neck and kill you.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S4B9 = {
    id: 'back-turn',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You turn your back on your boyfriend. Big mistake! He kills you without blinking an eye.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S4B10 = {
    id: 'salvage',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You try and salvage the night but lose him in the crowd. I love him so much and need to make this work no matter what!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};
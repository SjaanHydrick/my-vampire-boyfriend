import { gameOverVampireDied, gameOverYouDied, muchTeeth, nextChapter, shallowGrave, vampireHunter } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S5B1 } from './scene-five.js';

export const S4B1 = {
    id: 'bar-scene',
    image: 'bar.jpg',
    transitionTitle: {
        title: 'Date 4:',
        subtitle: 'the bar'
    },
    leftChar: null,
    rightResize: false,
    rightFadeIn: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `My crazy ex never brought me anywhere. But my new boyfriend is taking me to this super cool bar for Halloween night, what should we do first?`,
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
        response: `Make small talk!`,
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
    rightFadeIn: true,
    rightChar: 'Vampire_BF_crop.png',
    dialogueBox: `I'm totally workin' this dance floor! My boyfriend seems uncomfortable, he's so shy and cute. He looks like he's moving in for a kiss!`,
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
    rightFadeIn: false,
    rightFadeOut: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "NEXT DATE!",
    dialogueBox: `I order two Bloody Mary's! I just love the taste of these! My boyfriend takes one sip, gets violently ill, and has to leave...What a lightweight!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};

const S4B4 = {
    id: 'mysterious',
    leftChar: null,
    rightResize: true,
    rightFadeIn: false,
    rightChar: 'Vampire_BF_crop.png',
    dialogueBox: `My boyfriend is so quiet and mysterious and that's why I love him, but I want him to open up to me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'try-harder',
            response: `Try harder to get him to talk!`,
            responseFunction: function() {
                updateBeat(S4B7);
            }
        },
        {
            id: 'look-down',
            response: 'Bat your eyelashes and look down at your feet!',
            responseFunction: function() {
                updateBeat(S4B8);
            }
        }
    ]
};

const S4B5 = {
    id: 'hot-bothered',
    leftChar: null,
    rightFadeIn: false,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    dialogueBox: `My boyfriend looks totally hot and bothered. Ok, gosh!!! What should I do?!?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'turn-around',
            response: `Just turn around and walk away.`,
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
    rightFadeOut: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "DUST?!",
    dialogueBox: `My boyfriend moves closer when suddenly a man dressed in a lot of tacky leather comes up behind him and stabs him in the heart with a broom handle! OMG MY BOYFRIEND JUST TURNED TO DUST!!`,
    responseFunction: function() {
        vampireHunter();
        gameOverVampireDied();
    },
};

const S4B7 = {
    id: 'no-luck',
    leftChar: null,
    rightResize: true,
    rightFadeOut: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "NEXT DATE!",
    dialogueBox: `No such luck! He wanders off into the crowd. But it's okay we're still so in love!!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};

const S4B8 = {
    id: 'excited',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "OH NO!",
    dialogueBox: `He looks excited and pulls me in close...Oh, wait, ouch, he's not very good at necking...`,
    responseFunction: function() {
        shallowGrave();
        gameOverYouDied();
    },
};

const S4B9 = {
    id: 'back-turn',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "OH NO!",
    dialogueBox: `I turn around and stomp away! Oh, but he hugs me from behind and kisses my neck! I knew he loved me too much to ever let me go! But yikes, is he bad at this...He's using too much teeth!`,
    responseFunction: function() {
        muchTeeth();
        gameOverYouDied();
    },
};

const S4B10 = {
    id: 'salvage',
    leftChar: null,
    rightResize: true,
    rightFadeOut: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    buttonText: "NEXT DATE!",
    dialogueBox: `I tried to salvage the night, but lost my boyfriend in the crowd. I love him so much and need to make this work no matter what!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S5B1);
    },
};
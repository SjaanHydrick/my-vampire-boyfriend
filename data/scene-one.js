import { gameOverVampireDied, gameOverYouDied, muchTeeth, nextChapter, tofu } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S2B1 } from './scene-two.js';

export const S1B1 = {
    id: 'cafeteria',
    image: 'cafeteria.jpg',
    tutorial: false,
    transitionTitle: {
        title: 'Date 1:',
        subtitle: 'hospital cafeteria'
    },
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        fadeIn: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    dialogueBox:  `My boyfriend is working the blood drive today, we're going to have lunch in the cafeteria! He's keto or something, normally I'm the only one who eats.`,
    responseFunction: function() {
        updateBeat(S1B2);
    },
};

const S1B2 = {
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        fadeIn: true,
        resize: true,
    },
    tutorial: true,
    buttonChoice: 'nav',
    id: 'cafeteria',
    dialogueBox: 
       `What should I have for lunch?`,
    choices: [{
        id: 'meat',
        response: `A steak, rare please!`,
        responseFunction: function() {
            updateBeat(S1B3);
        },
    },
    {
        id: 'salad',
        response: `I'll go with salad, my boyfriend says he prefers vegetarians.`,
        responseFunction: function() {
            updateBeat(S1B4);
        },

    }, 
    {
        id: 'tofu',
        response: `I'm feeling a little vegan today, I'll get the tofu stir-fry!`,
        responseFunction: function() {
            updateBeat(S1B5);
        },
    }
    ]
};

const S1B3 = {
    id: 'feed',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        fadeIn: false,
        resize: true,
    },
    tutorial: false,
    dialogueBox: `Wow he seems like he might want to share this with me, how romantic! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'meatSick',
            response: `I'll give him a little bite...`,
            responseFunction: function() {
                updateBeat(S1B6);
            }               
        },
        {
            id: 'pushAway',
            response: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            responseFunction: function() {
                updateBeat(S1B8);
            }               
        }
    ]
};
                
const S1B4 = {
    id: 'letHim',
    leftChar: null,
    rightChar: {
        src:'Vampire_BF_Crop.png',
        resize: true,
    },
    dialogueBox: `Omg he's leaning closer to my neck`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'youDie',
            response: `I'll let him...`,
            responseFunction: function() {
                updateBeat(S1B7);
            }
        },
        {
            id: 'pushAway',
            response: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            responseFunction: function() {
                updateBeat(S1B8);
            }
        }]
};

const S1B5 = {
    id: 'tofuDeath',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'OH NO!',
    dialogueBox: `The stir-fry contains an obscene amount of garlic, just how I like it! Oh no, my boyfriend isn't looking too great...`,
    responseFunction: function() {
        tofu();
        gameOverVampireDied();
    },
};

const S1B6 = {
    id: 'sickVamp',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE',
    dialogueBox: `Oh no! My boyfriend gets sick and has to leave. It must have been something he ate!`,
    responseFunction: function() {
        nextChapter(); 
        updateScene(S2B1);
       
    },
};

const S1B7 = {
    id: 'firstYouDie',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    buttonChoice: 'dial',
    buttonText: 'YOU DIED!',
    dialogueBox: `Oh wow he likes to use a lot of teeth...I'm actually feeling pretty weak...`,
    responseFunction: function() {
        muchTeeth();
        gameOverYouDied();
    
    }
};

const S1B8 = {
    id: 'pushAwayMessage',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `Haha, my boyfriend got so frustrated that he got up and left. I love driving him crazy!`,
    responseFunction: function() {
        nextChapter(); 
        updateScene(S2B1);
    }
};


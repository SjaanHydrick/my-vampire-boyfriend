import { gameOverYouDied, gameOverMothMan, nextChapter, river } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S4B1 } from './scene-four.js';

export const S3B1 = {
    id: 'riverwalk',
    image: 'riverwalk.jpg',
    transitionTitle: {
        title: 'Date 3:',
        subtitle: 'River Walk'
    },
    leftChar: null,
    rightFadeIn: true,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'nav',
    dialogueBox: `Tonight we're taking the most romantic walk along the river. My boyfriend loves coming here, but it's a little creepy because lots of people go missing. Where to?`,
    choices: [{
        id: 'crowded-path',
        response: `Stay on crowded path`,
        responseFunction: function() {
            updateBeat(S3B2);
        },
    },
    {
        id: 'secret-path',
        response: `Take a secret secluded path`,
        responseFunction: function() {
            updateBeat(S3B3);
        },

    }, 
    {
        id: 'bench',
        response: `Sit on a cute bench`,
        responseFunction: function() {
            updateBeat(S3B4);
        },
    }
    ]
};

const S3B2 = {
    id: 'distracted',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Umm ok wow, he seems really interested in that crowd of people over there, but I want him to pay attention to me!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'snuggle',
            response: `Snuggle up to him for attention`,
            responseFunction: function() {
                updateBeat(S3B5);
            }
        },
        {
            id: 'make-scene',
            response: 'Make a huge scene!',
            responseFunction: function() {
                updateBeat(S3B7);
            }
        }
    ]
};

const S3B3 = {
    id: 'alcove',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Ok, it is totally spooky here but my boyfriend looks like he wants to snuggle! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modest',
            response: `Be modest and walk away`,
            responseFunction: function() {
                updateBeat(S3B8);
            }
        },
        {
            id: 'go-for-it',
            response: 'Go for it!',
            responseFunction: function() {
                updateBeat(S3B9);
            }
        }
    ]
};

const S3B4 = {
    id: 'bench-snuggle',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `This is so hot! He's breathing so heavy, and leaning towards me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'walk-away',
            response: `This is moving way too fast, just walk away`,
            responseFunction: function() {
                updateBeat(S3B10);
            }
        },
        {
            id: 'do-it',
            response: `Ummm let's do it!`,
            responseFunction: function() {
                updateBeat(S3B11);
            }
        }
    ]
};

const S3B5 = {
    id: 'connection',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Well this date wasn't the best idea. But I know our connection is SO strong, he's just SOoOo dreamy!`,
    responseFunction: function() {
        updateBeat(S3B6);
    },
};

const S3B6 = {
    id: 'got-him',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Ok I totally have his attention, he's leaning in to kiss my neck! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'kiss-him',
            response: `Kiss him first!`,
            responseFunction: function() {
                updateBeat(S3B12);
            }
        },
        {
            id: 'let-it-happen',
            response: `Just let it happen!`,
            responseFunction: function() {
                updateBeat(S3B13);
            }
        }
    ]
};

const S3B7 = {
    id: 'mothman',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You start yelling about how you deserve love and affection! Suddenly, MothMan appears...and he will definitely treat you right.`,
    responseFunction: function() {
        gameOverMothMan();
    },
};

const S3B8 = {
    id: 'dump-body',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `A jogger just ran by and my boyfriend started to follow them. Haha I drive him so crazy!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B9 = {
    id: 'shallow-grave',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend kills you and burys your body in a shallow grave. Dating is so hard these days!`,
    responseFunction: function() {
        river();
        gameOverYouDied();
    },
};

const S3B10 = {
    id: 'dump-body',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Ok that ROBBER just tried to grab my bag!! My boyfriend is chasing after him, he's so brave!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B11 = {
    id: 'dump-body',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend drains the blood from your veins and dumps your body in the river. Better luck next time!`,
    responseFunction: function() {
        river();
        gameOverYouDied();
    },
};

const S3B12 = {
    id: 'falls',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You kiss him on the cheek and he's so surprised he stumbles and falls right into the river! Your poor boyfriend!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B13 = {
    id: 'howl',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `He leans in VERY close but then there's a howl from deep in the woods. Your super mysterious boyfriend darts away!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};
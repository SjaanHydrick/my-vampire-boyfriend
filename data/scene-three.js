import { gameOverYouDied } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
// import { S4B1 } from './scene-four.js';

export const S3B1 = {
    id: 'riverwalk',
    image: 'riverwalk.jpg',
    leftChar: null,
    rightChar: "Vampire_BF.png",
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
    rightChar: "Vampire_BF.png",
    dialogueBox: `Umm ok wow, he seems really interested in that crowd of people over there, but I want him to pay attention to me!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'snuggle',
            response: `Snuggle up to him for attention`,
            result: {
                resultText: `Well this date wasn't the best idea. But I know our connection is SO strong, he's just SOoOo dreamy!`
            },
            responseFunction: function() {
                updateScene(S3B5);
            }
        },
        {
            id: 'make-scene',
            response: 'Make a huge scene!',
            result: {
                resultText: 'You start yelling about how you deserve love and affection! Suddenly, MothMan appears...and he will definitely treat you right.'
            },
            responseFunction: function() {
                gameOverMothMan();
            }
        }
    ]
};

const S3B3 = {
    id: 'alcove',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `Ok, it is totally spooky here but my boyfriend looks like he wants to snuggle! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modest',
            response: `Be modest and walk away`,
            result: {
                resultText: `A jogger runs just ran by and my boyfriend started to follow them. Haha I drive him so crazy!`
            },
            responseFunction: function() {
                updateScene(S4B1);
            }
        },
        {
            id: 'go-for-it',
            response: 'Go for it!',
            result: {
                dead: 'player',
                resultText: 'Your boyfriend drains the blood from your veins and dumps your body in the river. Better luck next time!'
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        }
    ]
};

const S3B4 = {
    id: 'bench-snuggle',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `This is so hot! He's breathing so heavy, and leaning towards me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'walk-away',
            response: `This is moving way too fast, just walk away`,
            result: {
                resultText: `Ok that ROBBER just tried to grab my bag!! My boyfriend is chasing after him, he's so brave!`
            },
            responseFunction: function() {
                updateScene(S4B1);
            }
        },
        {
            id: 'do-it',
            response: `Ummm let's do it!`,
            result: {
                dead: 'player',
                resultText: 'Your boyfriend drains the blood from your veins and dumps your body in the river. Better luck next time!'
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        }
    ]
};

const S3B5 = {
    id: 'got-him',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `Ok I totally have his attention, he's leaning in to kiss my neck! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'kiss-him',
            response: `Kiss him first!`,
            result: {
                resultText: `You kiss him on the cheek and he's so surprised he stumbles and falls right into the river! Your poor boyfriend!!`
            },
            responseFunction: function() {
                updateScene(S4B1);
            }
        },
        {
            id: 'let-it-happen',
            response: `Just let it happen!`,
            result: {
                resultText: `He leans in VERY close but then there's a howl from deep in the woods. Your super mysterious boyfriend darts away!`
            },
            responseFunction: function() {
                updateScene(S4B1);
            }
        }
    ]
};
import { gameOverVampireDied, gameOverYouDied, youWin, isVampire } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';

export const S5B1 = {
    id: 'vampire-lair',
    image: 'lair.jpg',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `Best night EVER! My boyfriend let me follow him back to his place. Wow it's so cavernous and dark, where should I go first?`,
    choices: [{
        id: 'library',
        response: `Check out the library`,
        responseFunction: function() {
            updateBeat(S5B2);
        }
    },
    {
        id: 'music',
        response: `Where's the music room?`,
        responseFunction: function() {
            updateBeat(S5B3);
        }
    },
    {
        id: 'tower',
        response: `Ascend the creepy tower`,
        result: {
            dead: 'player',
            resultText: `Hey...there's a coffin just my size in here! Your boyfriend kills you and buries you in an unmarked grave.` 
        },
        responseFunction: function() {
            gameOverYouDied();
        },
    }]
};

const S5B2 = {
    id: 'books',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `Ok wow there are SO many books in here!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'peruse',
            response: `Peruse the shelves`,
            responseFunction: function() {
                updateBeat(S5B4);
            }
        },
        {
            id: 'ew',
            response: `Ew books...I'd rather get cozy`,
            result: {
                dead: 'player',
                resultText: 'Your boyfriend also wants to get cozy...he sinks his fangs in you and kills you.'
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        }
    ]
};

const S5B3 = {
    id: 'beautiful',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `Wow these instruments are so old and weird and dusty. My boyfriend isn't really paying attention to what I'm saying, he's just leaning in close...`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'yes-please',
            response: 'Yes puh-lease!',
            result: {
                dead: 'vampire',
                resultText: `A vampire hunter bursts through a window and stabs your boyfriend straight throught the heart! :'(`
            },
            responseFunction: function() {
                gameOverVampireDied();
            }
        },
        {
            id: 'no-please',
            response: 'Um no thanks',
            result: {
                resultText: 'Your vampire boyfriend surprisingly decides to reward your modest behavior by letting you live! Congrats!'
            },
            responseFunction: function() {
                youWin();
            }

        }
    ]
};

const S5B4 = {
    id: 'vampire-books',
    leftChar: null,
    rightChar: "Vampire_BF.png",
    dialogueBox: `OMG what?! There are so many books about vampires here...why would he--WAIT A MINUTE`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'run',
            response: `RUN!!!!!`,
            result: {
                dead: 'player',
                resultText: `You know his secret, you must die.`
            },
            responseFunction: function() {
                gameOverYouDied();
            }
        },
        {
            id: 'true-love',
            response: `Whatevs, you love him!`,
            result: {
                resultText: 'Your boyfriend loves you too and wants to be with you forever! He turns you into a vampire!!'
            },
            responseFunction: function() {
                isVampire()
                youWin();

            }
        }
    ]
};
import { gameOverVampireDied, gameOverYouDied, youWin, isVampire, nextChapter } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';

export const S5B1 = {
    id: 'vampire-lair',
    image: 'lair.jpg',
    transitionTitle: {
        title: 'Date 5:',
        subtitle: "my boyfriend's liar"
    },
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'nav',
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
            updateBeat(S5B4);
        },
    }]
};

const S5B2 = {
    id: 'books',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Ok wow there are SO many books in here!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'peruse',
            response: `Peruse the shelves`,
            responseFunction: function() {
                updateBeat(S5B5);
            }
        },
        {
            id: 'ew',
            response: `Ew books...I'd rather get cozy`,
            responseFunction: function() {
                updateBeat(S5B6);
            }
        }
    ]
};

const S5B3 = {
    id: 'beautiful',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `Wow these instruments are so old and weird and dusty. My boyfriend isn't really paying attention to what I'm saying, he's just leaning in close...`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'yes-please',
            response: 'Yes puh-lease!',
            responseFunction: function() {
                updateBeat(S5B7);
            }
        },
        {
            id: 'no-please',
            response: 'Um no thanks',
            responseFunction: function() {
                updateBeat(S5B8);
            }

        }
    ]
};

const S5B4 = {
    id: 'coffin',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Hey...there's a coffin just my size in here! Your boyfriend kills you and buries you in an unmarked grave.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S5B5 = {
    id: 'vampire-books',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    dialogueBox: `OMG what?! There are so many books about vampires here...why would he--WAIT A MINUTE`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'run',
            response: `RUN!!!!!`,
            responseFunction: function() {
                updateBeat(S5B9);
            }
        },
        {
            id: 'true-love',
            response: `Whatevs, you love him!`,
            responseFunction: function() {
                updateBeat(S5B10);

            }
        }
    ]
};

const S5B6 = {
    id: 'also-cozy',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend also wants to get cozy...he sinks his fangs in you and kills you.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S5B7 = {
    id: 'vampire-hunter',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `A vampire hunter bursts through a window and stabs your boyfriend straight throught the heart! :(`,
    responseFunction: function() {
        gameOverVampireDied();
    },
};

const S5B8 = {
    id: 'you-win',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Your vampire boyfriend surprisingly decides to reward your modest behavior by letting you live! Congrats!`,
    responseFunction: function() {
        nextChapter()

        youWin();
    },
};

const S5B9 = {
    id: 'die',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `You know his secret, there is nowhere to run, so you must die.`,
    responseFunction: function() {
        gameOverYouDied();
    },
};

const S5B10 = {
    id: 'turn-vampire',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF.png',
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend loves you too and wants to be with you forever! He turns you into a vampire!!`,
    responseFunction: function() {
        nextChapter()
        isVampire();
        youWin();
    },
};
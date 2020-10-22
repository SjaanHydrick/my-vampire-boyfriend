import { gameOverVampireDied, gameOverYouDied, youWin, isVampire, nextChapter, muchTeeth, vampireHunter, shallowGrave } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';

export const S5B1 = {
    id: 'vampire-lair',
    image: 'lair.jpg',
    transitionTitle: {
        title: 'Date 5:',
        subtitle: "boyfriend's lair"
    },
    leftChar: null,
    rightResize: false,
    rightFadeIn: true,
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
        response: `Ascend the creepy tower!`,
        responseFunction: function() {
            updateBeat(S5B4);
        },
    }]
};

const S5B2 = {
    id: 'books',
    leftChar: null,
    rightResize: true,
    rightFadeIn: true,
    rightChar: 'Vampire_BF_crop.png',
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
    rightFadeIn: true,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    dialogueBox: `Wow these instruments are so old and weird and dusty. My boyfriend isn't really paying attention to what I'm saying, he's just leaning in close...`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'yes-please',
            response: 'Yes, puh-lease!',
            responseFunction: function() {
                updateBeat(S5B7);
            }
        },
        {
            id: 'no-please',
            response: 'Um, no thanks.',
            responseFunction: function() {
                updateBeat(S5B8);
            }

        }
    ]
};

const S5B4 = {
    id: 'coffin',
    leftChar: null,
    rightFadeIn: false,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `Hey...there's a coffin just my size in here! Haha, he's so thoughtful. He gives me a long hug from behind and kisses my neck. Oh, things are getting sorta dark...`,
    responseFunction: function() {
        muchTeeth();
        gameOverYouDied();
    },
};

const S5B5 = {
    id: 'vampire-books',
    leftChar: null,
    rightResize: true,
    rightFadeIn: false,
    rightChar: 'Vampire_BF_crop.png',
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
    rightFadeIn: false,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `I cozy up to my boyfriend and he kisses my neck! Oh, jeez, he's not very good at this at all. He's using way too much teeth!`,
    responseFunction: function() {
        muchTeeth();
        gameOverYouDied();
    },
};

const S5B7 = {
    id: 'vampire-hunter',
    leftChar: null,
    rightResize: true,
    rightFadeOut: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `Your boyfriend leans close when suddenly a vampire hunter bursts through a boarded-up window and stabs him straight throught the heart! :(`,
    responseFunction: function() {
        vampireHunter();
        gameOverVampireDied();
    },
};

const S5B8 = {
    id: 'you-win',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `My boyfriend slumps into a chair. Haha, I love driving him crazy like this! He stops following me around as much while I explore his house. That's fine, because I like my space!`,
    responseFunction: function() {
        nextChapter();
        youWin();
    },
};

const S5B9 = {
    id: 'die',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `Now that I know his secret, I have to escape! I run back to the entrance, but the moment my hands touch the doorknob I feel the vampire grab me from behind and everything turns black...`,
    responseFunction: function() {
        shallowGrave();
        gameOverYouDied();
    },
};

const S5B10 = {
    id: 'turn-vampire',
    leftChar: null,
    rightResize: true,
    rightChar: 'Vampire_BF_crop.png',
    buttonChoice: 'dial',
    dialogueBox: `Haha, I don't care that my boyfriend is a vampire! I love him anyway! He's very impressed with me, I can tell. He ends up making me a vampire, too! Now we can really be together forever!`,
    responseFunction: function() {
        nextChapter();
        isVampire();
        youWin();
    },
};
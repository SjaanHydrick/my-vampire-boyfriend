import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S1B1 } from './scene-one.js';
import { returnUsername } from '../utils/return-username.js';
import { returnAvatar } from '../utils/return-avatar.js';
// each JSON element provides the data for a single beat of the story.  
// each attribute of the JSON lets 'renderScene' and 'renderBeat' which elements to render
// and also what functionality those beats will have.
// It also connects the JSON's with each other.  A ton of the work of the story is done in these story files
export const I1 = {
    id: 'intro',
    image: 'intro.jpg',
    volumeSlider: true,
    transitionTitle: {
        title: 'Introduction:',
        subtitle: 'the hospital'
    },
    leftChar: {
        src: returnAvatar(),
    },
    rightChar: null,
    dialogueBox:
        `Hi!  My name is ${returnUsername()}, and I'm a nurse!`,
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    responseFunction: function() {
        updateBeat(I2);
    },
};

const I2 = {
    id: 'intro',
    leftChar: {
        src: returnAvatar(),
    },
    rightChar: {
        src: 'Vampire_BF.png',
        fadeIn: true,
    },
    dialogueBox:
        'I met my boyfriend at the local hospital.  He was picking up blood for the bloodbank.',
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    responseFunction: function() {
        updateBeat(I3);
    },
};

const I3 = {
    id: 'intro',
    leftChar: {
        src: returnAvatar(),
    },
    rightChar: {
        src: 'Vampire_BF.png',
    },
    dialogueBox:
        'I never flirt with men at work, but I made an exception for this cutie!',
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    responseFunction: function() {
        updateBeat(I4);
    },
};

const I4 = {
    id: 'intro',
    leftChar: {
        src: returnAvatar(),
    },
    rightChar: {
        src: 'Vampire_BF.png',
        fadeOut: true,
    },
    dialogueBox:
        "Did I mention I'm a nurse?  Because I'm a nurse.",
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    responseFunction: function() {
        updateBeat(I5);
    },
};



const I5 = {
    id: 'intro',
    leftChar: {
        src: returnAvatar(),
    },
    dialogueBox:
        "I'm about to meet him for our first date in the cafeteria!",
    buttonChoice: 'dial',
    buttonText: 'NEXT',
    responseFunction: function() {
        updateScene(S1B1);
    },
};
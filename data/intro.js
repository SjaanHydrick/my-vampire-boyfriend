import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S1B1 } from './scene-one.js';
import { returnUsername } from '../utils/return-username.js';
import { returnAvatar } from '../utils/return-avatar.js';

export const I1 = {
    id: 'intro',

    image: 'intro.jpg',
    char: returnAvatar(),
    dialogueBox: 
        `Hi!  My name is ${returnUsername()}, and I'm a nurse!`,
    buttonChoice: 'dial',

    responseFunction: function() {
        updateBeat(I2);
    },
};

const I2 = {
    id: 'intro',
    dialogueBox: 
        'I met my boyfriend at the local hospital where he was picking up blood for the bloodbank.',
    buttonChoice: 'dial',

    responseFunction: function() {
        updateBeat(I3);
    },
};

const I3 = {
    id: 'intro',
    dialogueBox: 
        'I never flirt with men at work, but I made an exception for this cutie!',
    buttonChoice: 'dial',

    responseFunction: function() {
        updateBeat(I4);
    },
};

const I4 = {
    id: 'intro',
    dialogueBox: 
        "Did I mention I'm a nurse?  Because I'm a nurse.",
    buttonChoice: 'dial',
    responseFunction: function() {
        updateScene(S1B1);
    },
};



const I5 = {
    id: 'intro',
    dialogueBox: 
        "I'm about to meet him for our first date in the cafeteria!",
    buttonChoice: 'dial',
    responseFunction: function() {
        updateScene(S1B1);
    },
};
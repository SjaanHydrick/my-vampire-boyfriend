import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S1B1 } from './scene-one.js';
import { getFromLocalStorage } from '../utils/manage-local-storage.js';

function returnsUserName(){
    return [getFromLocalStorage().name];
}

export const I1 = {
    id: 'intro',
    image: 'intro.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: 
        `He doesn't talk much, but thats ok.  I talk enough for the both of us! I met my boyfriend at the local hospital where he was picking up blood for the bloodbank`,
    buttonChoice: 'dial',
    responseFunction: function() {
        updateBeat(I2);
    },
};

const I2 = {
    id: 'intro',
    dialogueBox: 
        'I met my boyfriend at the local hospital where he was picking up blood for the bloodbank. I never flirt with men at work, but I made an exception for this cutie!',
    buttonChoice: 'dial',
    responseFunction: function() {
        updateBeat(I3);
    },
};

const I3 = {
    id: 'intro',
    dialogueBox: 
        "Did I mention I'm a nurse?  Because I'm a nurse.",
    buttonChoice: 'dial',
    responseFunction: function() {
        updateBeat(I4);
    },
};

const I4 = {
    id: 'intro',
    dialogueBox: 
        "I'm about to meet him for our first date in the cafeteria!",
    buttonChoice: 'dial',
    responseFunction: function() {
        updateScene(S1B1);
    },
};
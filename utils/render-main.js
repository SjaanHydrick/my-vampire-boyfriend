import { renderScene } from './render-scene.js';
import { I1 } from '../data/intro.js';
import { createGameAudio } from './game-audio.js';

//  This is the .js file that runs when loading /main/index.
// creates audio label so it can be played later
createGameAudio();

// loads the first story section
renderScene(I1);

import { renderScene } from './render-scene.js';
import { I1 } from '../data/intro.js';
import { createGameAudio } from './game-audio.js';
import { setVolumeLevel } from './manage-local-storage.js';

setVolumeLevel(0.5);
createGameAudio();

renderScene(I1);




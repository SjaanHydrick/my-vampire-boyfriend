import { renderScene } from './render-scene.js';
import { renderVent } from './render-vent.js';
import { S1B1 } from '../data/scene-one.js';
import { I1 } from '../data/intro.js';

// runs when screen first starts.  Renders Scene 1 Beat 1, and renders the 'vent' section
const screen = document.querySelector("#screenframe");

const renderedScene = renderScene(I1);

screen.appendChild(renderedScene);

renderVent();

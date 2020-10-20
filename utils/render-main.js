import { renderScene } from './render-scene.js';
import { renderVent } from './render-vent.js';
import { S1B1 } from '../data/scene-one.js';


const screen = document.querySelector('#screenframe');

const renderedScene = renderScene(S1B1);

screen.appendChild(renderedScene);

renderVent();

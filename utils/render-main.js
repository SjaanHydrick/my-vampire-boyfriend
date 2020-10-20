import { renderScene } from './render-scene.js';
import { renderVent } from './render-vent.js';
import { S1B1 } from '../data/scene-one.js';

<<<<<<< HEAD
// runs when screen first starts.  Renders Scene 1 Beat 1, and renders the 'vent' section
const screen = document.querySelector("#screenframe");
=======

const screen = document.querySelector('#screenframe');
>>>>>>> cccbf3addc8c03358cc3b160712745fcdce9be5e

const renderedScene = renderScene(S1B1);

screen.appendChild(renderedScene);

renderVent();

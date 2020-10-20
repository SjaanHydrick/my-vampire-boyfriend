import { renderScreen } from "./render-screen.js";
import { renderVent } from "./render-vent.js";
import { cafeteria } from "../data/scenes.js";


const screen = document.querySelector("#screenframe");

renderVent();

const renderedScreen = renderScreen(cafeteria);

screen.appendChild(renderedScreen);
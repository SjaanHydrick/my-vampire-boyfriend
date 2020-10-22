import { getTextSpeed, setTextSpeed } from './manage-local-storage.js';
import { typeWriter } from './render-dialogue-box.js';

export function renderTextSpeedSlider() {

    let sliderDiv = document.createElement('div');
    let sliderElement = document.createElement('input');
    const ventSection = document.getElementById('vent');
    const label = document.createElement('p');

    label.textContent = 'text speed';
    label.id = 'text-speed-label';
    label.classList.add = "label-class";

    sliderDiv.id = 'text-slider-div';

    sliderElement.type = 'range';
    sliderElement.min = 5;
    sliderElement.max = 50;
    sliderElement.value = getTextSpeed();
    sliderElement.id = 'text-slider';

    sliderElement.oninput = function () {
        setTextSpeed(sliderElement.value);
    }

    sliderDiv.appendChild(sliderElement);
    sliderDiv.appendChild(label);


    ventSection.appendChild(sliderDiv);

    let exampleTextBox = createExampleTextBox();
    ventSection.appendChild(exampleTextBox);
    runExampleTextBox();

}

function createExampleTextBox() {
    let textDiv = document.createElement('div');
    let textP = document.createElement('p');

    textDiv.id = "example-text-div";
    textP.id = "example-text-p";

    textDiv.appendChild(textP);

    return textDiv;
}

function exampleTypeWriter(textP, text, i) {
    let speed = getTextSpeed();

    if (i < text.length) {
        textP.textContent += text.charAt(i);
        i++
        setTimeout(function () {
            exampleTypeWriter(textP, text, i)
        }, speed);
    }

}

function runExampleTextBox() {
    const text = " I love my vampire boyfriend!"
    let textP = document.getElementById("example-text-p");
    let currentSpeed = getTextSpeed();
    let renderSpeed = currentSpeed * 32;

    setInterval(function () {
        let i = 0;
        exampleTypeWriter(textP, text, i);
        textP.textContent = "";
    }, 2500);

}
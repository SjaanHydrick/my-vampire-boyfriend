import { getTextSpeed, setTextSpeed } from './manage-local-storage.js';

// creates text speed slider for character creation page
export function renderTextSpeedSlider() {

    let sliderDiv = document.createElement('div');
    let sliderElement = document.createElement('input');
    const ventSection = document.getElementById('vent');
    const textLabel = document.createElement('p');
    const volumeLabel = document.createElement('p');
    // creates volume label, differentiates between the two sliders
    volumeLabel.textContent = 'volume';
    volumeLabel.id = 'volume-label';
    volumeLabel.classList.add = 'label-class';

    // creates label for text speed label
    textLabel.textContent = 'text speed';
    textLabel.id = 'text-speed-label';
    textLabel.classList.add = 'label-class';

    sliderDiv.id = 'text-slider-div';
    // slider attribute setup
    // because larger numbers mean slower text rendering
    // we created an array with 7 settings for the user to choose from
    sliderElement.type = 'range';
    sliderElement.min = 0;
    sliderElement.max = 6;
    // pulls text speed from local storage
    sliderElement.value = getTextSpeed();
    sliderElement.id = 'text-slider';

    // if user changes sliders, sets change in local storage
    sliderElement.oninput = function() {
        setTextSpeed(sliderElement.value);
    };

    sliderDiv.appendChild(volumeLabel);
    sliderDiv.appendChild(sliderElement);
    sliderDiv.appendChild(textLabel);

    ventSection.appendChild(sliderDiv);
    // creates example text box to illustrate to user the change in text speed
    let exampleTextBox = createExampleTextBox();
    ventSection.appendChild(exampleTextBox);
    // starts text box interval
    runExampleTextBox();

}
// creates example text box for allowing user to choose what speed 
// the text will render
function createExampleTextBox() {
    let textDiv = document.createElement('div');
    let textP = document.createElement('p');

    textDiv.id = 'example-text-div';
    textP.id = 'example-text-p';

    textDiv.appendChild(textP);

    return textDiv;
}
// creates text sample, and sets interval for text to render
function runExampleTextBox() {
    const text = ' I love my vampire boyfriend!';
    let textP = document.getElementById('example-text-p');

    setInterval(function() {
        let i = 0;
        exampleTypeWriter(textP, text, i);
        textP.textContent = '';
    }, 2500);

}

// recursive typeWriter app, grabs speed from local storage and renders the letters
// one at a time
function exampleTypeWriter(textP, text, i) {
    let speed = getTextSpeed();

    if (i < text.length) {
        textP.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            exampleTypeWriter(textP, text, i);
        }, speed);
    }

}


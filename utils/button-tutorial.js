
export function buttonTutorial() {

    const buttons = document.getElementsByClassName('small-buttons');
    const responses = document.getElementsByClassName('response');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add(`glow${i + 1}`);
        responses[i].classList.add(`glow${i + 1}`);
    }

}
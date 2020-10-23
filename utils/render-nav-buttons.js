// render buttons connects with the three response buttons and 
// adds the functionality stored in the responses JSON
// if the button is live, 'active' is added to its classList
export function renderNavButtons(object) {
    const buttons = document.getElementsByClassName('small-buttons');
    // iterates through all buttons and JSON 'choices'
    for (let i = 0; i < buttons.length; i++) {
        // if there is a choice and button to pair in their arrays
        if (object.choices[i]) {
            // applies function passed from JSON
            buttons[i].onclick = function() {
                object.choices[i].responseFunction();
            };
            // grabs connected response element to add 'button-hover' class
            // 'button-hover' class causes background of both button and response box to change color
            // this is for when 'mouse enters button area'
            buttons[i].onmouseenter = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.add('button-hover');
            };
            // this is for when 'mouse is over button area'
            buttons[i].onmouseover = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.add('button-hover');
            };
            // this removes 'button-hover' class from button and response box
            // this is for when 'mouse is over button area'
            buttons[i].onmouseleave = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.remove('button-hover');
            };
            // gives user information that button is active by changing button text color
            buttons[i].style.color = 'maroon';
            buttons[i].classList.toggle('active');
        }
        else {
            // buttons that aren't connected to responses buttons are disabled
            resetNavButton(buttons[i]);
        }
    }
}
// resets nav button attributes, disables them
export function resetNavButtons() {
    const buttons = document.getElementsByClassName('small-buttons');
    for (let button of buttons) {
        resetNavButton(button);
    }
}
// disables individual nav buttons
function resetNavButton(button) {
    button.onclick = '';
    button.onmouseenter = '';
    button.onmouseleave = '';
    button.onmouseover = '';
    button.classList.toggle('active');
    button.style.color = 'black';
}
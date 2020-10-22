// render buttons connects with the three response buttons and 
// adds the functionality stored in the responses JSON
// if the button is live, 'active' is added to its classList
export function renderNavButtons(object){
    const buttons = document.getElementsByClassName('small-buttons');

    for (let i = 0; i < buttons.length; i++){
        if (object.choices[i]){

            buttons[i].onclick = function() {
                object.choices[i].responseFunction();
            };

            buttons[i].onmouseenter = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.add('button-hover');
            };

            buttons[i].onmouseover = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.add('button-hover');
            };

            buttons[i].onmouseleave = function() {
                let response = document.getElementById(`response${i + 1}`);
                response.classList.remove('button-hover');
            };

            buttons[i].style.color = 'maroon';
            buttons[i].classList.toggle('active');
        }
        else {
            buttons[i].classList.toggle('active');
            buttons[i].style.color = 'black';
            buttons[i].onclick = '';
            buttons[i].onmouseenter = '';
            buttons[i].onmouseleave = '';
            buttons[i].onmouseover = '';
        }
    }
}

export function resetNavButtons(){
    const buttons = document.getElementsByClassName('small-buttons');
    for (let button of buttons){
        button.onclick = '';
        button.onmouseenter = '';
        button.onmouseleave = '';
        button.onmouseover = '';
        button.classList.toggle('active');
        button.style.color = 'black';
    }
}

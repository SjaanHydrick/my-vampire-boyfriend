// render buttons connects with the three response buttons and 
// adds the functionality stored in the responses JSON
// if the button is live, 'active' is added to its classList
export function renderButtons(object){
    const buttons = document.getElementsByClassName('small-buttons');

    for (let i = 0; i < buttons.length; i++){
        if (object.choices[i]){
            buttons[i].onclick = function() {
                object.choices[i].responseFunction();
            };
            buttons[i].style.color = 'maroon';
            buttons[i].classList.toggle('active');
        }
        else {
            buttons[i].classList.toggle('active');
            buttons[i].style.color = 'black';
            buttons[i].onclick = '';
        }
    }

}
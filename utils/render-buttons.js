
export function renderButtons(object){
    const buttons = document.getElementsByClassName('small-buttons');

    for (let i = 0; i < buttons.length; i++){
        if (object.choices[i]){
            buttons[i].onclick = function () {
                object.choices[i].responseFunction();
            }
            buttons[i].style.color = 'maroon';
        }
        else {
            buttons[i].style.color = 'black';
            buttons[i].onclick = '';
        }
    }

}
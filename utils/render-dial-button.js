

export function renderDialButton(object){

    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = function () {object.responseFunction()};
    dialButton.textContent = "NEXT";
    

}

export function resetDialButton(){
    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = '';

}
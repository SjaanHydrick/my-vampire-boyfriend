
export function renderDialButton(object) {

    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = function () {
        object.responseFunction();
    };
    dialButton.textContent = object.buttonText;

}

export function resetDialButton() {
    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = '';
    dialButton.textContent = '';
}

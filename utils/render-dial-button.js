// grabs dial-button element assigns functionality
export function renderDialButton(object) {

    const dialButton = document.getElementById('dial-button');
    // pulls function data from JSON and assigns it to dial button
    dialButton.onclick = function () {
        object.responseFunction();
    };
    // applies appropriate text information from JSON
    dialButton.textContent = object.buttonText;

}

// resets dial button functionality and text content
// disables dial button
export function resetDialButton() {
    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = '';
    dialButton.textContent = '';
}

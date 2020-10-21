const button = document.querySelector('#dial-button')

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});

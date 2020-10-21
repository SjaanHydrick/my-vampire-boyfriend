import { setInLocalStorage } from '../utils/manage-local-storage.js';
const form = document.querySelector('form');

//const USER = 'USER';

function makePlayer(data) {
    const user = {
        name: data.get('name'),
        avatar: data.get('avatar'),
        gender: data.get('gender'),
        vampireAlive: true,
        playerAlive: true,
        chapters: 0,

    };
    return user;

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const player = makePlayer(data);
    setInLocalStorage(player);
    window.location.href = '../main/';
    

});


 
// import { saveUser } from './utils.js';
const form = document.querySelector('form');

const USER = 'USER';

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

function makePlayer(data) {
    const user = {
        name: data.get('name'),
        avatar: data.get('avatar'),
        gender: data.get('gender'),

    };
    return user;

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const player = makePlayer(data);
    saveUser(player);

});



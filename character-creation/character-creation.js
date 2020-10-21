// import { saveUser } from './utils.js';
import { setInLocalStorage } from '../utils/manage-local-storage.js';
const form = document.querySelector('form');

const USER = 'USER';

// export function saveUser(user) {
//     const stringyUser = JSON.stringify(user);

//     localStorage.setItem(USER, stringyUser);
// }

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
    // saveUser(player);
    setInLocalStorage(player);
    window.location.href = '../main/';
    

});


 